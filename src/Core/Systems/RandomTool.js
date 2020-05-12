/**
 * Gera um numero inteiro até o número máximo (max)
 *
 * @param {number} max Número máximo a ser gerado.
 * @returns {number} Numero inteiro gerado.
 */
export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

//Sorteia um valor em um array
export const sortitionArrayValue = (myArray) => {
  return myArray[Math.floor(Math.random() * myArray.length)];
};

//Random Bolean
export const boleanValue = () => {
  return Math.random() < 0.5;
};
