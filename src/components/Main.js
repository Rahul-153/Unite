import React from "react";
import "../Styles/Main.css";
import { Link } from "react-router-dom";
import Card from "./Card";
function Main() {
  return (
    <div id="main">
      <div className="head1">
        <span>Unite</span>
      </div>
      <div className="tagline">Join Create Progress</div>
      <div>
        <img src="https://bit.ly/33Qjdi7" className="main-img" />
      </div>
      <div className="desc">
        <p>This site will let you create, grow and enhance your skills</p>
      </div>
      <div className="main-cards">
        <div className="posts">
          <div className="post1">
          <Card/>
          <Card/></div>
          <div className="post1">
          <Card/>
          <Card/></div>
          {/* <div className="card-container">
            <div className="card1">
              <header>
                <h1>Projects</h1>
              </header>
              <div>
                <img src="https://bit.ly/3KqXSN0" className="post-img" />
              </div>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam.
              </p>
              <div className="know-container">
                {" "}
                <Link to="/" className="know">
                  Know More
                </Link>
              </div>
            </div>
            <div className="card1">
              <header>
                <h1>Workshops</h1>
              </header>
              <div>
                <img src="https://bit.ly/3KqXSN0" className="post-img" />
              </div>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam.
              </p>
              <div className="know-container">
                {" "}
                <Link to="/" className="know">
                  Know More
                </Link>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card1">
              <header>
                <h1>Discussions Forum</h1>
              </header>
              <div>
                <img src="https://bit.ly/3KqXSN0" className="post-img" />
              </div>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam.
              </p>
              <div className="know-container">
                {" "}
                <Link to="/" className="know">
                  Know More
                </Link>
              </div>
            </div>
            <div className="card1">
              <header>
                <h1>Community</h1>
              </header>
              <div>
                <img src="https://bit.ly/3KqXSN0" className="post-img" />
              </div>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam.
              </p>
              <div className="know-container">
                {" "}
                <Link to="/" className="know">
                  Know More
                </Link>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card1">
              <header>
                <h1>Wanna Learn</h1>
              </header>
              <div>
                <img src="https://bit.ly/3KqXSN0" className="post-img" />
              </div>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam.
              </p>
              <div className="know-container">
                {" "}
                <Link to="/" className="know">
                  Know More
                </Link>
              </div>
            </div>
            <div className="card1">
              <header>
                <h1>Workshops</h1>
              </header>
              <div>
                <img src="https://bit.ly/3KqXSN0" className="post-img" />
              </div>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam.
              </p>
              <div className="know-container">
                {" "}
                <Link to="/" className="know">
                  Know More
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
