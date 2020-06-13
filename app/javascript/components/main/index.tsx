import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme();

const Main: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <h1>Hola soy un ticket</h1>
      <Button variant='outlined'>
        hola soy un botón
      </Button>
      <br />
      <img
        alt='ticket'
        src='api/v1/tickets/1'
      />
    </ThemeProvider>
  );
};

export default Main;
