import React from "react";
import { Link} from "react-router-dom";
import '../Styles/Nav.css'

function Nav() {
  return (
    <div className="Nav">
        <ul className="links">
          <Link className="nav-links" to="/">Home</Link>
          <Link className="nav-links" to="/">WorkShops</Link>
          <Link className="nav-links" to="/">Join Our Community</Link>
          <Link className="nav-links" to="/">Discussions</Link>
        </ul>
    </div>
  );
}

export default Nav;
