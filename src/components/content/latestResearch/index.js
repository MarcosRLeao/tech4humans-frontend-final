import React, { useEffect, useState } from "react";
import {FaSearch} from 'react-icons/fa'
import { ContentLatestStyled } from "./styled";
import api from '../../../services/techApi'

function ContentLatestResearch(props) {

  const [cities, setCities] = useState([])

  useEffect(() => {
    api
      .get('/city/latestResearch')
      .then(function (response) {
        let list = []

        for (let read of response.data.cities) {
          list.push(read)
        }
        setCities(list)
        return response.data
      })
      .catch(err => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  return (
    <ContentLatestStyled>
      <h2 className="listCity__title"><FaSearch/> Últimas Pesquisas</h2>
      <ul>
        {cities != null ? (
          cities.map((city, index) => (
            <li key={city.id}>
              <span>
                {city.city}, {city.country}
              </span>
            </li>
          ))
        ) : (
          <li> Sem cidades pesquisadas </li>
        )}
      </ul>
    </ContentLatestStyled>
  );
}

export default ContentLatestResearch;
