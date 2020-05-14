import React from 'react';
import PropTypes from 'prop-types';

// CSS
import '../GridContainer/GridContainer.scss';

// REACT COMPONENTS
import CellComponent from '../../Components/CellComponent/CellComponent';

// CORE COMPONENTS
import MapComponent from '../../Core/Components/Map';

// CORE SYSTEMS
import { createMap } from '../../Core/Systems/MapSystems';

// JSDOC TYPEDEFS
import '../../Core/Components/Map/typedef';

// COMPONENTE
/**
 * Component container do mapa.
 *
 * @param {object} props Propriedades do componente.
 * @param {MapComponent} props.map Mapa
 *
 * @returns {React.Component} Componente container do mapa.
 */
const GridContainer = ({ map }) => {
  console.log(map);
  return (
    <React.Fragment>
      <div className='GridContainer'>
        {/* renderizando linhas do mapa */}
        {map.mapMatrix.map((mapRow, rowIndex) => (
          <div key={`row-${rowIndex}`} className='GridContainer__row'>
            {/* renderizando colunas da linha */}
            {mapRow.map((rowColumn, columnIndex) => (
              // renderizando celula
              <CellComponent
                key={`row-${rowIndex}:col-${columnIndex}`}
                {...rowColumn}
              />
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

// PROP TYPES
GridContainer.propTypes = {
  map: PropTypes.shape({
    mapMatrix: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.shape({
            cellType: PropTypes.string,
            cell: PropTypes.shape({
              life: PropTypes.number,
              type: PropTypes.number,
              isInverted: PropTypes.bool,
            }),
          }),
          PropTypes.shape({
            cellType: PropTypes.string,
            cell: PropTypes.shape({
              life: PropTypes.number,
              type: PropTypes.number,
              loot: PropTypes.number,
              isLocked: PropTypes.bool,
              isInverted: PropTypes.bool,
            }),
          }),
          PropTypes.shape({
            cellType: '',
            cell: '',
          }),
        ])
      )
    ),
  }),
};

// DEFAULT PROPS
GridContainer.defaultProps = {
  map: createMap(8, 8),
};

export default GridContainer;
