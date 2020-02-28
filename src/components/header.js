import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.header `
  position: fixed;
  top: 0;
  padding: 0 px 50 px;
  z-index: 11;
  filter: none!important;
  pointer-events: auto!important;
  user-select: auto!important;
  width: 100 % ;
  background-color: green;
`;

const StyledNav = styled.nav `
  display: flex;
  flex-wrap: wrap;
`;

const Menu = () => (
  <StyledContainer>
    <StyledNav>
      <div className="header-logo">
        <img className="header-logoImg" src="#" alt="#"/>
      </div>
      <div className="header-links">
        <ul className="header-linksList">
          <li className="header-link"><a href="#">A propos</a></li>
          <li className="header-link"><a href="#">CV</a></li>
          <li className="header-link"><a href="#">Portfolio</a></li>
          <li className="header-link"><a href="#">Contact</a></li>
        </ul>
      </div>
    </StyledNav>
  </StyledContainer>
);

export default Menu;