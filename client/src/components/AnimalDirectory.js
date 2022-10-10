import React from "react";
import AnimalItem from "./AnimalItem"

function AnimalDirectory ({animals, handleRemoveAnimal, handleWishListItem, wishList, handleRemoveItem, setAnimals}) {

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
                    handleRemoveItem={handleRemoveItem}
                    setAnimals={setAnimals}
                    animals={animals}
                />))}
            </div>
        </div>
    )
}

export default AnimalDirectory;