const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//A variável do tipo var não possui escopo de função