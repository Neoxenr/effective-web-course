// React
import React, { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

// MUI
import { ThemeProvider } from '@mui/material/styles';

// Themes
import { lightTheme } from 'themes/index';

// Routes
import routes from './routes';

// SCSS
import './index.module.scss';

function App(): ReactElement {
  const element = useRoutes(routes);

  return <ThemeProvider theme={lightTheme}>{element}</ThemeProvider>;
}

export default App;
