//reduce

//1 forma de fazer 
function numeros(...lista){
   let total = lista.reduce(function(total, proximo){
      return total + proximo;
   });
   console.log(total)
}
numeros(0,4,6)


//2 forma de fazer, com o =>
function numeros(...lista){
   let total = lista.reduce((total, proximo) =>{
      return total + proximo;
   });
   console.log(total)
}
numeros(0,4,6)


//3 forma de fazer, tirando o retur e o parentes
function numeros(...lista){
   let total = lista.reduce((total, proximo) =>
       total + proximo
   );
   console.log(total)
}
numeros(0,4,6)