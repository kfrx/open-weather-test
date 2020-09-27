import React from 'react';
import { StyledTypography } from './Typography.styles';
import { TypographyProps, TypographyVariants } from './Typography.types';

const variantMap: Record<TypographyVariants, any> = {
  body1: 'p',
  body2: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  ...restProps
}) => {
  return (
    <StyledTypography
      as={variantMap[variant]}
      $variant={variant}
      {...restProps}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
