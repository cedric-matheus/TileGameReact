import React from 'react';

// CSS
import '../CellComponent/CellComponent.scss';

// REACT COMPONENTS
import BlockingComponent from '../BlockingComponent/BlockingComponent';
import ChestComponent from '../ChestComponent/ChestComponent';

// CORE SYSTEMS
import { getRandomIntegerNumber } from '../../Core/Systems/RandomSystem';

/**
 * @Name: Sou uma celula
 * @Desc: Eu sorteio de defino um component
 * @props:
 *
 */

const CellComponent = () => {
  const randonNumber = getRandomIntegerNumber(4);

  return (
    <React.Fragment>
      <div className='CellComponent'>
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
