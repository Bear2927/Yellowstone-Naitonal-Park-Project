import React from "react";
import AnimalItem from "./AnimalItem"

function AnimalDirectory ({animals}) {

    return(
        <div>
            <h1 className="directory_header">Animal Directory</h1>
            <div className="image_grid">
                {animals.map(animal => (<AnimalItem key={animal.id} animal={animal}/>))}
            </div>
        </div>
    )
}

export default AnimalDirectory;