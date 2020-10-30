class listaTarefas{
    constructor(){
        this.lista = [];//criando um array vazio []
    }

    addlista(){
        this.lista.push("pablo") //pegando esse array e insere algo nele
        console.log(this.lista) //exibindo no console .log
    }
}

const novalistaTarefas = new listaTarefas();//É preciso instanciar a classe ListaTarefas

document.getElementById('sub').onclick = function() {
    novalistaTarefas.addlista();//chamando o metodo 
}