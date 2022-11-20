// MUI
import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  typography: {
    button: { color: '#fff' },
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
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffa500',
          ':hover': {
            backgroundColor: '#ffa500',
            opacity: 0.8
          }
        }
      }
    }
  }
});
