import React from 'react';
import {
  createMuiTheme, ThemeProvider, Container, CssBaseline
} from '@material-ui/core';
import Ticket from 'app/components/ticket';

const theme = createMuiTheme();

const Main: React.FunctionComponent = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={ theme }>
        <Container>
          <h1>hola soy una cabecera</h1>
          <Ticket ticketId='1' />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Main;
