import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Header from './Header';

 class Home extends React.Component {
    //  in consructor, you write the code that will be executed straght away when it will be rendered (or not?)
     constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };

        // props.greet() // function passed from parent component

        setTimeout(() => {
            this.setState({
                status: "status was changed"
            })
        }, 3000)
     };
     
    //  out of constructor you write code that you want to be executed later (or not?)
     onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    };

     
    kek = "some shiet"
    
     render(){
        return (
            <div>
                <input type="text" onChange={(e) => this.props.change(e.target.value)} />
                <p>In a new component</p>
                <p>Your name is {this.props.name}, and you age is {this.state.age}</p>
                <p>Home propertie: {this.props.initialAge}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older!</button>
                <hr/>
                <button className="btn btn-success" onClick={this.props.greet}>Say hello</button>
                {this.kek}
            </div>

        )
    }
};

Home.PropTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func
}

export default Home;