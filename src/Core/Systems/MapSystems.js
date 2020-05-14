// CORE SYSTEMS
import { createCell } from './CellSystems';

// CORE COMPONENTS
import MapComponent from '../Components/Map';

// JSDOC TYPEDEFS
import '../Components/Map/typedef';

/**
 * Esse sistema é responsável por criar um mapa randômico com a altura (height)
 * e largura (width) informados.
 *
 * @param {number} width Largura do mapa
 * @param {number} height Altura do mapa
 *
 * @returns {MapComponent} Mapa gerado randômicamente
 */
export function createMap(width, height) {
  const randomMap = { ...MapComponent };

  // gerando linhas do mapa
  for (let row = 0; row < height; row++) {
    const mapRow = [];

    // gerando colunas da linha
    for (let column = 0; column < width; column++) {
      const rowColumn = createCell();

      // adicionando coluna a linha
      mapRow.push(rowColumn);
    }

    // adicionando linha ao mapa (matriz)
    randomMap.mapMatrix.push(mapRow);
  }

  return randomMap;
}
