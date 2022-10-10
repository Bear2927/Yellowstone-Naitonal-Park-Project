import React, { useState } from "react";

function AnimalItem ({animal, handleRemoveAnimal, handleWishListItem, wishList, handleRemoveItem, setAnimals, animals}) {



    function handleSpottedAnimal() {
        const updatedSpotted = {
          spotted: animal.spotted + 1
        }
        
        fetch(`/animals/${animal.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updatedSpotted)
        })
        .then(res => res.json())
        .then(data => setAnimals(animals.map(a => a.id !== data.id ? a : data)))

        
    }

    return(
        <div>
            <img className="item_image" src={animal.image} alt={animal.name} />
            <div className="item_div2">
                <h3>Species: {animal.name}</h3>
                <h4>Population: {animal.population}</h4>
                <h4>Fact: {animal.fact}</h4>
                <h4>Spotted: {animal.spotted} times</h4>
                {!wishList ? (
                <button onClick={() => handleRemoveItem(animal)}>Remove from Wish List</button>
                ) : (
                <div>
                <button onClick={() => handleWishListItem(animal)}>Add to Wish List</button>
                <button onClick={() => handleRemoveAnimal(animal)}>Delete</button>
                <button onClick={() => handleSpottedAnimal(animal)}>Spotted</button>
                </div>
                )}
                
            </div>
        </div>
    )
}

export default AnimalItem;