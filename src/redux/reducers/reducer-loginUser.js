export default function(state=null,action){
    switch(action.type) {
        case "LOGIN_USER" :
            return action.payload;
            break;
    }
    return state;
}