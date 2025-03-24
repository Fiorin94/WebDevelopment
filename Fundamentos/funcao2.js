//Em JS é possível armazenar uma função dentro de uma variável

const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Também é possível armazenar uma função arrow em uma variável
//Funções arrow serão explicadas com mais detalhe posteriormente

const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 5))

//Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 4))
