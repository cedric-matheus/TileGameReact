import React from 'react';

// CSS
import '../BlockingComponent/BlockingComponent.scss';

// SISTEMAS (SYSTEMS)
import {
  getRandomBooleanValue,
  getRandomIntegerNumber,
} from '../../Core/Systems/RandomSystem';

/** 
  * @Name: Bloco obstaculo Padrão
  * @Desc: O bloco default que pode ser destruido pelo jogador comforme vida
  * @props: life = vida do objeto, type= estilo de visualização
  *     

  */

const BlockingComponent = ({
  life = 1,
  type = getRandomIntegerNumber(3),
  invert = getRandomBooleanValue(),
}) => {
  return (
    <React.Fragment>
      <div
        className={`BlockingComponent BlockingComponent--type${type} ${
          invert && 'invertX'
        }`}
      />
    </React.Fragment>
  );
};

export default BlockingComponent;
