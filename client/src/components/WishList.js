import React from "react";
import AnimalItem from "./AnimalItem";
import GeyserItem from "./GeyserItem";

function WishList ({wishList, handleRemoveItem}) {

    let itemWish = wishList.map(item => item.population ? <AnimalItem animal={item} key={item.name} handleRemoveItem={handleRemoveItem}/> : <GeyserItem geyser={item} key={item.name} handleRemoveItem={handleRemoveItem}/>)

    return(
        <div>
            <h1 className="account1">Things you would like to see while at Yellowstone National Park</h1>
            <div className="image_grid">
               {itemWish}
            </div>
        </div>
    )
}

export default WishList;