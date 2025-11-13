const pessoas = [
    { nome: 'Luiz Morais Neto', idade: 47 },
    { nome: 'José Wanderson Silva', idade: 28 },
    { nome: 'Rosana', idade: 22 },
    { nome: 'Ana', idade: 28 }
];

const indice = pessoas.findIndex(pessoa => pessoa.nome === 'Luiz Morais Neto');
if (indice !== -1) {
    console.log(`A pessoa encontada : ${pessoas[indice].nome} com idade de ${pessoas[indice].idade} anos. foi encontrada no indice ${indice}.`);
} else {
    console.log('Pessoa não encontrada.');
}

