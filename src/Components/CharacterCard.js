import React from "react";



const CharacterCard = (props) => {
    
    let {character} = props
    // console.log(character)
    return (
        <div className="card">
          <img alt="character" src={character.img} />
          <h2>{character.name}</h2>
          <h4>{character.show}</h4>
        </div>
      );
}
export default CharacterCard;