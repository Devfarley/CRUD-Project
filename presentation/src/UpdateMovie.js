import React from 'react';


 class UpdateMovieForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            _id: "",
            title: "",
            rating: "",
            length:""
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        console.log(event.target)
        this.setState({
                [event.target.name]: event.target.value
            },
            () => {console.log(this.state)}
        )
        
    }
    handleSubmit = (event) => {
        const id = this.state._id
        console.log(id)
        event.preventDefault();
        const {_id,...data} = this.state
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/movies/` + id,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        }).then(() => this.setState({ _id: "",title: "",rating: "",length:""}))
        .then(this.props.refresh)
    }
    render(){
        return(
        <div class="flex-container">
            <form onSubmit={this.handleSubmit} >
                <h1>Update Movie</h1>
                <label htmlFor="movie_id">Movie Id: </label>
                <input type="text" name='_id' id="movie_id" value={this.state._id} onChange={this.handleChange}/>
                <label htmlFor="movieTitle">Movie Title: </label>
                <input type="text" name='title' id="movieTitle" value={this.state.title} onChange={this.handleChange}/>
                <label htmlFor="movieRating">Movie Rating: </label>
                <input type="text" name='rating' id="rating" value={this.state.rating} onChange={this.handleChange}/>
                <label htmlFor="movieLength">Movie Length: </label>
                <input type="text" name='length' id="length" value={this.state.length} onChange={this.handleChange}/>
                <input type="submit" value="submit" />
            </form>
        </div>
        );
    }
}

export default UpdateMovieForm;