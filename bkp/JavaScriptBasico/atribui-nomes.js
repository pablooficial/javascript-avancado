//obj pessoa
const pessoa = {
   nome: "pablo",
   sobrenome: "waniery",
   idade: 30,
   cargo: "desenvolvedor",
}

let {nome} = pessoa; // atribui nome ao obj pessoa
let {sobrenome} = pessoa; 
let {cargo: programador} = pessoa; // muda o nome da variavel "para programador"

console.log(pessoa)

/////////////////////////////////////////////////

let nomes = ["pablo", "desenvolvedor","uberlandia"];

let {0:zeronome} = nomes; //atribui ao elemento 0 chamandopelo zeronome
let {1:primeironome} = nomes;
 
console.log(zeronome)