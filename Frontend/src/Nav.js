import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/">BYU Information Systems Lab</Link>
            
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                </ul>
                <Link className="form-inline my-2 my-lg-0" to="/app">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Feedback</button>
                </Link>
            </div>
        </nav>
    );
}

export default Nav;