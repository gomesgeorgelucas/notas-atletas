# Calculadora de Média de Ginástica

## 1. Descrição do Projeto

Este projeto consiste em uma aplicação JavaScript simples, executada em um único arquivo (`notas-atletas.js`), que processa os resultados de uma competição de ginástica artística.

A aplicação foi projetada para receber uma lista de atletas, onde cada atleta possui um nome e um array com cinco notas atribuídas por jurados. O objetivo é calcular a média final de cada atleta com base em uma regra de avaliação específica e, em seguida, exibir um relatório formatado no console.

## 2. Regra de Negócio

A competição possui uma regra de avaliação específica para o cálculo da média, que é o núcleo deste script:

1.  Cada atleta recebe cinco notas (de 1 a 10).
2.  Para calcular a média, a **maior nota** e a **menor nota** são descartadas.
3.  A média final é calculada com base na soma das **três notas do meio**, dividida por três.

## 3. Como Executar

Para executar este projeto, você precisa de um ambiente que possa rodar JavaScript, como um navegador (console do desenvolvedor).

### Requisitos

- [Node.js](https://nodejs.org/) (Recomendado)
- O arquivo da solução (ex: `notas-atletas.js`)

### Passos para Execução (via Navegador)

1.  Abra seu navegador (Chrome, Firefox, etc.).
2.  Abra as "Ferramentas do Desenvolvedor" (geralmente pressionando `F12` ou `Ctrl+Shift+I`).
3.  Vá para a aba "Console".
4.  Cole _todo_ o conteúdo do arquivo `notas-atletas.js` no console.
5.  Pressione `Enter`.
6.  A saída será exibida no console.
