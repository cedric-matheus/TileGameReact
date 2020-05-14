import React from 'react';
import '../GridContainer/GridContainer.scss';

import CellComponent from '../../Components/CellComponent/CellComponent';

/**

 *
 */

const GridContainer = (map) => {
  return (
    <React.Fragment>
      <div className='GridContainer'>
        <div className='GridContainer__row'>
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
        </div>
        <div className='GridContainer__row'>
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
        </div>
        <div className='GridContainer__row'>
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
        </div>
        <div className='GridContainer__row'>
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
        </div>
        <div className='GridContainer__row'>
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
        </div>
        <div className='GridContainer__row'>
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
        </div>
        <div className='GridContainer__row'>
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
        </div>
        <div className='GridContainer__row'>
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
          <CellComponent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GridContainer;
