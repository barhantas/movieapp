import axios from "axios"


export function fetchMovies(){
    return function(dispatch){

    axios.get('http://127.0.0.1:8000/movie/restapi/movies/?format=json')
    .then((response)=> {
        dispatch({type:"FETCH_TWEETS_FULLFILLED", payload: response.data})
     })
     .catch((err)=> {
        dispatch({type:"FETCH_TWEETS_REJECTED", payload: err})
     })
    }

   }






