import React from 'react';
import { StyledBox } from './Box.styles';
import { BoxProps } from './Box.types';

export const Box: React.FC<BoxProps> = ({ children, ...restProps }) => {
  return <StyledBox {...restProps}>{children}</StyledBox>;
};

export default Box;
