//O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const lista = [10,20,30]
const buscar = lista.filter(function(item){
   return item  >=  20;
})
console.log(buscar);