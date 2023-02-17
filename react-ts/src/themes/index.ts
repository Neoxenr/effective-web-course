// MUI
import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  typography: {
    subtitle1: { color: '#ffff00' },
    subtitle2: { color: '#fff' },
    body2: { color: '#666' }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ff0000'
        }
      }
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    subtitle1: { color: '#ffff00' },
    subtitle2: { color: '#fff' },
    body2: { color: '#666' }
  }
});
