import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const petsList = pets.map((pet) => (
    <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
  ))
  
  return (
    <div className="ui cards">
      {petsList}
    </div>
  );
}

export default PetBrowser;
