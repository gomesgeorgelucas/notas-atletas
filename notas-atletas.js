function processarEExibirAtletas(listaAtletas) {
  listaAtletas.forEach(function (atleta) {
    let copiaNotas = [];
    atleta.notas.forEach(function (nota) {
      copiaNotas.push(nota);
    });

    let notasOrdenadas = copiaNotas.sort(function (a, b) {
      return a - b;
    });

    let notasValidas = notasOrdenadas.slice(1, -1);

    let soma = notasValidas.reduce(function (acumulador, notaAtual) {
      return acumulador + notaAtual;
    }, 0);

    let media = soma / notasValidas.length;

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
    console.log(`Média Válida: ${media}`);
    console.log("");
  });
}

const atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];

processarEExibirAtletas(atletas);
