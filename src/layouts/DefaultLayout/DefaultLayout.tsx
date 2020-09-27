import React from 'react';
import { StyledDefaultLayout, StyledBody } from './DefaultLayout.styles';
import { DefaultLayoutProps } from './DefaultLayout.types';
import Header from 'components/Header';

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <StyledDefaultLayout>
      <Header />
      <StyledBody>{children}</StyledBody>
    </StyledDefaultLayout>
  );
};

export default DefaultLayout;
