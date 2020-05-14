import React from 'react';
import './Styles/global.scss';
import GridContainer from './Containers/GridContainer/GridContainer';
import BorderComponent from './Components/BorderComponent/BorderComponent';
import FogComponent from './Components/FogComponent/FogComponent';

/**
 *
 */
export default function App() {
  return (
    <React.Fragment>
      <FogComponent />
      <GridContainer />
      <BorderComponent />
    </React.Fragment>
  );
}
