export default function reducer(state={
    tweets:[],
    fetched:false,
    error:null,

}, action){
    switch(action.type){
        case "FETCH_TWEETS_FULLFILLED":{
            return{
            ...state,
            fetched: true,
            tweets: actions.payload,
            }
        };
        case "FETCH_TWEETS_REJECTED":{
            return{
            ...state,
            fetched: false,
            error: action.payload,
            }
        };
    default:
    return state;
    };
}
