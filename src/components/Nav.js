import React from "react";
import { Link} from "react-router-dom";
import '../Styles/Nav.css'

function Nav() {
  return (
    <div className="Nav">
        <div className="links">
          <div className="links-container"><Link className="nav-links" to="/">Home</Link></div>
          <div className="links-container"><Link className="nav-links" to="/">WorkShops</Link></div>
          <div className="links-container"><Link className="nav-links" to="/">Join Our Community</Link></div>
          <div className="links-container"><Link className="nav-links" to="/">Discussions</Link></div>
        </div>
    </div>
  );
}

export default Nav;
