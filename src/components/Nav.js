import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">VappyNews</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/sports"> Sports </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/healt">Healt</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
