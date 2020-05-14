import React from 'react';
import PropTypes from 'prop-types';

// CSS
import '../BlockingComponent/BlockingComponent.scss';

// SISTEMAS (SYSTEMS)
import {
  getRandomBooleanValue,
  getRandomIntegerNumber,
} from '../../Core/Systems/RandomSystem';

/**
 * Componente de bloco de obstáculo padrão.
 *
 * Um bloco que possui uma quantidade de vida e pode ser destruído pelo jogador.
 *
 * @param {object} props Props do componente
 * @param {number} props.life Vida do bloco
 * @param {number} props.type Estilo de visualização
 * @param {boolean} props.isInverted Está invertido?
 *
 * @returns {React.Component} Component de bloco de obstáculo.
 */
const BlockingComponent = ({ life, type, isInverted }) => {
  return (
    <React.Fragment>
      <div
        className={`BlockingComponent BlockingComponent--type${type} ${
          isInverted ? 'invertX' : ''
        }`}
      />
    </React.Fragment>
  );
};

// PROP TYPES
BlockingComponent.propTypes = {
  life: PropTypes.number,
  type: PropTypes.number,
  isInverted: PropTypes.bool,
};

// DEFAULT PROPS
BlockingComponent.defaultProps = {
  life: 1,
  type: getRandomIntegerNumber(3),
  isInverted: getRandomBooleanValue(),
};

export default BlockingComponent;
