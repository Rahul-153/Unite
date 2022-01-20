import React from 'react';
import '../Styles/Card.css'
import { Link } from "react-router-dom";
function Card() {
  return <div className="Card-container">
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
  </div>;
}

export default Card;
