/*
    Em TypeScript, null e undefined são dois tipos diferentes de valores que representam uma ausência de valor.
*/

/*
    'null' é um valor atribuível a uma variável ou propriedade que representa a intenção explícita do programador
    em indicar que uma determinada variável ou objeto está sem valor. Pode ser usado quando se deseja esvaziar
    o conteúdo de uma variável, ou para indicar que um valor é desconhecido ou inexistente.

    Por outro lado, 'undefined' é usado como um valor padrão inicial para uma variável quando ela foi declarada,
    mas ainda não foi atribuída com um valor definido. Também pode ser usado para indicar que uma determinada 
    chave em uma estrutura de dados não tem valor - por exemplo, ao acessar uma propriedade de objeto que não existe.
*/

let numero: number = null; // Ao tentar atribuir null à uma variável com tipo number, o TypeScript não dará erro de compilação.
let texto: string;
console.log(texto); // Saída: undefined. A variável foi declarada mas não recebeu um valor inicial.

function getValor(): number {
  return undefined; // Mesmo havendo uma função que retorna um número, este retorno poderia ser undefined também.
}

let objeto = { nome: 'Carlos', idade: undefined }; // É possível atribuir undefined à uma propriedade de objeto.

let x;

if (typeof x === 'undefined') x = 20;

export function createPerson(
  firstName: string,
  lastName: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  typeof x === 'number' ? x * x : null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

typeof squareOfTwoNumber === null
  ? console.log('erro conta invalida')
  : console.log(squareOfTwoNumber * 100);
