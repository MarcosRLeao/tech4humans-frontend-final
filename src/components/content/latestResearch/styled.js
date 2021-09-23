import styled from "styled-components";

export const ContentLatestStyled = styled.div`
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 0 16px #ccc;
  padding: 16px;

  h2 {
    color: #375c71;
    margin-bottom: 16px;
    font-size: 22px;
  }

  ul {
    li {
      list-style: none;
      border-bottom: solid 1px #ccc;
      margin-bottom: 8px;
      padding-bottom: 8px;
      box-sizing: border-box;
      text-decoration: none;
      color: #212121;

      a {
        text-decoration: none;
        color: #212121;
      }
    }
  }

  li:last-of-type {
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
