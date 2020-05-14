// CORE COMPONENTS
import CellComponent from '../Cell';

// JSDOC TYPEDEFS
import '../Cell/typedef';

/**
 * Componente Mapa (MapComponent)
 *
 * Esse componente é responsável por representar um mapa (matriz)
 *
 * @property {CellComponent[]} mapMatrix=`[]` - Matriz representativa do mapa
 */
const MapComponent = { mapMatrix: [[{ ...CellComponent }]] };

export default MapComponent;
