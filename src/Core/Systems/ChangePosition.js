/**
 * Esse sitema é responsável por alterar a posição de uma entidade.
 * @param {Object} entity Entidade que deve ter a posição alterada
 * @param {number} x Nova posição no eixo X
 * @param {number} y Nova posição no eixo Y
 */
export default function ChangePosition(entity, x, y) {
  const newEntity = { ...entity };

  newEntity.position = { x, y };

  return newEntity;
}
