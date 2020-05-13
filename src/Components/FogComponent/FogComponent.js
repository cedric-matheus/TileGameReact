import React from 'react';
import '../FogComponent/FogComponent.scss';

/** 
  * @Name: FogComponent
  * @Desc: Cria um sistema de luz e sombra sob o cenário (como nuvens ou flares)
  * @props: 
  *     

  */

const FogComponent = () => {
  return (
    <React.Fragment>
      <div className='FogComponent'>
        <div className='flare'></div>
      </div>
    </React.Fragment>
  );
};

export default FogComponent;
