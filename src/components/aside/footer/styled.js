import styled from "styled-components";

export const AsideFooterStyled = styled.div`
  position: relative;
  margin-top: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  font-weight: 500;

  &:before {
    content: "";
    position: absolute;
    top: -16px;
    left: -16px;
    margin: auto;
    width: calc(100% + 32px);
    height: 1px;
    background-color: #fff;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  img {
    width: 18px;
    height: 18px;
    display: block;
    object-fit: contain;
    margin-right: 4px;
  }

  span:first-of-type {
    margin-right: 8px;
  }
`;
