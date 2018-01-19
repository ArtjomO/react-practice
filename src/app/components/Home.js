import React from "react";

class Home extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, and you age is {this.props.age}</p>
            </div>
        )
    }
}

export default Home;