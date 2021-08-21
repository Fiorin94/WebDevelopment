const escola = "Cod3r"

console.log(escola.charAt(4)) //a função charAt serve para mostrar o caracter na casa especificada
console.log(escola.charAt(5)) //Diferentemente de outras linguagens, o JS não dará erro ao passar um caracter fora da lista
console.log(escola.charCodeAt(3)) //Trás o código Unicode do caracter
console.log(escola.indexOf('3')) //Mostra qual o índice do caracter especificado

console.log(escola.substring(1)) //Mostra o valor do índice especificado
console.log(escola.substring(0, 3)) //Mostra o valor no range dos índices especificados

console.log('Escola '.concat(escola).concat('!')) //Função .concat concatena os valores passados
console.log('Escola ' + escola + '!') //Também é possível concatenar com o "+"
console.log(escola.replace(3, 'e')) //Função "replace" substitui o valor especificado no índice pelo valor passado

console.log('Ana,Maria,Pedro'.split(',')) //Função "split" separa em array de acordo com o valor passado
