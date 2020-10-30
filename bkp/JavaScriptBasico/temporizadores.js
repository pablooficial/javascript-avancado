function acao(){
    document.write("Executando...<br/>");
}

//executa uma acao de 1 em 1 segundo = 1000, de uma vez
//setInterval(acao, 1000);
//clearIntervar(timer); //atribui a uma variavel e para

//Espera e depoise executa
//setTimeout(acao, 3000);

var time = setInterval(acao, 3000);