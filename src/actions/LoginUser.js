export const LoginUser = (users) => {
    
    console.log('Clicked Login!!');
    return {
        type: "LOGIN_USER",
        payload: users
    }
}