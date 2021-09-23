import styled from 'styled-components'

export const AsideContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  .search__location {
    color: #fff;
    width: 230px;
    font-size: 25px;
    text-align: center;

    svg {
      animation: tech4climate-pulse infinite alternate linear 1s;
      transform-origin: center;
      transform-box: fill-box;
    }
  }

  img {
      animation: tech4climate-pulse infinite alternate linear 1s;
      transform-origin: center;
      transform-box: fill-box;
    }

  .temp {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 0px;
    color: #fff;
    width: 230px;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;

    
  }

  @keyframes tech4climate-pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  .current {
    grid-area: 0.1666666667;
    font-size: 60px;
    font-weight: 700;
    display: flex;
    justify-content: flex-end;
  }

  ul {
    display: flex;
    flex-direction: column;

    &:li {
      list-style: none;
      text-align: left;
      position: relative;
      top: 6px;
    }
  }

  .minMax {
    display: flex;
    flex-direction: column;

    li {
      list-style: none;
      text-align: left;
      position: relative;
      top: 6px;
    }
  }

  .city {
    word-break: break-all;
    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;

    span:first-of-type {
      font-weight: 600;
    }
  }
`
