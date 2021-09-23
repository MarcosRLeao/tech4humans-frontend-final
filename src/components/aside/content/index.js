import React from 'react'
import {FaSearchLocation, FaStreetView} from 'react-icons/fa'
import { AsideContentStyled } from './styled'

//ou props.main ou {main}

function AsideContent ({ main, weather, data, sys }) {
  if (main == null || weather == null || data == null) {
    return (
      <AsideContentStyled>
        <div className='FaSearchLocation'>
          <FaSearchLocation size={70}/>
          <br/>
          Pesquise pela cidade desejada e veja aqui o resultado
          
          </div>
      </AsideContentStyled>
    )
  }

  return (
    <AsideContentStyled>
      <img
        src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
        width='100'
        height='100'
        alt={weather[0].description} 
        title={weather[0].description}
      />
     
      <div className='temp'>
        <span className='current'>{(main.temp - 273.15).toFixed(0)}º</span>

        <ul className='minMax'>
          <li title='Temperatura Máxima'>
            {(main.temp_max - 273.15).toFixed(0)}º MAX
          </li>
          <li title='Temperatura Mínima'>
            {(main.temp_min - 273.15).toFixed(0)}º MIN
          </li>
        </ul>
      </div>

      <div className='city'>
        <span><FaStreetView/> {data.name}</span>,<span>{sys.country}</span>
      </div>
    </AsideContentStyled>
  )
}

export default AsideContent
