import React from "react";
import { Link} from "react-router-dom";


function Nav() {
  return (
    <div className="Nav">
      <nav id="nav">
        <ul className="links">
          <Link className="active"><a to="index.html">Home</a></Link>
          <Link><a to="/">WorkShops</a></Link>
          <Link><a to="/">Join Our Community</a></Link>
          <Link><a to="/">Discussions</a></Link>
        </ul>
        <ul className="icons">
          <Link><a to="/" className="icon brands fa-twitter"><span className="label">Twitter</span></a>
          </Link>
          <Link>
            <a to="/" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </Link>
          <Link>
            <a to="/" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </Link>
          <Link>
            <a to="/" className="icon brands fa-github">
              <span className="label">GitHub</span>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
