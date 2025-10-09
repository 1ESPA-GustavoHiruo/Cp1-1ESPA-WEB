// Exercício 1, Como declarar uma variável

// Variável com valor undefined
let indefinido;
console.log("Saida:", indefinido);
console.log("Tipo:", typeof indefinido);

// Valor vazio
let vazio = null;
console.log("Saida:", vazio);
console.log("Tipo:", typeof vazio);

// Variável com valor de JavaScript
let java = "JavaScript";
console.log("Saida:", java)
console.log("Tipo:", typeof java);

// Exercicio 2, Como usar o operador 

const a = 10
const b = 50
const c = 10

// != Remete a diferente de ...
console.log(a != b)     // true 
console.log(a != c)     // false

// == sinal de igualdade 
console.log(a == c)     //true
console.log(a == b)     //false

// >= sinal de maior ou igual a ...
console.log(b >= a)     //true
console.log(a >= b)     //false


/* Exercicio 3, Escreva um programa(usando Switch case) que calcula o índice de massa corporal (IMC) de uma pessoa
e exibe uma mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as
seguintes faixas de IMC: abaixo de 18,5 (abaixo do peso), entre 18,5 e 24,9 (peso ideal) e acima de 24,9
(acima do peso) */


const peso = 55;            // Variavel com o valor do peso da pessoa const peso = X; 
const altura = 1.70;        // Variavel com o valor da altura da pessoa const altura = X;

const imc = peso / (altura * altura);       //variavel que calcula o imc da pessoa 
console.log("Seu IMC calculado é:", imc);

// Margem de peso da pessoa segundo a faixa de IMC proposta pelo professor "Wellington Cidade"
let faixa;

if (imc < 18.5) // Se o IMC da pessoa for menor que 18,5 entrara para a categoria abaixo do peso 
    {
    faixa = "abaixo";
} 
else if (imc >= 18.5 && imc <= 24.9)    // Se não, se o IMC da pessoa estiver entre 18,5 e 24,9 entra para a categoria de peso ideal
    {
    faixa= "ideal";
} 
else    // Se não, a pessoa entrara para a categoria acima do peso pois o IMC do mesmo esta acima de 24,9 
    {
    categoria = "acima";
}

// nessa etapa o Switch pega o numero do valor "faixa" que seria "abaixo, ideal e acima" e compara com os "case" para mostrar no console, continuando a partir do "break" se n atende ao requisito 
switch (faixa) 
    {
    case "abaixo":
        console.log("Resultado: Abaixo do peso");
        break;
    case "ideal":
        console.log("Resultado: Peso ideal");
        break;
    case "acima":
        console.log("Resultado: Acima do peso");
        break;
    default:
        console.log("Erro no cálculo");
}


//Exercício 4,Faça um programa que que faça uma repetição até 50

for (let i = 1; i <= 50; i++)   //para i menor ou igual que 50 ele adiciona 1 a contagem com "i++"
    {
        console.log("O valor é:", i);
}


/*Exercíico 5, crie um progama que receba um nome de usuário e uma senha e verifique se eles correspondem aos
dados de um usúario cadastrado. Considere que o usuário cadastrado possui nome usuário "admin" e
senha "1234". O progama deve exibir uma mensagem indicando se o login foi realizado com susesso ou
se houve falha de autenticação. Exemplifique e demonste!*/

// Primeira senha e usuario cadastrado 
const usuario_cadastrado = "admin";
const senha_cadastrada = "1234";

const user = "admin";
const user_senha = "1234";

// Verificação do log e senha 

if (user == usuario_cadastrado && user_senha == senha_cadastrada)
    {
        console.log ("Login realizado com sucesso!")
}

else {
    consolore.log ("Falha de autenticação!!")
}

// Falha de verificação do login e senha

const user2 = "Corinthians"
const senha2 = "5678"
if (user2 == usuario_cadastrado && senha2 == senha_cadastrada)
    {
        console.log ("Login realizado com sucesso!")
}

else {
    console.log ("Falaha de autenticação!!")
}

/* Exercício 6 Vamos criar um progama que calcule a média de 7 notas e exiba uma mensagem indicadndo se aluno
foi aprovado ou reprovado.  Considere que a média mínima para a provaçao é 6*/

const nota1 = 2.0;
const nota2 = 3.5;
const nota3 = 4.5;
const nota4 = 5.5;
const nota5 = 10 ;
const nota6 = 9.5;
const nota7 = 10 ;

const total = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7;
const media = total/7;
console.log ("A média do aluno é:",media);
// Se a nota do aluno for maior ou igual a 6 aluno aprovado 
if (media >=6 )
    {
        console.log ("Aluno aprovado! :)")
}
else {
    console.log ("Aluno reprovado! :( ")
}

/* Exercicio 7 Crie um progama que declare a variável como string depois converta para float  em seguida apresente
o tipo da variável */

let string = "171";
console.log (string)
console.log (typeof string)
let float = parsefloat (string);
console.log (float)
console.log (typeof float)


