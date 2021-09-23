import styled from "styled-components";

export const ContentStyled = styled.main`
  width: 100%;
  background: #f8f9fa;
  padding: 32px 32px 16px 32px;
  box-sizing: border-box;

  @media screen and (max-width: 760px) {
    padding: 32px 16px;
  }
`;

export const ContentListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  @media screen and (max-width: 925px) {
    grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  }
`;
