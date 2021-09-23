import React from "react";

import { AsideStyled } from "./styled";

import AsideHeader from "../header";
import AsideContent from "../content";
import AsideFooter from "../footer";
import { useState } from "react";
import axios from "axios";

function AsideComponent(props) {

  const [data, setData] = useState(null);
  const [main, setMain] = useState(null);
  const [sys, setSys] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleSubmit(e, city) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("city", city);
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    axios
      .post("http://localhost:3001/city/find", params, config)
      .then((response) => {
        setData(response.data.data);
        setMain(response.data.data.main);
        setSys(response.data.data.sys);
        setWeather(response.data.data.weather);
      })
      .catch((error) => {

        console.log(error);
        alert("Cidade não encontrada, tente novamente")
        document.location.reload(true);


      });
  }

  return (
    <AsideStyled>
      <AsideHeader handleSubmit={handleSubmit} />
      <AsideContent main={main} weather={weather} data={data} sys={sys}/>
      <AsideFooter main={main} weather={weather} data={data} sys={sys}/>
    </AsideStyled>
  );
}

export default AsideComponent;
