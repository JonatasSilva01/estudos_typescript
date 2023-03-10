/**
 * Em TypeScript, uma tupla é um tipo de dado que permite representar
 * um array com um número fixo de elementos e tipos definidos para cada
 * posição do array.
 */

const dadosCliente: readonly [number, string] = [1, 'Luiz']; // tupla de tamanho fixo que nãp pode ser mexida por conta do 'readonly'
const dataClites2: [number, string, ...string[]] = [1, 'Henrique', 'Jonatas']; // tupla de tamanho fixo com number e o restante string

type Pessoa = [string, number, boolean?];
let pessoa: Pessoa = ['Fulano', 1, true];

// readonly é atribuido quando não se pode mexer no array

const array1: readonly string[] = ['Jonatas', 'silva'];
const array2: ReadonlyArray<string> = ['Jonatas', 'silva'];
