import styled from "styled-components";

export const AsideHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  h1 {
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    font-weight: 800;
    margin-bottom: 8px;

    span{
      color: #01a8b4;
    }
  }

  input {
    border: none;
    width: 258px;
    border-radius: 100px;
    padding: 6px 15px;
    box-sizing: border-box;
    font-family: "Spartan", sans-serif;
    font-weight: bold;
    color: #375c71;
  }

  input::placeholder {
    opacity: 0.8;
    font-weight: normal;
  }
`;
