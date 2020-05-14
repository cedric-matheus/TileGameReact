// CORE SYSTEMS
import {
  getRandomIntegerNumber,
  getRandomBooleanValue,
  getRandomValueFromArray,
} from './RandomSystem';

// CORE COMPONENTS
import BlockingCellComponent from '../Components/BlockingCell';
import ChestCellComponent from '../Components/ChestCell';

// JSDOC TYPEDEFS
import '../Components/BlockingCell/typedef';
import '../Components/ChestCell/typedef';

/**
 * Cria uma celula do tipo bau (ChestCellComponent) aleatória.
 *
 * @returns {ChestCellComponent} Celula do tipo baú aleatória.
 */
export function createChestCell() {
  const randomChestCell = { ...ChestCellComponent };

  const life = getRandomIntegerNumber(5);
  const type = getRandomIntegerNumber(3);
  const loot = getRandomIntegerNumber(100);
  const isLocked = getRandomBooleanValue();
  const isInverted = getRandomBooleanValue();

  randomChestCell.life = life;
  randomChestCell.type = type;
  randomChestCell.loot = loot;
  randomChestCell.isLocked = isLocked;
  randomChestCell.isInverted = isInverted;

  return randomChestCell;
}

/**
 * Esse sistema é responsável por criar uma célula de obstáculo
 * (BlockingCellComponent) randômica.
 *
 * @returns {BlockingCellComponent} Célula gerada randômicamente.
 */
export function createBlockingCell() {
  const randomBlockingCell = { ...BlockingCellComponent };

  const life = getRandomIntegerNumber(5);
  const type = getRandomIntegerNumber(3);
  const isInverted = getRandomBooleanValue();

  randomBlockingCell.life = life;
  randomBlockingCell.type = type;
  randomBlockingCell.isInverted = isInverted;

  return randomBlockingCell;
}

/**
 * Cria uma célula aleatória de baú ou de obstáculo
 *
 * @returns {{
 *  cellType: ('Chest' | 'Blocking' | ''),
 *  cell: (ChestCellComponent | BlockingCellComponent | '')
 * }} Tipo da célula e célula.
 */
export function createRandomCell() {
  const cells = {
    Chest: () => createChestCell(),
    Blocking: () => createBlockingCell(),
    '': () => '',
  };

  const possibleCellTypes = ['Chest', 'Blocking', '', '', ''];

  const selectedCellType = getRandomValueFromArray(possibleCellTypes);

  return { cellType: selectedCellType, cell: cells[selectedCellType]() };
}
