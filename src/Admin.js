import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import homeBg from "./img/home-bg.jpg";

import "./main.css";
import "./vendor/bootstrap/css/bootstrap.min.css";

import authData from "./auth";
import data from "./data";

const Admin = ({ history }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const [loginData, setLoginData] = useState("");
  const [passwordData, setPasswordData] = useState("");

  const handleLoginSubmit = event => {
    if (authData.login === loginData && authData.password === passwordData) {
      history.push("/create");
      setLoginData("");
      setPasswordData("");
    } else {
      console.log("Invalid data!");
    }
    event.preventDefault();
  };

  const handleLoginChange = event => setLoginData(event.target.value);

  const handlePasswordChange = event => setPasswordData(event.target.value);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container transformed-el">
          <a className="navbar-brand transformed-el" href="/">
            P.S.
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            onClick={() => setMenuIsActive(!menuIsActive)}
            type="button"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div
            className={`collapse navbar-collapse ${menuIsActive && "show"}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              {data.nav
                .filter(item => item.path !== "/create")
                .map(item => {
                  return (
                    <li key={item.id} className="nav-item">
                      <Link
                        className="nav-link"
                        to={item.path}
                        onClick={() => setMenuIsActive(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </nav>
      <header
        className="masthead"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Blog Admin</h1>
                <span className="subheading">A Blog by Polina Shulya</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto auth-form">
            <form onSubmit={handleLoginSubmit}>
              LOGIN
              <input
                type="text"
                value={loginData}
                onChange={handleLoginChange}
              />
              PASSWORD
              <input
                type="password"
                value={passwordData}
                onChange={handlePasswordChange}
              />
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p className="copyright text-muted">
                Copyright &copy; Polina Shulya 2019
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default withRouter(Admin);
