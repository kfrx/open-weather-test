import styled from 'styled-components';

export const StyledBox = styled.div`
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.palette.common.white};
  max-width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;
