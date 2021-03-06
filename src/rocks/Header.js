import React from 'react';
import styled from '@emotion/styled'

const Header = () => {
  return (
    <StyledHeader>
      <Text>me<sup>3</sup></Text>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  padding: 1.5rem 0 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  
  p {
    margin: 0;
    padding: 0 1rem;
    text-align: center;
    line-height: 3rem;
    color: #555;
    font-size: 1rem;
    text-shadow: #fff 1px 1px 0;
  }
`;

const Text = styled.h1`
  font-size: 2rem;
  letter-spacing: 0px;
  line-height: 1rem;
  font-weight: 300;
  opacity: .4;
  text-shadow: #fff 1px 1px 0;
  sup {
    padding: 1.2px;
    font-size: 1rem;
    vertical-align:text-bottom;
  }

`;