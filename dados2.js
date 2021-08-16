let preco = 19.90;
let desconto = 0.4;

console.log(19.90 * 0.6);
console.log(preco * (1 - desconto   ));

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

//Concatenação

let produto = 'Caderno'; //String -> sequência de caracteres/símbolos
let categoria = 'Papelaria';
console.log ('Produto: ' + produto
    + ', Categoria: '+ categoria
    + ', Preço: ' + preco
    + ', Desconto: ' + desconto
    + ', Preço com desconto: ' + precoComDesconto);

