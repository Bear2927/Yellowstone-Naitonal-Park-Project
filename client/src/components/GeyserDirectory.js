import React, { useState, useEffect } from "react";
import GeyserItem from "./GeyserItem";

function GeyserDirectory ({handleWishListItem, wishList, handleRemoveItem}) {
    const [geysers, setGeysers] = useState([]);

    useEffect(() => {
        fetch("/geysers")
          .then((res) => res.json())
          .then((geysers) => setGeysers(geysers));
      }, []);

      function handleRemoveGeyser(geyser){

        fetch(`/geysers/${geyser.id}`, {method: "DELETE"})
        
        let newGeysers = geysers.filter(g => g.id !== geyser.id)
        setGeysers(newGeysers)
    
      }

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
                    handleRemoveItem={handleRemoveItem}
                    wishList={wishList}
                />))}
            </div>
        </div>
    )
}

export default GeyserDirectory;