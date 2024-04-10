let primeiroNome = prompt("informe o primeiro nome:")
let sobrenome = prompt("informe o sobrenome:")
let campoDeEstudo = prompt("informe a área de estudo:")
let anoDeNascimento = prompt("informe o ano de nascimento:")
let idade;
let nomeCompleto;

idade = 2024 - anoDeNascimento;
nomeCompleto = primeiroNome +  sobrenome;


console.log("O nome completo é: " + nomeCompleto);
console.log("Atualmente estuda: " + campoDeEstudo);
console.log(idade + " anos");

alert("Recruta cadastrado com sucesso!");


