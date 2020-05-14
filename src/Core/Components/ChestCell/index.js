// TODO: incluir descrição dos tipos
/**
 * Célula de Baú (ChestCellComponent)
 *
 * Esse componente é responsável por representar uma celula de baú
 *
 * @property {number} life=`0` - Vida da célula
 * @property {number} type=`0` - Tipo da célula { `0`: ???, `1`: ???, `3`: ??? }
 * @property {number} loot=`100` - Valor dentro do baú
 * @property {boolean} isLocked=`false` - Está fechado?
 * @property {boolean} isInverted=`false` - Célula é invertida?
 */
const ChestCellComponent = {
  life: 0,
  type: 0,
  loot: 100,
  isLocked: false,
  isInverted: false,
};

export default ChestCellComponent;
