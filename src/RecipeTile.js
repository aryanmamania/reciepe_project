import React from "react";
import "./RecipeTile.css";

export default function RecipeTile({recipe}){
return(
    <div className="recipeTile">
  <img className="recipeTile__img" src= {recipe["recipe"]["image"]} />
        <p className="recipeTile__para">{recipe["recipe"]["label"]}</p>
        </div>
    );

} 
   
