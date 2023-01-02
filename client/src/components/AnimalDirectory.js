import React, { useEffect, useState } from "react";
import AnimalItem from "./AnimalItem"

function AnimalDirectory ({handleWishListItem, wishList}) {
    
   const [animals, setAnimals] = useState([]);

   function handleRemoveAnimal(animal){

    fetch(`/animals/${animal.id}`, {method: "DELETE"})
    
    let newAnimals = animals.filter(a => a.id !== animal.id)
    setAnimals(newAnimals)

  }

    useEffect(() => {
        fetch("/animals")
          .then((res) => res.json())
          .then((animals) => setAnimals(animals));
      }, []);

    return(
        <div>
            <h1 className="account1">Animal Directory</h1>
            <div className="image_grid">
                {animals.map(animal => (
                <AnimalItem 
                    key={animal.id} 
                    animal={animal} 
                    handleRemoveAnimal={handleRemoveAnimal} 
                    handleWishListItem={handleWishListItem}
                    wishList={wishList}
                    setAnimals={setAnimals}
                    animals={animals}
                />))}
            </div>
        </div>
    )
}

export default AnimalDirectory;