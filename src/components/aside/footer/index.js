import React from 'react'
import { AsideFooterStyled } from './styled'
import { WiThermometer, WiHumidity, WiBarometer } from 'react-icons/wi'

function AsideFooter ({ main, weather, data }) {
  if (main == null || weather == null || data == null) {
    return <div></div>
  }
  return (
    <AsideFooterStyled>
      <li title='Sensação Térmica'>
        <WiThermometer size={25} />
        <span>{(main.feels_like - 273.15).toFixed(0)}º</span>
        <span>ST</span>
      </li>
      <li title='Pressão Atmosférica'>
        <WiBarometer size={28} />
        <span>{main.pressure}</span>
        <span>hPa</span>
      </li>
      <li title='Umidade Relativa'>
        <WiHumidity size={25} />
        <span>{main.humidity}%</span>
        <span>UR</span>
      </li>
    </AsideFooterStyled>
  )
}

export default AsideFooter
