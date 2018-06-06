import React, { Component } from 'react';
import './App.css';
import $ from  'jquery';
import MovieCard from './MovieCard';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      movieList: []
    };

    this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  //This function returns the response of the movie data, from AJAX request 
  getMovieDetails = () => {
     return $.ajax({
      url:"http://www.omdbapi.com/?i=tt3896198&apikey=1050fd16&s=back",
      type: "GET",
      crossDomain: true,
      success: function(data) {
        return data;
      },
      error: function() {
          alert('Error occured');
      }
    });
  }

  
/* Once the component is mounted, a call to the getMovieDetails function is made
and the App's component state is updated with the returned data */
componentDidMount() {
  this.getMovieDetails().done(function(data){
    this.setState({
      movieList: data.Search
    })
    //console.log(this.state.movieList);
  }.bind(this));
}

  render() {
    return (
      <div className="App">
        {this.state.movieList.map((movie) => {
          return <MovieCard key={movie.imdbID} data={movie}/> 
        })}
        
      </div>
    );
  }
}

export default App;
