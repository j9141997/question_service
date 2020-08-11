import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6b9e7c',
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    },
    common: {
      black: "rgba(0, 0, 0, 0.87)"
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Noto Sans',
      'sans-serif',
    ].join(','),
  },
});

export default theme;