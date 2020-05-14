// CORE SYSTEMS
import { getRandomIntegerNumber, getRandomBooleanValue } from './RandomSystem';

/**
 * Esse sistema é responsável por gerar uma célula (CellComponent) randômica.
 *
 * @returns {CellComponent} Célula gerada randômicamente.
 */
export function generateCell() {
  const type = getRandomIntegerNumber(3);
  const life = getRandomIntegerNumber(5);
  const isInverted = getRandomBooleanValue();
}
