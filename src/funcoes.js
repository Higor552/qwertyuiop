/**
 * Devolve true se n for par.
 * Zero é par (0 % 2 === 0).
 */
export function par(n) {
  return n % 2 === 0;
}

/**
 * Média aritmética de um array de números.
 *
 * Decisão: para um array vazio a média não existe (seria 0/0).
 * Devolver 0 esconderia o problema e se confundiria com uma média
 * real igual a 0, então a função lança um erro explícito.
 */
export function media(notas) {
  if (!Array.isArray(notas) || notas.length === 0) {
    throw new Error("Não é possível calcular a média de uma lista vazia.");
  }
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

/**
 * Recebe { name, age }[] e devolve só quem tem age >= 18.
 * Quem tem exatamente 18 anos conta como maior de idade.
 */
export function filtrarMaiores18(usuarios) {
  return usuarios.filter((usuario) => usuario.age >= 18);
}
