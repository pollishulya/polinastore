import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import homeBg from "./img/home-bg.jpg";

import "./main.css";
import "./vendor/bootstrap/css/bootstrap.min.css";

import data from "./data";

const Main = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsFromLS = JSON.parse(localStorage.getItem("posts"));
    const initialData = [];

    if (!postsFromLS) {
      localStorage.setItem("posts", JSON.stringify(initialData));
      setPosts(initialData);
    } else {
      setPosts(postsFromLS);
    }
  }, []);

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
                <h1>My Life</h1>
                <span className="subheading">A Blog by Polina Shulya</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {posts.length ? (
              posts.map(post => {
                return (
                  <div key={post.id}>
                    <h2>{post.title}</h2>
                    <span>{post.text}</span>
                    <hr />
                  </div>
                );
              })
            ) : (
              <h1>Please, enter your first post...</h1>
            )}
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

export default Main;
