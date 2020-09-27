import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.spacing.sm}px
    ${({ theme }) => theme.spacing.md}px;
`;

export const StyledLogo = styled.img`
  width: 100px;
`;
