// React
import React, { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

// MUI
import { ThemeProvider } from '@mui/material/styles';

// MobX
import { observer } from 'mobx-react-lite';

// MUI
import { CssBaseline } from '@mui/material';

// Store
import themeSwitcherStore from 'stores/ThemeSwitcherStore';

// Themes
import { lightTheme, darkTheme } from 'themes/index';

// Routes
import routes from './routes';

function App(): ReactElement {
  const element = useRoutes(routes);

  const { isDark } = themeSwitcherStore;

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
}

export default observer(App);
