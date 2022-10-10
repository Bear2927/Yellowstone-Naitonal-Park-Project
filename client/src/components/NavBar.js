import React from "react";
import {Link, useHistory} from "react-router-dom";


function NavBar({user, setUser}) {

  let history = useHistory()

  function handleLogout() {
    fetch("/logout", {method: "DELETE"});
    setUser(null);
    history.push("/Signup");
  }

  
    
      return( 
      <header className="navbar">
        {!user ? (
        <nav className="account2">
          <ul className="account2">
            <Link to="/signup" className="account2">Signup</Link>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul className="account2">
            <Link to="/" className="account2"> Home</Link>  |   
            <Link to="/form" className="account2"> Add Animal</Link>  |
            <Link to="/animals" className="account2"> Animals</Link>  | 
            <Link to="/geysers" className="account2"> Geysers</Link>  |
            <Link to="/wish" className="account2"> Wish List</Link>  
          </ul>
          <div>
            <button onClick={() => handleLogout()}>Logout</button>
          </div> 
        </nav>)}
        </header>
      )
}

export default NavBar;