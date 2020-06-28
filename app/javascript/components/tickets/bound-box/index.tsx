import React from 'react';
import { Stage, Layer, Line } from 'react-konva';
import Konva from 'konva';

import { ITicket } from '../../../types/record-ticket';

interface IOwnProps {
  /**
   * Ticket information
   */
  ticket: ITicket
}

const BoundBox: React.FunctionComponent<IOwnProps> = (props: IOwnProps) => {
  const { ticket } = props;

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleClick = (evt: any) => {
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //   const { target }: { target: Konva.Line } = evt;

  //   eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //   let stroke = target.getAttr('old-stroke');
  //   if (!stroke) {
  //     stroke = 'blue';
  //     target.setAttr('old-stroke', target.stroke());
  //   } else {
  //     target.setAttr('old-stroke', undefined);
  //   }

  //   // target.stroke(stroke);
  //   target.strokeWidth(2);
  //   target.parent?.draw();
  // };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseEnter = (evt: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { target }: { target: Konva.Line } = evt;
    target.strokeWidth(3);
    target.parent?.draw();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseLeave = (evt: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { target }: { target: Konva.Line } = evt;
    target.strokeWidth(1);
    target.parent?.draw();
  };

  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  /* eslint-disable @typescript-eslint/no-unsafe-call */
  /* eslint-disable @typescript-eslint/no-unsafe-return */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const generateBoundsFor = (type: 'blocks' | 'words' | 'paragraphs' | 'symbols', color: string) => {
    const bounds = ticket.bounds[type];

    const positions = bounds.map((bound: any) => {
      let result = Array<number>();
      bound.table.vertices.forEach((vertice: any) => {
        result = result.concat(vertice.table.x);
        result = result.concat(vertice.table.y);
      });
      return {
        guid: bound.table.guid,
        points: result
      };
    });

    return positions.map((pos: any) => {
      return (
        <Line
          key={ pos.guid }
          points={ pos.points }
          closed
          stroke={ color }
          strokeWidth={ 1 }
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        />
      );
    });
  };
  /* eslint-enable @typescript-eslint/no-unsafe-member-access */
  /* eslint-enable @typescript-eslint/no-unsafe-assignment */
  /* eslint-enable @typescript-eslint/no-unsafe-call */
  /* eslint-enable @typescript-eslint/no-unsafe-return */
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return (
    <Stage width={ ticket.width } height={ ticket.height }>
      <Layer>
        { generateBoundsFor('blocks', 'red') }
        {/* { generateBoundsFor('paragraphs', ticket, 'blue') } */ }
        { generateBoundsFor('words', 'green') }
        {/* { generateBoundsFor('symbols', ticket, 'orange') } */ }
      </Layer>
    </Stage>
  );
};

export default BoundBox;
