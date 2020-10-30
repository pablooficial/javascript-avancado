// map() percorre cada elemento do Array e devolve um novo Array como resultado.
const lista = [1,2,3,4,5];//array
const novaLista = lista.map(function(item) {
   return item * 2; //retorna o que quer fazer
});
console.log(novaLista); //exibe nova lista

//////////////////////////////////
const lista2 = [1,2,3,4,5];//array
const novaLista2 = lista2.map(function(item, index) { //index é a posição do array 
   return item + index; //return = retorna o que quer fazer
});
console.log(novaLista2); //exibe nova lista

