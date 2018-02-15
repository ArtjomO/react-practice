import React from "react";
import { render } from "react-dom";


const Header = (props) => {

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">{props.homeLink}</a></li>
                            <li><input type="text" onChange={(e) => props.change(e.target.value)} /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );

}

export default Header;