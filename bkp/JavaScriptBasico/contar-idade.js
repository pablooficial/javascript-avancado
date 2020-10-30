
var nome = prompt('digite seu nome');
var ano = prompt('digite o ano que voce nasceu');
var area = document.getElementById('area');
 
 
if(ano < 2020 ){
   var idade =  2020 - ano;
console.log('o pablo tem: ' + idade + ' anos de idade')//1 forma de concatenar ' ' + ' '
console.log(`o pablo tem: ' ${idade} ' anos de idade`) //2 forma de concatenar `${}`
document.write('O '+ nome + ' tem: ' + idade + ' anos de idade');
}
