//(...Spread) permite que um objeto iterável, como um array ou string,
//Rest - 
function minhaLista(...nomes){
console.log(nomes)
}
minhaLista("mateus","lucas","pedro")
////////////////

//rest operator = juntar os arrays
//rest operator na funcao, se nao passar   ...novosUsuarios, ele quebra os arrays e nao pega
function cadastrarUsuario(usuarios, ...novosUsuarios){
   let cadastroTotal = [ //quando passa o spred operator ele junta os dois arrays
      ...usuarios, // se nao passar o SpredOperator =>  ...XXXX  ele nao junta os arrays
      ...novosUsuarios,
   ];
   return console.log(cadastroTotal);


}

let usuarios = ["pablo","joao"];

let novosUsuarios = cadastrarUsuario(usuarios,"maria");