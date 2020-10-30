let primeiros = [1,2,3]

let segundo = [...primeiros,4,5,6] //SpreadOperator chamado um array dentro de outro

console.log(segundo)

let pessoa = {
   nome: "pablo",
   sobrenome: "waniery",
   estado: "casado",
   idade: 30,
}

let novaPessoa = {
   ...pessoa, //chama o array pessoa para ficar dentro do array novaPessoa
   cidade: "uberlandia",
   pais: "brasil",
}

console.log(novaPessoa)