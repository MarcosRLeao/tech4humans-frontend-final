import styled from "styled-components";

export const AsideStyled = styled.aside`
  display: flex;
  flex-direction: column;
  width: 360px;
  flex: 1 0 auto;
  height: 100vh;
  background-image: -webkit-gradient(linear,left top,right top,from(#375c71),to(#81b4cf)
  );
  box-shadow: 0 0 16px #9d9d9d;
  padding: 32px 16px 16px 16px;
  box-sizing: border-box;
  text-shadow: 0 1px 3px #665d5d;
  * {
    outline: none;
  }

  @media screen and (max-width: 760px) {
   
        width: 100%;
        height: auto;
   
}
`;

