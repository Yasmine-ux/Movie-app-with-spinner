import React, { Component } from 'react';
import '../App.css';
import SearchBox from './SearchBox';
import Rating from './Rating';
import MovieList from './MovieList';
import UpdateComponent from './withLoading';
import Spinner from './spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addmovie from './modal';


const Inception = 
    {title:'Inception', 
    id:'id1',
    year: '2010', 
    rating:'5', 
    image : 'https://i.pinimg.com/originals/52/b0/32/52b032fc24caa038ebf1df9800049fc7.png'
}
const Interstaller = {
  id:'id2',
    title : 'Interstaller',
    year : '2014',
    rating:'3',
    image :'https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg'
}
const ThePatriot = {
    id:'id3',
    title : 'The Patriot',
    year : '2000',
    rating:'2',
    image :'https://fr.web.img3.acsta.net/medias/nmedia/18/86/66/97/19853893.jpg'
}
const Moviestodisplay =[Inception, Interstaller, ThePatriot]

class  App extends Component{
  constructor(props){
    super(props)
    this.state={
      minRating:1,
      movies: Moviestodisplay,
      searchTerm:''
    }
  }
  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  MovieFilterRating () {
    return (
      this.state.movies.filter (
        el => 
        el.rating >= this.state.minRating && el.title.toLowerCase().includes(this.state.searchTerm.toLowerCase().trim())
        )
    )
  }
  render (){
    if (this.props.loading === true){
      return (
          <Spinner/>
      )
       }else {
  return (
    <div className="Movie-app">
      <header className='Movie-app-header'>
       <SearchBox value={this.state.searchTerm}
       onchange={(newTerm)=> this.setState({
         searchTerm:newTerm
       })}
       />
        <Rating count={this.state.minRating}
        Onchange={(newRating) => {
          this.setState({
            minRating: newRating
          })
        }}
        />
      </header>
      <main className='movie-app-main'>
        <MovieList movies={this.MovieFilterRating()}
        onAddMovie={(newMovie) => this.addNewMovie(newMovie)}
        />
        <Addmovie rating={this.state.props} onSubmit={this.addNewMovie}/>
      </main>
    </div>
    )}
}}
export default UpdateComponent(App);


