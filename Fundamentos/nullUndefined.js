let valor //Não inicializada, e irá retornar como "undefined"
console.log(valor)

valor = null //Nulo é quando há uma ausência de valor na variável
console.log(valor)
//console.log(valor.toString()) < Isso é um erro

const produto ={}
console.log(produto.peso)
console.log(produto) //Objeto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)

produto.preco = null
console.log(!!produto.preco)
