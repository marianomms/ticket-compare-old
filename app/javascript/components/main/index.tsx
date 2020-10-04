import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  createMuiTheme, ThemeProvider, Container, CssBaseline
} from '@material-ui/core';

import TicketImage from 'app/components/ticket-image';
import TicketWords from 'app/components/ticket-words';
import RecordStateApp from 'app/types/record-state-app';
import { initDebug } from 'app/common/debug';
import { TicketView } from 'app/types/enums';

const debug = initDebug('components/main');

const theme = createMuiTheme();

interface IStateProps {
  ticketView: TicketView
}

const mapDispatchToProps = { };

type Props = IStateProps & typeof mapDispatchToProps;

const Main: React.FunctionComponent<Props> = (props) => {
  debug('Render Component: Main');
  const ticketId = '1';

  const renderComponent = () => {
    switch (props.ticketView) {
      case TicketView.words:
        return (
          <TicketWords />
        );
      default:
        return (
          <TicketImage ticketId={ ticketId } />
        );
    }
  };

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={ theme }>
        <Container>
          <h1>Seleccionar áreas en el ticket.</h1>
          { renderComponent() }
        </Container>
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = createStructuredSelector<RecordStateApp, IStateProps>({
  ticketView: (state) => state.get('ticketState').ticketView
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
