import React from "react";
import characters from "../api";
import CharacterCard from "../Components/CharacterCard"
import Form from '../Components/Form'
import SearchForm from "../Components/SearchForm"

class CharacterList extends React.Component{

    state = {
        api: characters,
        searchValue: ""
    };


    submitHandler = (obj) => {
        console.log('submitting', obj)
        //take the obj
        //add obj to our current api in state
        this.setState({api:[...this.state.api, obj]})
        //this line is taking a copy of array setting it to equal api and adding new obj
    }

    searchChangeHandler = (e) => {
        this.setState({searchValue: e.target.value})
    }

    renderCharacters = () => {
        //filter and find all the dogs that match
        let filteredArray = this.state.api.filter(el => el.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        //map through the filtered array
        //filter => if you're matching "" it always returns true
        return filteredArray.map(e => <CharacterCard key={e.id} character={e} />)
        // return this.state.api.map(e => <CharacterCard key={e.id} character={e} />)
    }

    //thunk(important later)
    
    render() {
        console.log(this.api)
        return(
            <div className="list">
                <h1>Characters</h1>
                <Form submitHandler={this.submitHandler}/>
                <SearchForm searchValue={this.state.searchValue} changeHandler={this.searchChangeHandler}/>
                {this.renderCharacters()}
            </div>
        )
    }
}

export default CharacterList;