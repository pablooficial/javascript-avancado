function cadastroPessoa(info){
 let novosDados = {
    ...info, //SpreadOperator chama o array dentro da função cadastroPessoa
    cargo: "desenvolvedor"
 };
 return novosDados;
}

cadastroPessoa({nome:"pablo",idade:30})

console.log( cadastroPessoa({nome:"pablo",idade:30}) )