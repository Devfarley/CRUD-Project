import React from 'react';


 class AddMovieForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            rating: "",
            length:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        console.log(event.target)
        this.setState({
                [event.target.name]: event.target.value
            }
        )
        
    }
    handleSubmit(event){
        event.preventDefault();
        const {...data} = this.state
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/movies`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        }).then(() => this.setState({ title: "",rating: "",length:""}))
        .then(this.props.refresh)
    }
    render(){
        return(
        <div>
            <h1>Add Movie</h1>
            <form>
                <label htmlFor="movieTitle">Movie Title: </label>
                <input type="text" name='title' id="movieTitle" value={this.state.title} onChange={this.handleChange}/>
                <br></br>
                <label htmlFor="movieRating">Movie Rating: </label>
                <input type="text" name='rating' id="rating" value={this.state.rating} onChange={this.handleChange}/>
                <br></br>
                <label htmlFor="movieLength">Movie Length: </label>
                <input type="text" name='length' id="length" value={this.state.length} onChange={this.handleChange}/>
                <br></br>
                <input type="submit" value="submit" onClick={this.handleSubmit} />
            </form>
        </div>
        );
    }
}

export default AddMovieForm;