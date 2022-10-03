import { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import AnimalDirectory from "./components/AnimalDirectory";
import SubmitForm from "./components/SubmitForm";

function App() {
   const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("/animals")
      .then((res) => res.json())
      .then((animals) => setAnimals(animals));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/animals">
            <AnimalDirectory animals={animals}/>
          </Route>
          <Route path="/form">
            <SubmitForm animals={animals} setAnimals={setAnimals}/>
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
