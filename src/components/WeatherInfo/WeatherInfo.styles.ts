import styled from 'styled-components';
import Box from 'components/Box';
import Typography from 'components/Typography';

export const StyledWeatherInfo = styled(Box)`
  display: grid;
  grid-template-columns: 60px auto;
  align-items: center;
  grid-gap: ${({ theme }) => theme.spacing.md}px;
`;

export const StyledWeatherInfoIcon = styled.img``;

export const StyledWeatherInfoContent = styled.div``;

export const StyledDescription = styled(Typography)`
  text-transform: capitalize;
`;
