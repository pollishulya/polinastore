import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import homeBg from "./img/home-bg.jpg";

import "./main.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import data from "./data";

const Create = ({ history }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const [titlePost, setTitlePost] = useState("");
  const [textPost, setTextPost] = useState("");

  const handlePostSubmit = event => {
    const initialData = [];
    const postsFromLS = JSON.parse(localStorage.getItem("posts"));
    if (!postsFromLS) {
      localStorage.setItem(
        "posts",
        JSON.stringify([
          ...initialData,
          {
            id: 1,
            title: titlePost,
            text: textPost
          }
        ])
      );
    } else {
      localStorage.setItem(
        "posts",
        JSON.stringify([
          ...postsFromLS,
          {
            id: postsFromLS.length + 1,
            title: titlePost,
            text: textPost
          }
        ])
      );
    }
    history.push("/");
    event.preventDefault();
  };

  const handleTitleChange = event => setTitlePost(event.target.value);

  const handleTextChange = event => setTextPost(event.target.value);

  const handlePostsDelete = () => {
    localStorage.clear();
    history.push("/");
  };

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
          <div className="col-lg-8 col-md-10 mx-auto post-form">
            <form onSubmit={handlePostSubmit}>
              TITLE
              <input
                type="text"
                value={titlePost}
                onChange={handleTitleChange}
              />
              TEXT
              <textarea value={textPost} onChange={handleTextChange} />
              <button type="submit">ADD POST</button>
            </form>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <button onClick={handlePostsDelete} className="delete-all-button">
            DELETE ALL POSTS
          </button>
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

export default withRouter(Create);
