let nomeCarro1 = prompt("Qual o nome do primeiro carro?: ")
let carro1 = prompt("Qual a sua velocidade: " );
let nomeCarro2 = prompt("Qual o nome do segundo carro?: ")
let carro2 = prompt("Qual a sua velocidade?: ")

if(carro1>carro2){
    alert(nomeCarro1 +  " é mais rápido");
} else if(carro1<carro2) {
    alert(nomeCarro2 +  " é mais rápido");
} else {
    alert("os dois carros estão na mesma velocidade")
}