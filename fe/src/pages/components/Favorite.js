import React from "react";

import CarRow from "./CarRow";

import "./styles/Favorite.scss";

const Favorite = () => {
  return (
    <div className="Tab-content Favorite">
      {Array(3)
        .fill(null)
        .map((i, k) => (
          <CarRow key={k} />
        ))}
    </div>
  );
};

export default Favorite;
