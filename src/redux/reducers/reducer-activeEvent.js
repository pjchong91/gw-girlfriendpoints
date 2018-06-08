export default function(state=null,action){
    switch(action.type) {
        case "ADD_POINT_EVENT" :
            return action.payload;
            break;
    }
    return state;
}