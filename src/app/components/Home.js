import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

 class Home extends React.Component {
    render(){

        constructor(props){
            super();
            this.age = props.age;
        };

        onMakeOlder() {
            this.age += 3;
        }

        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, and you age is {this.age}</p>
                <hr/>
                <button className="button-primary" >Make me older!</button>
            </div>

        )
    }
};

Home.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default Home;