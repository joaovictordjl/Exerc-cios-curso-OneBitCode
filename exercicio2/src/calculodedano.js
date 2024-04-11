const personagemAtacante = prompt("Diga o nome do personagem: ");
const poderDeAtaque = parseFloat(prompt("Qual seu poder de ataque?: "));

const personagemDefensor = prompt("Qual o personagem defensor?: ");
let pontosDeVidaDefensor = parseFloat(prompt("Quantos pontos de vida ele tem?: "));
const poderDeDefesa = parseFloat(prompt("Qual seu poder de defesa?: "))
const escudo = prompt("Ele possui um escudo? (Sim/Não) ");

let danoCausado = 0;


if (poderDeAtaque > poderDeDefesa && escudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if(poderDeAtaque > poderDeDefesa && escudo === "Sim"){
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
} 

pontosDeVidaDefensor -= danoCausado 

alert(personagemAtacante + " causou " + danoCausado + "de dano")
alert(personagemAtacante + "\nPoder de ataque: " + poderDeAtaque + "\n" +
    personagemDefensor + "\npontos de vida: " +  pontosDeVidaDefensor +
    "\npoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + escudo
)
