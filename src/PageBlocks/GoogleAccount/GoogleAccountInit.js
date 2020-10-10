import { 
    getClientIp, getRequestToken, GRAPHQL_URL, GOOGLE_CLIENT_ID as googleClientId,
    LOCAL_STORAGE_NAMES, SIGN_IN_METHOD
} from "../../Globals/Config";
import { update } from "../../Globals/ReduxStores/AppSlice";
import { login } from '../../Globals/ReduxStores/UserSlice';

const GoogleAccountInit = (dispatchCallback, auth2) => {

    const dispatch = dispatchCallback;
    const signedIn = auth2.isSignedIn.get();

    const GOOGLE_SIGN_IN_MUTATION = `mutation LoginWithSocialID($social_id_type: String, $social_id: String, $first_name: String, $last_name: String, $email_id: String, $image_address: String, $client_ip: String, $request_token: String) {
        LoginWithSocialID(social_id_type: $social_id_type, social_id: $social_id, first_name: $first_name, last_name: $last_name, email_id: $email_id, image_address: $image_address, client_ip: $client_ip, request_token: $request_token) {
            message,
            token,
        }
    }`;

    const signInCallBack = async (signedIn) => {
        console.log('signInCallback', signedIn);
        if (signedIn) {
            dispatch (update ({
                signing_in: true,
            }));
            const currentUser = auth2.currentUser.get();
            const profile = currentUser.getBasicProfile();

            const signInMutationVariables = {
                social_id_type:  SIGN_IN_METHOD.GOOGLE,
                social_id: profile.getId(), 
                first_name: profile.getGivenName(),
                last_name: profile.getFamilyName(),
                email_id: profile.getEmail(),
                image_address: profile.getImageUrl(),
                client_ip: await getClientIp(),
                request_token: getRequestToken(),
            }

            fetch(GRAPHQL_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: GOOGLE_SIGN_IN_MUTATION,
                    variables: signInMutationVariables,
                })
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.data.LoginWithSocialID['message'] === "SUCCESS") {
                    let token = response.data.LoginWithSocialID['token'];
                    localStorage.setItem(LOCAL_STORAGE_NAMES.PREVIOUS_SIGN_IN_METHOD, SIGN_IN_METHOD.GOOGLE);
                    localStorage.setItem(LOCAL_STORAGE_NAMES.PREVIOUSLY_SIGNED_IN, true);

                    //used to reuse signInMutationVariables with redux store
                    const userState = ({ client_ip, request_token, social_id, ...rest }) => rest;

                    dispatch (login ({
                        ...userState(signInMutationVariables),
                        authorization_token: token,
                    }));
                }
                else {
                    alert("Login With Social ID error " + response.data.LoginWithSocialID['message']);
                    auth2.signOut();
                }
            })
            .catch( err => console.log("Google Sign In Callback Error: ", err))
            .finally(() => {
                dispatch (update ({
                    signing_in: false,
                }));
            });
            console.log(signInMutationVariables);
        }
    }

    if (signedIn) {
        signInCallBack(signedIn);
        auth2.isSignedIn.listen(signInCallBack);
    }
    else {
        auth2.isSignedIn.listen(signInCallBack);
    }
}

export default GoogleAccountInit;