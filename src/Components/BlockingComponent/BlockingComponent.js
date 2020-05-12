import React from 'react';
import '../BlockingComponent/BlockingComponent.scss';
import { boleanValue } from '../../Core/Systems/RandomTool';
import { getRandomInt } from '../../Core/Systems/RandomTool';

/** 
  * @Name: Bloco obstaculo Padrão
  * @Desc: O bloco default que pode ser destruido pelo jogador comforme vida
  * @props: life = vida do objeto, type= estilo de visualização
  *     

  */

const BlockingComponent = ({
  life = 1,
  type = getRandomInt(3),
  invert = boleanValue(),
}) => {
  return (
    <React.Fragment>
      <div
        className={`BlockingComponent BlockingComponent--type${type} ${invert &&
          'invertX'}`}
      />
    </React.Fragment>
  );
};

export default BlockingComponent;
