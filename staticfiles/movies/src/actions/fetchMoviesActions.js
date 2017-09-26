import axios from 'axios';

export const FETCH_POPULAR_START = 'FETCH_POPULAR_START';
export const FETCH_POPULAR_SUCCESS = 'FETCH_POPULAR_SUCCESS';
export const FETCH_POPULAR_FAILED = 'FETCH_POPULAR_FAILED';

export function createMovieList() {
  const url ='http://127.0.0.1:8000/movie/restapi/movies/?format=json';

  return function (dispatch) {
    dispatch({
      type: FETCH_POPULAR_START,
      payload: {},
    });

    axios
      .get('http://127.0.0.1:8000/movie/restapi/movies/?format=json')
      .then(({ data })=> {
      	 dispatch({
          type: FETCH_POPULAR_SUCCESS,
          payload: {
            data: data
          }
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_POPULAR_FAILED,
          payload: {
            error
          }
        })
      })
  }
}
