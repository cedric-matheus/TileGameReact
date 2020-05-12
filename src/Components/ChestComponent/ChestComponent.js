import React from 'react';
import '../ChestComponent/ChestComponent.scss';
import { boleanValue } from '../../Core/Systems/RandomTool';
import { getRandomInt } from '../../Core/Systems/RandomTool';

/**
 * @Name: Bloco Baú
 * @Desc: O Baú é um obstaculo com premio interno
 * @props: life = vida do objeto, type= estilo de visualização, loot= valor dentro do baú
 *
 */

const ChestComponent = ({
  life = 10,
  type = getRandomInt(4),
  loot = 100,
  locked,
  invert = boleanValue(),
}) => {
  return (
    <React.Fragment>
      <div
        className={`ChestComponent ChestComponent--type${type} ${invert &&
          'invertX'}`}
      />
    </React.Fragment>
  );
};

export default ChestComponent;
