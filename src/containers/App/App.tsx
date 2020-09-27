import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './App.styles';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import theme from 'theme';

const DefaultLayout = lazy(() => import('layouts/DefaultLayout'));
const Weather = lazy(() => import('containers/Weather'));

const queryCache = new QueryCache();

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <GlobalStyles />
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Switch>
              <DefaultLayout>
                <Route>
                  <Weather />
                </Route>
              </DefaultLayout>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </ReactQueryCacheProvider>
    </ThemeProvider>
  );
};

export default App;
