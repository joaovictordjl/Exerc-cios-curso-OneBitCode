let valorAConverter = parseFloat(prompt("Digite um valor em metros"));
const unidadeDeMedida = prompt("Escolha uma opçao:\nmilímetro)\ncentímetro)\ndecímetro)\ndecâmetro)\nhectômetro)\nquilometro)");

let resultado;

switch(unidadeDeMedida){
    case "milímetro" :
        resultado= valorAConverter * 1000
        alert("o resultado é: " + resultado + "mm")
    break
    case "centímetro" :
         resultado= valorAConverter * 100
        alert("o resultado é: " + resultado + "cm")
    break
    case "decímetro" :
        resultado= valorAConverter * 10
        alert("o resultado é: " + resultado + "dc")
    break
    case "decâmetro" :
        resultado = valorAConverter / 10
        alert("o resultado é: " + resultado + "dm")
    break
    case "hectômetro" :
        resultado= valorAConverter / 100
        alert("o resultado é: " + resultado + "hc")
    case "quilometro" :
            resultado= valorAConverter / 1000
            alert("o resultado é: " + resultado + "km")
    break
    default :
    alert("opção inválida")
}   
    

