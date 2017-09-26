import { combineReducers } from "redux";


import tweets from "./tweetsReducer.js"
import user from "./userReducer"
import movielist from "./movielistReducer"

const movieApp = combineReducers({
    movielist,
})

export default movieApp
