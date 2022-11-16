//const alunos = ['Alice', 'Gabriela', 'João', 'Francisco', 'Natália', 'Giovana', 'Gabriel']

//const [aluno1,aluno2,aluno3,aluno4,aluno5,aluno6,aluno7] = alunos

//console.log(aluno1)
//..........................................................................//

//const disciplinas = ['Matemática', 'Física', 'Química', 'Língua Portuguesa', 'Biologia']

//const [disciplina1,disciplina2,,disciplina4,disciplina5]= disciplinas
//console.log(disciplina1,disciplina2,disciplina4,disciplina5)

//........................................................................//
const dadosCliente = {
    nome: 'Fabio',
    idade: 45,
    endereco: {
        logradouro: 'Rua das Palmeiras',
        numero: 42,
        bairro: 'Barra da Tijuca',
        cidade: 'Rio de Janeiro'
    },
    assinanteDesde: 2017
}
const{nome} = dadosCliente;
console.log(nome);
const{idade} = dadosCliente;
console.log(idade)
const {logradouro} = dadosCliente.endereco;
console.log(logradouro);


