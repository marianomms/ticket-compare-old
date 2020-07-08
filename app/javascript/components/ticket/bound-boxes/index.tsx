import React from 'react';
import { Stage, Layer, Line } from 'react-konva';
import Konva from 'konva';

import { initDebug } from 'app/common/debug';
import { ITicket } from 'app/types/record-ticket';

const debug = initDebug('components/ticket/bound-box/index.tsx');

interface IOwnProps {
  /**
   * Ticket information
   */
  ticket: ITicket
}

const BoundBoxes: React.FunctionComponent<IOwnProps> = (props: IOwnProps) => {
  debug('Render Component: BoundBox');

  const { ticket } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLineMouseEnter = (evt: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { target }: { target: Konva.Line } = evt;
    target.strokeWidth(3);
    target.parent?.draw();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLineMouseLeave = (evt: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { target }: { target: Konva.Line } = evt;
    target.strokeWidth(1);
    target.parent?.draw();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLineClick = (evt: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { target }: { target: Konva.Line } = evt;
    debug(`Line click on: ${target.attrs.guid}`);
    target.strokeWidth(10);
    target.parent?.draw();
  };

  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  /* eslint-disable @typescript-eslint/no-unsafe-call */
  /* eslint-disable @typescript-eslint/no-unsafe-return */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const generateBoundsFor = (type: 'blocks' | 'words' | 'paragraphs' | 'symbols', color: string) => {
    const bounds = ticket.bounds[type] || ticket.bounds;

    const positions = bounds.map((bound: any) => {
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
      return (
        <Line
          guid={ pos.guid }
          key={ pos.guid }
          points={ pos.points }
          closed
          stroke={ color }
          strokeWidth={ 1 }
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

  return (
    <Stage width={ ticket.width } height={ ticket.height }>
      <Layer>
        { generateBoundsFor('blocks', 'red') }
        {/* { generateBoundsFor('paragraphs', 'blue') } */}
        {/* { generateBoundsFor('words', 'green') } */}
        {/* { generateBoundsFor('symbols', 'orange') } */}
      </Layer>
    </Stage>
  );
};

export default BoundBoxes;
