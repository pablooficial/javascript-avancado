var lista = ["mateus", "lucas","pedro","henrique","jose",15]
console.log(lista)
console.log(lista.length) //conta
console.log(lista[0])
console.log(lista.indexOf("henrique")) //indexOf fala a posição do elemento no array
console.log(lista.join(" / "))//mostra 

lista.pop(); //remove o ultimo elemento do array

lista.shift();// remove o primeiro elemento do array

lista[0] = "Mateus Ferreira"; // altera o nome do elemento no array

lista.splice(1,1) //coneça na posição do indice e remeva a qtd de elemento

lista.push("Leandro"); //adiciona um elemento no array
var nomes = lista.push("Leandro");

lista.unshift("Alice"); //inclui um elemento no inicio do array 

//faz uma comparação para ver se o elmento informado esta no array ou nao
if(lista.indexOf("lucas") > -1){
    console.log("Esse item esta nalista")
}

//concat() cria um novo array mesclando arrays existentes: