/* eslint-disable */

/*
    1.string literal

    Um valor string literal é um tipo com um valor definido explicitamente como uma string.

    Neste exemplo, o tipo da variável cor só permite os valores 'vermelho', 'azul' ou 'verde'.
*/
let cor: 'vermelho' | 'azul' | 'verde';

cor = 'vermelho'; // Válido
cor = 'amarelo'; // Inválido

/*
    2. Numeric literal

    O tipo numérico literal é semelhante ao string literal, mas apenas para números.

    O tipo da variável idade neste exemplo só permite os valores 21, 22 ou 23.
*/
let idade: 21 | 22 | 23;

idade = 21; // Válido
idade = 20; // Inválido
/*
    3. Boolean Literal

    O tipo booleano literal é usado quando há apenas duas possibilidades de valores booleanos: verdadeiro (true) ou falso (false).

    Aqui, a variável temCarteira pode ter apenas o valor true.
*/
let temCarteira: true;

temCarteira = true; // Válido
temCarteira = false; // Inválido
/*
    4. Object Literal

    O tipo objeto literal é um objeto com keys e values específicos:
*/
let people: {
  nome: string;
  idade: number;
};

people = { nome: 'João', idade: 30 }; // Válido
people = { nome: 'João', lastName: 'Silva' }; // Inválido

let people2 = {
  name: 'Jonatas' as const, // acerção de const para chave name
  lastName: 'Silva dos Santos',
};

/*

    Neste exemplo, a variável pessoa pode ter apenas as propriedades nome (do tipo string) e idade (do tipo number).

    Esses são apenas alguns exemplos dos muitos tipos literais disponíveis em Typescript. Eles podem ser muito úteis
    para restringir os valores que uma variável pode receber e ajudar a tornar seu código mais seguro.
*/

// function que poderá retornar uma string

function colorShow(color: 'red' | 'yellow' | 'blue') {
  return color;
}
