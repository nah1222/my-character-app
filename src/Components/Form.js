import React from "react";

class Form extends React.Component{

    state={
        name: "",
        image: "",
        show: "",

    };

    changeHandler= (e) => {
        // console.log('changing');
        //listen for a change
        //find a key in state that should be changed
        //rerender our component

        //e.target.name is used because it lines up with the keys inside of state
        this.setState({[e.target.name]: e.target.value});
    };

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        
        //resets form after submission
        this.setState({
            name: "",
            breed: "",
            img: ""
        });
    };

    render(){
        // console.log (this.props)
        return(
            <form onSubmit={this.localSubmitHandler}> 
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.changeHandler}/>
                <input type="text" placeholder="image" name="image" value={this.state.image} onChange={this.changeHandler}/>
                <input type="text" placeholder="show" name="show" value={this.state.show} onChange={this.changeHandler}/>
                <button>Submit!</button>
            </form>
        )
    }
}

export default Form;