import React from "react";

function GeyserItem ({geyser, handleRemoveGeyser, handleWishListItem, wishList, handleRemoveItem}) {

    return(
        <div>
            <img className="item_image" src={geyser.image} alt={geyser.name}/>
            <div className="item_div2">
                <h3>Name: {geyser.name}</h3>
                <h4>Discovery Date: {geyser.date_discovered}</h4>
                <h4>Fact: {geyser.fact}</h4>
                {wishList ? (
                <div>
                <button onClick={() => handleWishListItem(geyser)}>Add to Wish List</button>
                <button onClick={() => handleRemoveGeyser(geyser)}>Delete</button>
                </div>) :
                (<button onClick={() => handleRemoveItem(geyser)}>Remove from Wish List</button>)}
            </div>
        </div>
    )
}

export default GeyserItem;