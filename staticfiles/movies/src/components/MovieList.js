import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { createMovieList } from '../actions/fetchMoviesActions';


class MovieList extends Component {

//componentWillMount() {
//    const { dispatch } = this.props;
//    dispatch(createMovieList());
//  }

constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount(){
    axios
      .get('http://127.0.0.1:8000/movie/restapi/movies/?format=json')
      .then(({ data })=> {
      	this.setState({
          data: data
        });
      })
      .catch((err)=> {})

  }
  render() {
    const { movielist } = this.props;



    const movieList = this.state.data.map((el, index) => {
      return (


            <div className="movieElement" key={index} >

            <Link to={'details/'+el.movie_id} >
            <img className="moviePic" src={'https://image.tmdb.org/t/p/w500' + el.poster_path} alt="movie.." />
            </Link>
            <div className="caption">
               <h3> {el.title}</h3>
               <p>{el.overview}</p>
              <p>Average Rate:{el.vote_average}</p>
           </div>

           </div>


   )});

    return(
    <div>
         <div className="container">

          {movieList}
        </div>
     </div>
    );}
}

//export default MovieList;

//
//function mapStateToProps(state) {
//  return {
//    movielist: state.data,
//  };
//}
//
//function mapDispatchToProps(dispatch) {
//  return {
//    dispatch,
//  }
//}


//export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
export default MovieList;
