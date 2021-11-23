const pessoa = {
    nome: 'Izabella',
    idade: 31,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa //O identificado destructuring retira variáveis de um objeto, nesse caso o "pessoa"
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //É possível renomear as variáveis conforme queira
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep )