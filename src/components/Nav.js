import React from "react";
import { Link} from "react-router-dom";
import '../Styles/Nav.css'

function Nav() {
  const clickNav=()=>{
    var bars=document.getElementsByClassName(bars);
    if(bars.style.display==="none"){

    }
  }
  return (
    <div className="Nav">
        <div className="links">
          <div className="links-container"><Link className="nav-links" to="/">Home</Link></div>
          <div className="links-container"><Link className="nav-links" to="/project">Projects</Link></div>
          <div className="links-container"><Link className="nav-links" to="/project">Workshops</Link></div>
          <div className="links-container"><Link className="nav-links" to="/">Join Our Community</Link></div>
          <div className="links-container"><Link className="nav-links" to="/discussions">Discussions</Link></div>
        </div>
        <div className="bars"><i class="fa fa-bars fa-2x" onClick={clickNav}></i></div>
    </div>
  );
}

export default Nav;
