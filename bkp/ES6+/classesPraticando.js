 class Pessoa {
    constructor(){
       this.nome = '';
       this.sobrenome = '';
    }
    nomePessoa(primeironome){
       this.nome = primeironome;
       console.log(primeironome);
    }
    segundoNome(segundo){
       this.sobrenome = segundo;
       console.log(segundo);
    }
    nomeCompleto(){
       let nomecompleto = this.nome + this.sobrenome;
       console.log(nomecompleto)
    }

 }

 let novaPessoa = new Pessoa;

 novaPessoa.nomePessoa('Pablo');
 novaPessoa.segundoNome('Waniery');
 novaPessoa.nomeCompleto();
 