import React from 'react';
import './Styles/global.scss';
import { Player } from './Core/Entities/Player';
import ChangePosition from './Core/Systems/ChangePosition';
import GridContainer from './Containers/GridContainer/GridContainer';
import BorderComponent from './Components/BorderComponent/BorderComponent';
import FogComponent from './Components/FogComponent/FogComponent';

export default function App() {
  return (
    <React.Fragment>
      <FogComponent />
      <GridContainer />
      <BorderComponent />
      <div onClick={() => (Player = ChangePosition(Player, 5, 0))}>
        Posição X: {Player.position.row}
      </div>
    </React.Fragment>
  );
}
