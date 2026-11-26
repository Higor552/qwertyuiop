import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { par, media, filtrarMaiores18 } from "../src/funcoes.js";

describe("par", () => {
  test("par(2) devolve true", () => {
    assert.equal(par(2), true);
  });

  test("par(3) devolve false", () => {
    assert.equal(par(3), false);
  });

  test("par(0) devolve true (zero é boundary)", () => {
    assert.equal(par(0), true);
  });
});

describe("media", () => {
  test("media([7, 8, 9]) devolve 8", () => {
    assert.equal(media([7, 8, 9]), 8);
  });

  test("media([]) lança erro (decisão: não existe média de lista vazia)", () => {
    assert.throws(() => media([]), {
      message: "Não é possível calcular a média de uma lista vazia.",
    });
  });
});

describe("filtrarMaiores18", () => {
  const usuarios = [
    { name: "Ana", age: 22 },
    { name: "Beto", age: 17 },
    { name: "Carla", age: 30 },
  ];

  test("Ana (22) e Carla (30) entram; Beto (17) fica de fora", () => {
    const resultado = filtrarMaiores18(usuarios);
    const nomes = resultado.map((u) => u.name);

    assert.deepEqual(nomes, ["Ana", "Carla"]);
    assert.ok(!nomes.includes("Beto"));
  });

  test("age === 18 conta como maior de idade", () => {
    const resultado = filtrarMaiores18([{ name: "Davi", age: 18 }]);

    assert.deepEqual(resultado, [{ name: "Davi", age: 18 }]);
  });
});
