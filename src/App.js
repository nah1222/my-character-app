// import logo from './logo.svg';
import React from "react";
// import api from './api';
import CharacterList from './Containers/CharacterList'
import './App.css';

class App extends React.Component {

  // state = {
  //   api
  // }

  render() {

    return(
      <div className="container">
        <h1>Character App</h1>
        <CharacterList/>
      </div>
    );
  };
};

export default App;
