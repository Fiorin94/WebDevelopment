const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //isInteger serve para verificar se o número é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //Função toFixed determina o valor de números após a vírgula
console.log(media.toString()) //Transforma o valor em String
console.log(typeof media) //typeof mostra qual é o tipo da variável