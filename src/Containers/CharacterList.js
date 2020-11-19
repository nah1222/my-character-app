import React from "react";
import CharacterCard from "../Components/CharacterCard"

class CharacterList extends React.Component{

    renderCharacters = () => {
        return this.props.characterArray.map(e => <CharacterCard key={e.id} character={e}/>)
    }
    
    render() {
        return(
            <div className="list">
                <h1>Characters</h1>
                {this.renderCharacters()}
            </div>
        )
    }
}

export default CharacterList;