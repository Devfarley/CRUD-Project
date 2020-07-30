import React from 'react';
import Movie from './Movie';
import AddMovieForm from './AddMovie'
import DeleteMovieForm from './DeleteMovie'

class Movies extends React.Component{
    state = {
        movies: []
    }
    
    getMovies = () => {
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/movies`)
            .then(response => response.json())
            .then(data => this.setState({movies:data}))
    }
   
    componentDidMount(){
        this.getMovies();
    } 

    render(){
        const displayMovies = this.state.movies.map(movie => <Movie key={movie._id} movie={movie.title}/>) 
        return (
            <div>
                <AddMovieForm refresh={this.getMovies}/> 
                <ul>
                    {displayMovies}
                </ul>
                <DeleteMovieForm refresh={this.getMovies}/>
            </div>    
        );
    }

}

export default Movies;