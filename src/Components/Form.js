import React from "react";

class Form extends React.Component{
    render(){
        console.log (this.props)
        return(
            <form onSubmit={(e) => {
                e.preventDefault()
            }}> 
                <input type="text" placeholder="character name"/>
                <input type="url" placeholder="image url"/>
                <input type="text" placeholder="show"/>
                <input type="submit" value="Create Character!"/>
            </form>
        )
    }
}

export default Form;