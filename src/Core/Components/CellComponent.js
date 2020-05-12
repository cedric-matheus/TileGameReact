/**
 * Componente Célula (CellComponent)
 *
 * Esse componente é responsável por representar um mapa (matriz)
 *
 * @typedef {Object} CellComponent
 * @property {number} life=0 - Vida da célula
 * @property {number} type=0 - Tipo da célula { 0: ???, 1: ???, 3: ??? }
 * @property {boolean} isInverted=false - Célula é invertida?
 */
const CellComponent = { life: 0, type: 0, isInverted: false };

export default CellComponent;
