import React from 'react';
import '../GridContainer/GridContainer.scss';

import CellComponent from '../../Components/CellComponent/CellComponent';

/**
 * @Name: Bloco obstaculo Padrão
 * @Desc: Renderiza o MapaGrid
 * @props: life = vida do objeto, type= estilo de visualização
 *
 */

const GridContainer = (qtdColumn, qtdRow) => {
  return (
    <React.Fragment>
      <div className="GridContainer">
        <div className="GridContainer__row">
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
        <div className="GridContainer__row">
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
        <div className="GridContainer__row">
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
        <div className="GridContainer__row">
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
        <div className="GridContainer__row">
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
        <div className="GridContainer__row">
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
        <div className="GridContainer__row">
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
        <div className="GridContainer__row">
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
