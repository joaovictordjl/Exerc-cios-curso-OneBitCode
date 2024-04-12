const nomeTurista = prompt("Qual seu nome turista?");
const visita = prompt("Já visitou alguma cidade?: \nSim) \nNão)");
let quantidadeCidades = 0;

let cidades="";

while(visita === "Sim") {
    quantidadeCidades++;
    cidades += prompt("Qual o nome da cidade?: " );
    const visita = prompt("Visitou alguma outra?: \nSim) \nNão)")

    if(visita === "Não"){
        break;
    } 
} 

alert("Nome do Turista: " + nomeTurista + "\nNúmero de viagens: " + quantidadeCidades + "\nCidades visitadas: " + cidades )