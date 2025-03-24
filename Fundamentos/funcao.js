//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //Se passar dois parâmetros conforme a função ele irã somar normalmente 
imprimirSoma(2) //Se for passado apenas um parâmetro o outro será considerado como "undefined"
imprimirSoma(2, 3, 4, 5, 6, 7) //Se for passado mais que os parâmetros pré-definidos, ele simplesmente ignorará as sobras
imprimirSoma() //Se nada for passado, o valor será retornado como NaN (Not a number)

//Função com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))  
