import React from 'react';
import { Stage, Layer, Line } from 'react-konva';
import Konva from 'konva';
import { createStructuredSelector } from 'reselect';

import { initDebug } from 'app/common/debug';
import { RecordTicket } from 'app/types/record-ticket';
import RecordStateApp from 'app/types/record-state-app';
import { connect } from 'react-redux';
import { setSelectionStep, setSelectionType } from 'app/actions/ticket';
import { SelectionStep } from 'app/types/enums';
import BlockColors from 'app/types/block-colors';

const debug = initDebug('components/ticket/bound-box');

interface IStateProps {
  market: string;
  prices: string;
  products: string;
  ticket: RecordTicket;
  ticketId: string;
  selectionStep: SelectionStep;
}

const mapDispatchToProps = { setSelectionStep, setSelectionType };

type Props = IStateProps & typeof mapDispatchToProps;

const BoundBoxes: React.FunctionComponent<Props> = (props: Props) => {
  debug('Render Component: BoundBox');

  const { ticket } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLineMouseEnter = (evt: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { target }: { target: Konva.Line } = evt;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (target.attrs.stroke !== BlockColors.pending) {
      return;
    }

    target.strokeWidth(2);
    target.parent?.draw();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLineMouseLeave = (evt: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { target }: { target: Konva.Line } = evt;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (target.attrs.stroke !== BlockColors.pending) {
      return;
    }

    target.strokeWidth(1);
    target.parent?.draw();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLineClick = (evt: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { target }: { target: Konva.Line } = evt;

    const step = SelectionStep[props.selectionStep];
    if (!step) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    props.setSelectionType(target.attrs.guid, props.selectionStep);
    props.setSelectionStep(props.selectionStep + 1);
  };

  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  /* eslint-disable @typescript-eslint/no-unsafe-call */
  /* eslint-disable @typescript-eslint/no-unsafe-return */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const generateBoundsFor = () => {
    const { blocks } = ticket;

    const positions = blocks.map((bound: any) => {
      let result = Array<number>();
      bound.vertices.forEach((vertice: any) => {
        result = result.concat(vertice.x);
        result = result.concat(vertice.y);
      });
      return {
        guid: bound.guid,
        points: result
      };
    });

    return positions.map((pos: any) => {
      let color = BlockColors.pending;
      let strokeWidth = 1;
      if (props.market === pos.guid) {
        color = BlockColors.market;
        strokeWidth = 3;
      } else if (props.prices === pos.guid) {
        color = BlockColors.prices;
        strokeWidth = 3;
      } else if (props.products === pos.guid) {
        color = BlockColors.products;
        strokeWidth = 3;
      }

      return (
        <Line
          guid={ pos.guid }
          key={ pos.guid }
          points={ pos.points }
          closed
          stroke={ color }
          strokeWidth={ strokeWidth }
          onMouseEnter={ handleLineMouseEnter }
          onMouseLeave={ handleLineMouseLeave }
          onClick={ handleLineClick }
        />
      );
    });
  };
  /* eslint-enable @typescript-eslint/no-unsafe-member-access */
  /* eslint-enable @typescript-eslint/no-unsafe-assignment */
  /* eslint-enable @typescript-eslint/no-unsafe-call */
  /* eslint-enable @typescript-eslint/no-unsafe-return */
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const divTicketStyle = {
    backgroundImage: `url(${ticket.url})`,
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div style={ divTicketStyle }>
      <Stage width={ ticket.width } height={ ticket.height }>
        <Layer>
          { generateBoundsFor() }
        </Layer>
      </Stage>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<RecordStateApp, IStateProps>({
  ticket: (state) => state.get('ticketState').ticket,
  ticketId: (state) => state.get('ticketState').ticketId,
  selectionStep: (state) => state.get('ticketState').selectionStep,
  market: (state) => state.get('ticketState').market,
  prices: (state) => state.get('ticketState').prices,
  products: (state) => state.get('ticketState').products
});

export default connect(mapStateToProps, mapDispatchToProps)(BoundBoxes);
