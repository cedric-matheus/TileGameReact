import React from 'react';
import PropTypes from 'prop-types';

// CSS
import '../CellComponent/CellComponent.scss';

// REACT COMPONENTS
import BlockingComponent from '../BlockingComponent/BlockingComponent';
import ChestComponent from '../ChestComponent/ChestComponent';

/**
 * Componente de Célula
 *
 * Pode ser renderizado em baú, obstáculo e vazia.
 *
 * @param {string} cellType Tipo de célula
 *
 * @returns {React.Component} Componente Célula
 */
const CellComponent = ({ cellType, ...props }) => {
  const cellComponents = {
    Chest: <ChestComponent {...props} />,
    Blocking: <BlockingComponent {...props} />,
    '': '',
  };

  return (
    <React.Fragment>
      <div className='CellComponent'>{cellComponents[cellType]}</div>
    </React.Fragment>
  );
};

// PROP TYPES
CellComponent.propTypes = {
  cellType: PropTypes.string.isRequired,
};

export default CellComponent;
