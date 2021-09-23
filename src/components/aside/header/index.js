import React, { useState } from "react";

import { AsideHeaderStyled } from "./styled";

function AsideHeader({handleSubmit}) {
  const [city, setCity] = useState(""); 
  return (
    <AsideHeaderStyled>
      <h1>tech<span>4</span>Climate</h1>
      <form onSubmit={e => handleSubmit(e, city)}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Buscar uma cidade"
        />
      </form>
    </AsideHeaderStyled>
  );
}

export default AsideHeader;
