import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

 class Home extends React.Component {
     constructor(props){
        super();
        this.age = props.age;
     };
     
     state = {
         age: this.age
     }

     onMakeOlder() {
        console.log(this.age)
        this.setState({
            age: this.age + this.state.age
        })
    }
     
     render(){
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, and you age is {this.state.age}</p>
                <hr/>
                <button className="button-primary" onClick={this.onMakeOlder.bind(this)}>Make me older!</button>
            </div>

        )
    }
};

Home.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default Home;