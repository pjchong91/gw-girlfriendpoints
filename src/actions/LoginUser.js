export const LoginUser = (username) => {
    console.log(username, ' is now logged in');
    return {
        type: "LOGIN_USER",
        payload: username
    }
}

