import React from "react";
import "../Styles/Main.css";
import {Link} from 'react-router-dom'
function Main() {
  return <div id="main">
    <div className="head1"><span>Unite</span></div>
    <div className="tagline">Join Create Progress</div>
    <div><p>This site will let you create, grow and enhance your skills</p></div>
    <div className="main-img"><img src="https://i.pinimg.com/236x/4b/ed/bd/4bedbd5645707a87609f7abf8bddbfc6.jpg"/></div>
    <div className="main-cards">
    <div class="posts">
      <div className="card-container">
      <div className="card1">
									<header>
									<h1>Workshops</h1>
									</header>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
										<div><Link to="/">Know More</Link></div>
								</div>
                <div className="card1">
									<header>
									<h1>Workshops</h1>
									</header>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
										<div><Link to="/">Know More</Link></div>
								</div>
      </div>
      <div className="card-container">
      <div className="card1">
									<header>
									<h1>Workshops</h1>
									</header>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
										<div><Link to="/">Know More</Link></div>
								</div>
                <div className="card1">
									<header>
									<h1>Workshops</h1>
									</header>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
										<div><Link to="/">Know More</Link></div>
								</div>
      </div>
      <div className="card-container">
      <div className="card1">
									<header>
									<h1>Workshops</h1>
									</header>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
										<div><Link to="/">Know More</Link></div>
								</div>
                <div className="card1">
									<header>
									<h1>Workshops</h1>
									</header>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
										<div><Link to="/">Know More</Link></div>
								</div>
      </div>
								
							</div>

    </div>
  </div>;
}

export default Main;
