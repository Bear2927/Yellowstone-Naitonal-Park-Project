import React from "react";
import GeyserItem from "./GeyserItem";

function GeyserDirectory ({geysers, handleRemoveGeyser, handleWishListItem, wishList}) {

    return(
        <div>
            <h1 className="account1">Geyser Directory</h1>
            <div className="image_grid">
                {geysers.map(geyser => (
                <GeyserItem 
                    key={geyser.id} 
                    geyser={geyser} 
                    handleRemoveGeyser={handleRemoveGeyser} 
                    handleWishListItem={handleWishListItem}
                    wishList={wishList}
                />))}
            </div>
        </div>
    )
}

export default GeyserDirectory;