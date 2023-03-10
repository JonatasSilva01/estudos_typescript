/*
    Claro! Em typescript, uma Union Type (união de tipos) é um recurso que permite definir uma variável, parâmetro ou propriedade
    que pode ter mais do que um tipo. Ou seja, em vez de limitar uma variável a um único tipo de dados, podemos permitir que ela
    tenha vários tipos diferentes.

    A sintaxe para declarar uma Union Type usa o caractere de pipe | para separar cada tipo:
*/

let myVariable: number | string;

/*
    Neste exemplo, a variável "myVariable" pode ser definida como um número OU como uma string. Isso significa que ela pode armazenar
    um valor atribuído de qualquer um desses dois tipos. Além disso, se tentarmos atribuir qualquer outro tipo de dado diferente dos
    declarados na união, receberemos um erro de tipo.

    Podemos também usar Union Types com objetos e classes:
*/

// interface User {
//   name: string;
// }

// interface Admin {
//   isAdmin: boolean;
// }

type UserType = User | Admin;

function getUserType(user: UserType): void {
  if ('name' in user) {
    console.log(`${user.name} é um usuário normal.`);
  }
  if ('isAdmin' in user) {
    console.log(`${user.isAdmin} é um administrador.`);
  }
}

/*
    Nesse caso, criamos a União de tipos chamada UserType, que combina as interfaces de usuário e admin. Na função getUserType,
    podemos usar operadores condicionais para verificar qual tipo de usuário estamos lidando.

    Em resumo, Union Types são úteis porque nos permitem lidar com múltiplos tipos de dados em uma única variável, permitindo
    uma maior flexibilidade em nosso código TypeScript.
*/

// exemplo:

/*
    caso o numero recebido pela função for um numero ele vai retornar uma 'soma'
    se caso a função retornar uma string ele vai concatenar a string
*/

function addOrConcat(a: number | string, b: number | string) {
  typeof a === 'number' && typeof b === 'number'
    ? a + b
    : typeof a === 'string' && b === 'string'
    ? a + ' ' + b
    : null;
}

console.log(addOrConcat(10, 20));
