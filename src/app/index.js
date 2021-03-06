import ReactDOM from "react-dom";
import React from "react";

import Home from "./components/Home"
import Header from './components/Header';


class App extends React.Component {
    constructor() {
        super()

        this.state = {
            link: "Home"
        }
    };

    onChangeLinkName(newName){
        this.setState({
            link: newName
        });

    };

    onGreet() {
        alert("hello")
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.link} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={8}
                                initialAge={27}
                                greet={this.onGreet}
                                change={this.onChangeLinkName.bind(this)}
                           />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));