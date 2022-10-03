import React from "react";
import {Link} from "react-router-dom";

function NavBar() {

    return(
      <header className="navbar">
        <nav className="nav">
          <ul className="nav">
               <Link to="/" className="nav">Home</Link>  |  
               <Link to="/form" className="nav">Add Animal</Link>  | 
               <Link to="/animals" className="nav">Animals</Link>  |
               <Link to="/geysers" className="nav">Geysers</Link>
          </ul>
            
            
        </nav>
      </header>
    )
}

export default NavBar