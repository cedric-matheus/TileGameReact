// CORE SYSTEMS
import { getRandomIntegerNumber, getRandomBooleanValue } from './RandomSystem';

// CORE COMPONENTS
import CellComponent from '../Components/Cell';

// JSDOC TYPEDEFS
import '../Components/Cell/typedef';

/**
 * Esse sistema é responsável por criar uma célula (CellComponent) randômica.
 *
 * @returns {CellComponent} Célula gerada randômicamente.
 */
export function createCell() {
  const randomCell = { ...CellComponent };

  const type = getRandomIntegerNumber(3);
  const life = getRandomIntegerNumber(5);
  const isInverted = getRandomBooleanValue();

  randomCell.type = type;
  randomCell.life = life;
  randomCell.isInverted = isInverted;

  return randomCell;
}
