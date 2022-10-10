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
   const [animals, setAnimals] = useState([]);
   const [geysers, setGeysers] = useState([]);
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

   

  useEffect(() => {
    fetch("/animals")
      .then((res) => res.json())
      .then((animals) => setAnimals(animals));
  }, []);

  useEffect(() => {
    fetch("/geysers")
      .then((res) => res.json())
      .then((geysers) => setGeysers(geysers));
  }, []);

  
  function handleRemoveAnimal(animal){

    fetch(`/animals/${animal.id}`, {method: "DELETE"})
    
    let newAnimals = animals.filter(a => a.id !== animal.id)
    setAnimals(newAnimals)

  }

  function handleRemoveGeyser(geyser){

    fetch(`/geysers/${geyser.id}`, {method: "DELETE"})
    
    let newGeysers = geysers.filter(g => g.id !== geyser.id)
    setGeysers(newGeysers)

  }
  
  function handleRemoveItem(item) {
    setWishList(wishList.filter(i => i.id !== item.id))
    console.log("heyyy")
  }

  function handleWishListItem(favoriteItem) {
    setWishList([...wishList, favoriteItem])
  }

  console.log(wishList)

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
            animals={animals} 
            handleRemoveAnimal={handleRemoveAnimal} 
            handleWishListItem={handleWishListItem}
            wishList={wishList}
            handleRemoveItem={handleRemoveItem}
            setAnimals={setAnimals}
            />
          </Route>
          <Route path="/geysers">
            <GeyserDirectory 
            geysers={geysers} 
            handleRemoveGeyser={handleRemoveGeyser}
            handleWishListItem={handleWishListItem}
            wishList={wishList}
            />
          </Route>
          <Route path="/wish">
            <WishList 
            wishList={wishList}
            />
          </Route>
          <Route path="/form">
            <SubmitForm 
            animals={animals} 
            setAnimals={setAnimals}
            />
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
