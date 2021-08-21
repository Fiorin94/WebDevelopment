let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // "!" Serve para negação, se usado duas vezes pode servir para ver se um valor é verdadeiro

console.log('... Os verdadeiros')
console.log(!!3) //Valores inteiros positivos são verdadeiros
console.log(!!-3) //Valores inteiros negativos são verdadeiros
console.log(!!' ') //Valores com string são verdadeiros
console.log(!![]) //Valores em array/vetores são verdadeiros
console.log(!!{}) //Valores com objetos são verdadeiros
console.log(!!Infinity) //O valor infinito é verdadeiro
console.log(!!(isAtivo = true)) //Se o valor determinado nessa função for true então é verdadeiro

console.log('... Os falsos')
console.log(!!0) //O valor 0 é falso
console.log(!!'') //Uma string vazia é falsa
console.log(!!null) //Valor nulo é falso
console.log(!!NaN) //Valor Not A Number é falso
console.log(!!undefined) //Valores não definidos são falsos
console.log(!!(isAtivo = false)) //Se o valor determinado nessa função for false então é falso

console.log('E para finalizar...')
console.log(!! ('' || null || 0 || 'Verdadeiro!!'))