import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

 class Home extends React.Component {
    render(){
        // console.log(this.props);
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, and you age is {this.props.age}</p>
                <div>
                    <h4>Hobbies:</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={shortid.generate()}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                <p>{this.props.children}</p>
            </div>
        )
    }
};

Home.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
}

export default Home;