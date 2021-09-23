import React, { useEffect, useState } from 'react'
import { ContentTop5Styled } from './styled'

import {FaSearchPlus} from 'react-icons/fa'

import api from '../../../services/techApi'

function ContentTop5 (props) {
  const [cities, setCities] = useState([])

  useEffect(() => {
    api
      .get('/city/mostSought')
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
  }, [cities])

  return (
    <ContentTop5Styled>
      <h2 className='listCity__title'><FaSearchPlus /> Top 5 mais Pesquisadas</h2>

      <ul>
        {cities != null ? (
          cities.map((city, index) => (
            <li key={city.id}>
              <span>
                {city.city}, {city.country}  
              </span>
              <span>{city.sum}</span>
            </li>
          ),setInterval(1000))
        ) : (
          <li> Sem cidades pesquisadas </li>
        )}
      </ul>
    </ContentTop5Styled>
  )
}

export default ContentTop5
