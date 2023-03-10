/* eslint-disable */
// tipos básicos (aqui inferencia de tipos)

let nome: string = 'Jonatas'; // qualquer tipo de string
let idade: number = 21; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // ture or false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays

let ArraysOfNumbers: Array<Number> = [1, 2, 3, 4];
let ArraysOfNumbersTwo: number[] = [1, 2, 3, 4];
let ArrayOfStrings: Array<String> = ['a', 'b', 'c'];
let ArrayOfStringsTwo: string[] = ['a', 'b', 'c'];
let ArrayOfObjects: Array<Object> = [];
let ArrayOfObjectsTwo: object[] = [];

// object

let ObjectOfPeople: {
  name: String;
  lastName: String;
  birthday: String;
  univercity?: boolean;
  city: String;
} = {
  name: 'Jonatas',
  lastName: 'Silva Santos',
  birthday: '06/03/2001',
  univercity: true,
  city: 'SP/SÃO PAULO',
};

// Funções

function MathPlus(x: number, y: number): number {
  return x + y;
}

const MathPlusTwo: (x: number, y: number) => number = (x, y) => x + y;
