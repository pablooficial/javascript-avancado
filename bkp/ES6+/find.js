//O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
const lista = [10,20,30]
const buscar = lista.find(function(item){
   return item  <  30;
})
console.log(buscar);