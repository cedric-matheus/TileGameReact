import React from 'react';
import '../CellComponent/CellComponent.scss';

import BlockingComponent from '../BlockingComponent/BlockingComponent';
import ChestComponent from '../ChestComponent/ChestComponent';
import { getRandomInt } from '../../Core/Systems/RandomTool';

/**
 * @Name: Sou uma celula
 * @Desc: Eu sorteio de defino um component
 * @props:
 *
 */

const CellComponent = () => {
  const randonNumber = getRandomInt(4);

  return (
    <React.Fragment>
      <div className="CellComponent">
        {(() => {
          switch (randonNumber) {
            case 0:
              return '';
            case 1:
              return <ChestComponent />;
            case 2:
              return <BlockingComponent />;
            default:
              return '';
          }
        })()}
      </div>
    </React.Fragment>
  );
};

export default CellComponent;
