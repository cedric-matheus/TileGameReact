import React from 'react';
import PropTypes from 'prop-types';

// CSS
import '../ChestComponent/ChestComponent.scss';

// CORE SYSTEMS
import {
  getRandomBooleanValue,
  getRandomIntegerNumber,
} from '../../Core/Systems/RandomSystem';

/**
 * Bloco de báu (ChestComponent)
 *
 * O baú é um obstáculo com um prêmio interno
 *
 * @param {object} props Props do componente
 * @param {number} props.life Vida do baú
 * @param {number} props.type Estilo do baú
 * @param {number} props.loot Valor dentro do baú
 * @param {boolean} props.isLocked Está fechado?
 * @param {boolean} props.isInverted É invertido?
 * @returns {React.Component} Componente Bloco de Baú (ChestComponent)
 */
const ChestComponent = ({ life, type, loot, isLocked, isInverted }) => {
  return (
    <React.Fragment>
      <div
        className={`ChestComponent ChestComponent--type${type} ${
          isInverted && 'invertX'
        }`}
      >
        <div className={isInverted && 'invertX'}>
          <div> tipo= {type}</div>
          <div>{isInverted ? 'Invertido' : 'Não Invertido'}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

// PROP TYPES
ChestComponent.propTypes = {
  life: PropTypes.number,
  type: PropTypes.number,
  loot: PropTypes.number,
  isLocked: PropTypes.bool,
  isInverted: PropTypes.bool,
};

// DEFAULT PROPS
ChestComponent.defaultProps = {
  life: 10,
  type: getRandomIntegerNumber(4),
  loot: 100,
  isLocked: getRandomBooleanValue(),
  isInverted: getRandomBooleanValue(),
};

export default ChestComponent;
