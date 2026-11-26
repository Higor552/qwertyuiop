# Atividade: testes automatizados em JavaScript

Três funções pequenas em JavaScript, cada uma coberta por testes automatizados.
O objetivo é praticar a escrita de testes, incluindo casos de borda (*boundary*) e decisões de comportamento.

## Funções

| Função | O que faz |
| --- | --- |
| `par(n)` | Devolve `true` se `n` for par (zero conta como par). |
| `media(notas)` | Devolve a média aritmética de um array de números. |
| `filtrarMaiores18(usuarios)` | Recebe `{ name, age }[]` e devolve só quem tem `age >= 18`. |

### Decisão sobre `media([])`

A média de uma lista vazia não existe (seria 0/0). Devolver `0` esconderia o problema e se confundiria com uma média que de fato deu 0.
Por isso a função **lança um erro** quando recebe um array vazio, e esse comportamento é coberto por teste.

## Testes

- `par`: `par(2)` → `true`, `par(3)` → `false`, `par(0)` → `true`.
- `media`: `[7, 8, 9]` → `8`; `[]` lança erro.
- `filtrarMaiores18`: Ana (22) e Carla (30) entram, Beto (17) fica de fora, e `age === 18` conta como maior de idade.

## Como rodar

Requer **Node.js 18 ou superior**. Não precisa de `npm install`: os testes usam o runner nativo do Node (`node:test`).

```bash
npm test
```

## Estrutura

```
.
├── src/
│   └── funcoes.js
├── test/
│   └── funcoes.test.js
├── package.json
├── .gitignore
└── README.md
```

## Tecnologias

- JavaScript (ES Modules)
- Node.js (`node:test` e `node:assert`)
