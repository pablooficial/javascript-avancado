var lista = ["Computador", "Telefone", "Mouse"];
console.log(lista.length) //conta a qtd que tem na lista
//lista.pop() //remove o ultimo elemento
//console.log(lista);

if(lista.indexOf("Computador") > -1){
    const produto = lista.filter(function(item){
        return item == "Computador"
    })
    console.log("Esse item que esta na lista chama: " + produto)
}
else{
    console.log("O item não esta na lista")
}

lista.splice(1,1) //começa na posicao solicitada e remove a qtd informada
console.log(lista)