/**
 * Gera um número(`number`) inteiro entre 0 e um número máximo (`max`).
 *
 * @param {number} max Número(`number`) máximo a ser gerado.
 * @returns {number} Número(`number`) inteiro gerado.
 */
export function getRandomIntegerNumber(max) {
  const randomIntegerNumber = Math.floor(Math.random() * Math.floor(max));

  return randomIntegerNumber;
}

/**
 * Seleciona um valor aleatório em um vetor(`Array`).
 *
 * @param {Array} myArray Vetor(`Array`) de valores para seleção.
 * @returns {*} Valor selecionado.
 */
export const getRandomValueFromArray = (myArray) => {
  const selectedValue = myArray[Math.floor(Math.random() * myArray.length)];

  return selectedValue;
};

/**
 * Gera um valor boleano(`boolean`) aleatório.
 *
 * @returns {boolean} Valor boleano(`boolean`) aleatório.
 */
export const getRandomBooleanValue = () => {
  const randomBooleanValue = Math.random() < 0.5;

  return randomBooleanValue;
};
