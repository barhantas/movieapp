import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'

import movieApp from '../reducers'

import {
  movielistSuccess,
  movielistFail,
} from '../actions/movielistActions'

import {
  setUserName,
  setUserAge,
} from '../actions/userActions'




import MovieList from '../components/MovieList.js'
import MovieDetails from '../components/MovieDetails'
import AppHeader from '../components/AppHeader.js'

import Registration from '../components/Registration.js'


import '../css/App.css';


let store = createStore(movieApp, applyMiddleware(thunk,logger))
//
//store.dispatch(movielistSuccess())
//store.dispatch(movielistFail())
//store.dispatch(setUserName("baris"))
//store.dispatch(setUserAge(23))




class App extends Component {
  render() {
    return (<Provider store={store}>
    <div>

    <AppHeader />

     <Router>
        <div>
            <Route exact path="/" component={MovieList}/>
            <Route path="/aa" component={Registration}/>
            <Route path={'/details/:movie_id'} component={MovieDetails}/>

        </div>
    </Router>

</div>
       </Provider>
    );

  }


}

export default App;
