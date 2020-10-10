import { 
    getClientIp, getRequestToken, GRAPHQL_URL, GOOGLE_CLIENT_ID as googleClientId,
    LOCAL_STORAGE_NAMES, SIGN_IN_METHOD
} from "../../Globals/Config";
import { GOOGLE_SIGN_IN_MUTATION } from "../../Globals/Graphql/MutationTemplates/Account";
import { update } from "../../Globals/ReduxStores/AppSlice";
import { login } from '../../Globals/ReduxStores/UserSlice';

const GoogleAccountInit = (dispatchCallback, auth2) => {

    const dispatch = dispatchCallback;
    const signedIn = auth2.isSignedIn.get();

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