//account related queries

const GOOGLE_SIGN_IN_MUTATION = `mutation LoginWithSocialID($social_id_type: String, $social_id: String, $first_name: String, $last_name: String, $email_id: String, $image_address: String, $client_ip: String, $request_token: String) {
    LoginWithSocialID(social_id_type: $social_id_type, social_id: $social_id, first_name: $first_name, last_name: $last_name, email_id: $email_id, image_address: $image_address, client_ip: $client_ip, request_token: $request_token) {
        message,
        token,
    }
}`;

const SIGN_IN_MUTATION = `mutation SignInAction($username: String, $client_ip: String, $request_token: String, $password: String) {
    SignInAction(username: $username, client_ip: $client_ip, request_token: $request_token, password: $password) {
        first_name,
        last_name,
        email_id,
        message,
        token,
    }
}`;

const SIGN_UP_MUTATION = `mutation SignUpAction($first_name: String, $last_name: String, $email_id: String, $client_ip: String, $request_token: String, $mobile_no1: String, $password: String) {
    SignUpAction(first_name: $first_name, last_name: $last_name, email_id: $email_id, client_ip: $client_ip, request_token: $request_token, mobile_no1: $mobile_no1, password: $password) {
        first_name,
        last_name,
        email_id,
        message,
        token,
    }
}`;

export {
    GOOGLE_SIGN_IN_MUTATION,
    SIGN_IN_MUTATION,
    SIGN_UP_MUTATION,
}