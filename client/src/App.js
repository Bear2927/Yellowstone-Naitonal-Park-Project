import { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import AnimalDirectory from "./components/AnimalDirectory";
import SubmitForm from "./components/SubmitForm";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import GeyserDirectory from "./components/GeyserDirectory";
import WishList from "./components/WishList";

function App() {
   const [wishList, setWishList] = useState([]);
   const [user, setUser] = useState(null)

   
   useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  function handleRemoveItem(item) {
    setWishList(wishList.filter(i => i.id !== item.id))
  }

  function handleWishListItem(favoriteItem) {
    setWishList([...wishList, favoriteItem])
  }

  return (
    
    <BrowserRouter>
      <div className="App">
      <NavBar user={user} setUser={setUser}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/animals">
            <AnimalDirectory 
            handleWishListItem={handleWishListItem}
            wishList={wishList}
            handleRemoveItem={handleRemoveItem}
            />
          </Route>
          <Route path="/geysers">
            <GeyserDirectory
            handleWishListItem={handleWishListItem}
            wishList={wishList}
            handleRemoveItem={handleRemoveItem}
            />
          </Route>
          <Route path="/wish">
            <WishList 
            wishList={wishList}
            handleRemoveItem={handleRemoveItem}
            />
          </Route>
          <Route path="/form">
            <SubmitForm/>
          </Route>
          <Route path="/login">
            <Login 
            setUser={setUser} 
            user={user}
            />
          </Route>
          <Route path="/signup">
            <Signup 
            setUser={setUser} 
            user={user}
            />
          </Route>
          <Route path="*">
            <h1>404 Page not found</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
