//executa uma função () para cada elemento do array, resultando num único valor de retorno.

const lista = [10,20,30];

const novaLista = lista.reduce(function(total, proximo){
   return total + proximo; //pega o total que no começo é o 0. E soma com o proximo item ate percorrer todo o array
})

console.log(novaLista)
