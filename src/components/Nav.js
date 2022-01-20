import React,{useState} from "react";
import { Link} from "react-router-dom";
import '../Styles/Nav.css'

function Nav() {
  const [showNav,setshowNav]=useState(false);
  return (
    <div className="Nav">
        <div className={showNav?"mobile-view":"links"}>
          <div className="links-container"><Link className="nav-links" to="/">Home</Link></div>
          <div className="links-container"><Link className="nav-links" to="/project">Projects</Link></div>
          <div className="links-container"><Link className="nav-links" to="/project">Workshops</Link></div>
          <div className="links-container"><Link className="nav-links" to="/community">Community</Link></div>
          <div className="links-container"><Link className="nav-links" to="/discussions">Discussions</Link></div>
        </div>
        <div className="bars"><i class="fa fa-bars fa-2x" onClick={()=>{setshowNav(!showNav)}}></i></div>
    </div>
  );
}

export default Nav;
