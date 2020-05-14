import React from 'react';
import './Styles/global.scss';
import GridContainer from './Containers/GridContainer/GridContainer';
import BorderComponent from './Components/BorderComponent/BorderComponent';
import FogComponent from './Components/FogComponent/FogComponent';

/**
 * Componente principal da aplicação
 *
 * @returns {React.Component} Componente principal da aplicação
 */
export default function App() {
  return (
    <React.Fragment>
      {/* <FogComponent /> */}
      <GridContainer />
      <BorderComponent />
    </React.Fragment>
  );
}
