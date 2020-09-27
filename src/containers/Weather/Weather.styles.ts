import styled from 'styled-components';

export const StyledWeather = styled.div``;

export const StyledWeatherHero = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing.lg}px 0;
  color: ${({ theme }) => theme.palette.common.white};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: ${({ theme }) => theme.spacing.xl}px 0;
  }
`;

export const StyledWeatherMain = styled.main`
  padding: ${({ theme }) => theme.spacing.lg}px 0;
`;

export const StyledWeatherGrid = styled.div`
  margin: ${({ theme }) => theme.spacing.lg}px 0;
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.sm}px;
  grid-template-columns: auto;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const StyledContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
`;
