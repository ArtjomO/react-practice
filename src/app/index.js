import ReactDOM from "react-dom";
import React from "react";

import Home from "./components/Home"
import Header from './components/Header';


class App extends React.Component {
    render() {
        const user = {
            name: "Anna",
            hobbies: ["sports"]
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={8} age={27} user={user}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));