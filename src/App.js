// import logo from './logo.svg';
import React from "react";
import api from './api';
import CharacterList from './Containers/CharacterList'
import './App.css';
import Form from './Components/Form'

class App extends React.Component {

  state = {
    api
  }

  submitHandler = (obj) => {
    let newArray = [this.state.api]
  }

  render() {

    return(
      <div className="container">
        <h1>Character App</h1>
        <Form/>
        <CharacterList characterArray={this.state.api}/>
      </div>
    );
  };
};

export default App;
