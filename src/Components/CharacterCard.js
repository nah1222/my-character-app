import React from "react";



const CharacterCard = (props) => {
    
    let {character} = props

    return (
        <div className="card">
          <img alt="character" src={character.img} />
          <h2>{character.name}</h2>
        </div>
      );
}
export default CharacterCard;