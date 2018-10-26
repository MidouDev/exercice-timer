import React from 'react';
import './Header.css';

const Header = () => (
    <div className="header navbar navbar-light bg-dark ">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-hourglass-half my-auto text-white fa-3x"></i>
                <div className="h3 ml-3 my-auto text-light">React Timer</div>
            </div>
        </div>
    </div>
)

export default Header;