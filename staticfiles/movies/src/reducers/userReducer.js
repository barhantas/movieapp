export default function reducer(state={
    user:{
        name:null,
        age:null,

    }

}, action) {
    switch(action.type){
        case "SET_USER_NAME":{
            return{
            ...state,
            user:{...state.user, name: action.payload},
            }
        };
        case "SET_USER_AGE":{
            return{
            ...state,
            user:{...state.user, age : action.payload},
            }
        };
    default:
    return state;
    };
}