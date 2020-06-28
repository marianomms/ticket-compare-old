import React from 'react';
import { Stage, Layer, Line } from 'react-konva';

import { ITicket } from '../../../types/record-ticket';

const generateBounds = (ticket: ITicket) => {
  const positions = ticket.bounds.map((bound) => {
    let result = Array<number>();
    bound.table.vertices.forEach((vertice) => {
      result = result.concat(vertice.table.x);
      result = result.concat(vertice.table.y);
    });
    return {
      guid: bound.table.guid,
      points: result
    };
  });

  return positions.map((pos) => {
    return (
      <Line
        key={ pos.guid }
        points={ pos.points }
        closed
        stroke='green'
      />
    );
  });
};

interface IOwnProps {
  /**
   * Ticket information
   */
  ticket: ITicket
}

const BoundBox: React.FunctionComponent<IOwnProps> = (props: IOwnProps) => {
  const { ticket } = props;

  return (
    <Stage width={ ticket.width } height={ ticket.height }>
      <Layer>
        { generateBounds(ticket) }
      </Layer>
    </Stage>
  );
};

export default BoundBox;
