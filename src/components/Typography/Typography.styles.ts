import styled, { css } from 'styled-components';
import { TypographyVariants } from './Typography.types';

interface StyledTypographyProps {
  $variant: TypographyVariants;
}

export const StyledTypography = styled.div<StyledTypographyProps>`
  margin: 0;
  line-height: 1.5;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'body1':
        return css`
          font-size: ${theme.typography.body1.fontSize}px;
        `;
      case 'body2':
        return css`
          font-size: ${theme.typography.body2.fontSize}px;
        `;
      case 'h1':
        return css`
          font-size: ${theme.typography.h1.fontSize}px;
        `;
      case 'h2':
        return css`
          font-size: ${theme.typography.h2.fontSize}px;
        `;
      case 'h3':
        return css`
          font-size: ${theme.typography.h3.fontSize}px;
        `;
      case 'h4':
        return css`
          font-size: ${theme.typography.h4.fontSize}px;
        `;
      default:
        return null;
    }
  }}
`;
