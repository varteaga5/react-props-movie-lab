import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import CardFront from './card-components/CardFront'
import CardBack from './card-components/CardBack'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movie) => (
    <React.Fragment>
    <MovieCard key={movie.title} title={movie.title} imdb={movie.IMDBRating} genre={movie.genres} poster={movie.poster} />
    <CardFront key={movie.title} title={movie.title} imdb={movie.IMDBRating} genre={movie.genres} poster={movie.poster} />
    <CardBack key={movie.title} title={movie.title} imdb={movie.IMDBRating} genre={movie.genres} poster={movie.poster} />
    </React.Fragment>))
    
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
