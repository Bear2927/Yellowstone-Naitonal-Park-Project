import React from "react";

function AnimalItem ({animal}) {

    return(
        <div className="item_div">
            <img className="item_image" src={animal.image} alt={animal.name}/>
            <div className="item_div2">
                <h3>Species: {animal.name}</h3>
                <h4>Population: {animal.population}</h4>
                <h4>Fact: {animal.fact}</h4>
                <button>DELETE</button>
            </div>
        </div>
    )
}

export default AnimalItem;