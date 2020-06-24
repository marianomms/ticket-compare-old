import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CircularProgress } from '@material-ui/core';

import { initDebug } from '../../common/debug';
import { RecordTicket } from '../../types/record-ticket';
import RecordStateApp from '../../types/record-state-app';
import getTicketData from '../../actions/ticket';

const debug = initDebug('Ticket');

interface IOwnProps {
  /**
   * Ticket Id to be rendered
   */
  id: string
}

interface IStateProps {
  loaded: boolean;
  ticket: RecordTicket
}

const mapDispatchToProps = { getTicketData };

type Props = IOwnProps & IStateProps & typeof mapDispatchToProps;

const Ticket: React.FunctionComponent<Props> = (props: Props) => {
  const { ticket } = props;

  debug('Render Component: Ticket');
  debug(props);

  React.useEffect(() => {
    if (!props.loaded) {
      props.getTicketData(props.id);
    }
  }, [props.loaded]);

  const divStyle = {
    width: ticket.width,
    height: ticket.height,
    backgroundImage: `url(${ticket.url})`,
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div style={ divStyle }>
      { props.loaded ? `hola soy el ticke1111t nº: ${props.id}` : <CircularProgress /> }
    </div>
  );
};

const mapStateToProps = createStructuredSelector<RecordStateApp, IStateProps>({
  loaded: (state) => state.get('ticketState').loaded,
  ticket: (state) => state.get('ticketState').ticket
});

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);