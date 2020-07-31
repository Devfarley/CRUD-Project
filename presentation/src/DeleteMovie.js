import React from 'react';


 class DeleteMovieForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            _id: ""
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
        if (window.confirm("Are you sure you want to delete this movie?")) {
            const {...data} = this.state
        const api_url = process.env.REACT_APP_API_URL
        fetch(`${api_url}/movies`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        }).then(() => this.setState({ _id: ""}))
        .then(this.props.refresh)
        alert("The movie has been deleted")
        } else {
          alert("The movie was not deleted")
        }
    }
    render(){
        return(
        <div class="flex-container">
            <form onSubmit={this.handleSubmit} >
                <h1>Delete Movie</h1>
                <label htmlFor="movieId">Movie Id: </label>
                <input type="text" name='_id' id="movieId" value={this.state._id} onChange={this.handleChange}/>
                <input type="submit" value="submit"  />
            </form>
        </div>
        );
    }
}

export default DeleteMovieForm;