import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RecordTicket } from 'app/types/record-ticket';
import RecordStateApp from 'app/types/record-state-app';
import { initDebug } from 'app/common/debug';
import { DateType } from '@date-io/type';
import { Typography } from '@material-ui/core';

const debug = initDebug('components/ticket-words');

interface IStateProps {
  ticket: RecordTicket;
  ticketId: string;
  market: string;
  prices: string;
  products: string;
  selectionDate: DateType;
}

const mapDispatchToProps = {};

type Props = IStateProps & typeof mapDispatchToProps;

const TicketWords: React.FunctionComponent<Props> = (props) => {
  debug('Render Component: TicketWords');

  return (
    <>
      <Typography>
        { `selectionDate: ${props.selectionDate.toLocaleString()}` }
      </Typography>
      <div>
        { `market: ${props.market}` }
      </div>
      <div>
        { `prices: ${props.prices}` }
      </div>
      <div>
        { `products: ${props.products}` }
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector<RecordStateApp, IStateProps>({
  ticket: (state) => state.get('ticketState').ticket,
  ticketId: (state) => state.get('ticketState').ticketId,
  market: (state) => state.get('ticketState').market,
  prices: (state) => state.get('ticketState').prices,
  products: (state) => state.get('ticketState').products,
  selectionDate: (state) => state.get('ticketState').selectionDate
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketWords);
