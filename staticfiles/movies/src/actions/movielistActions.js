export const SET_MOVIE_LIST_SUCCESS = 'SET_MOVIE_LIST_SUCCESS'
export const SET_MOVIE_LIST_FAIL = 'SET_MOVIE_LIST_FAIL'
export function movielistSuccess(payload){
    return{
        type:SET_MOVIE_LIST_SUCCESS,
        payload : "True",
    }
}

export function movielistFail(payload){
    return{
        type:SET_MOVIE_LIST_FAIL,
        payload : "False",
    }
}