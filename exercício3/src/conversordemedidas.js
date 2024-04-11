let valorAConverter = parseFloat(prompt("Digite um valor em metros"));
const unidadeDeMedida = prompt("Escolha uma opçao:\nmilímetro)\ncentímetro)\ndecímetro)\ndecâmetro)\nhectômetro)\nquilometro)");

let resultado;

switch(unidadeDeMedida){
    case "milímetro" :
        resultado= valorAConverter * 1000
        alert("o resultado é: " + resultado )
    break
    case "centímetro" :
         resultado= valorAConverter * 100
        alert("o resultado é: " + resultado)
    break
    case "decímetro" :
        resultado= valorAConverter * 10
        alert("o resultado é: " + resultado)
    break
    case "decâmetro" :
        resultado = valorAConverter / 10
        alert("o resultado é: " + resultado)
    break
    case "hectômetro" :
        resultado= valorAConverter / 100
        alert("o resultado é: " + resultado)
    case "quilometro" :
            resultado= valorAConverter / 1000
            alert("o resultado é: " + resultado)
    break
    default :
    alert("opção inválida")
}   
    

