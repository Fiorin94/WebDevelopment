const valores = [7.7, 8.8, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4]) //No Javascript ele traz o valor como "undefined" quando é passado um array fora do índice
console.log(valores)

//É possível passar o valor de algum índice de forma aleatória

valores[4] = 10 //Aqui ele define o valor do índice 4 que anterioremente não existia
console.log(valores)
console.log(valores.length) //length mostra o tamanho do array

valores.push({id: 3}, false, null, 'texto') //O Push insere novos valores ao seu array

console.log(valores)
console.log(valores.length)

console.log(valores.pop())
delete valores[0]

console.log(valores)

console.log(typeof valores)