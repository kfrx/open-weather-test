import React from 'react';
import { StyledHeader, StyledLogo } from './Header.styles';
import logoSrc from 'assets/Logo.svg';

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logoSrc} />
    </StyledHeader>
  );
};

export default Header;
