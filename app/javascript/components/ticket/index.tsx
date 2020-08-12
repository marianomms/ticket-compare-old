import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CircularProgress, Box } from '@material-ui/core';

import { initDebug } from 'app/common/debug';
import { RecordTicket } from 'app/types/record-ticket';
import RecordStateApp from 'app/types/record-state-app';
import { getTicketData } from 'app/actions/ticket';

import BoundBoxes from './bound-boxes';
import Selection from './selection';

const debug = initDebug('components/ticket/index.tsx');

interface IOwnProps {
  /**
   * Ticket Id to be rendered
   */
  ticketId: string
}

interface IStateProps {
  loadedTicket: boolean;
  ticket: RecordTicket
}

const mapDispatchToProps = { getTicketData };

type Props = IOwnProps & IStateProps & typeof mapDispatchToProps;

const Ticket: React.FunctionComponent<Props> = (props: Props) => {
  debug('Render Component: Ticket');

  React.useEffect(() => {
    if (!props.loadedTicket) {
      props.getTicketData(props.ticketId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.loadedTicket]);

  if (!props.loadedTicket) {
    return (<CircularProgress />);
  }
  return (
    <Box display='flex'>
      <Box>
        <BoundBoxes />
      </Box>
      <Box>
        <Selection />
      </Box>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector<RecordStateApp, IStateProps>({
  loadedTicket: (state) => state.get('ticketState').loadedTicket,
  ticket: (state) => state.get('ticketState').ticket
});

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
