/*
    'unknown' é um tipo em TypeScript que representa um valor que pode ter qualquer tipo. É semelhante ao tipo 'any', mas com uma diferença
    importante: enquanto o tipo any permite que você faça qualquer coisa com ele (por exemplo, chama qualquer método ou acessa qualquer
    propriedade), unknown é mais restritivo.

    Quando você tem um valor do tipo 'unknown', não pode fazer nada com ele até primeiro verificar qual é o seu 'tipo real'. Isso é feito
    usando as construções 'typeof', 'instanceof' ou outros 'tipos de checagem de tipo disponíveis no TypeScript.'

    Por exemplo, considere o seguinte código:
*/

function showLength(str: unknown) {
  if (typeof str === 'string') {
    console.log(`The length of the string "${str}" is ${str.length}.`);
  } else {
    console.log(`The value "${str}" is not a string.`);
  }
}

showLength('Hello, world!'); // imprime "The length of the string "Hello, world!" is 13."
showLength(42); // imprime "The value "42" is not a string."

/*
    Neste caso, a função showLength recebe um argumento str do tipo unknown. Dentro da função, verificamos se str é uma string usando
    typeof. Se o valor for uma string, mostramos o comprimento da string. Caso contrário, imprimimos uma mensagem de erro.

    O uso do tipo 'unknown' é útil quando você tem valores que podem ter diferentes tipos e precisa lidar com eles de maneira segura. 
    Isso torna o código mais seguro, pois garante que você está tratando os valores corretamente e ajuda a evitar erros difíceis de
    encontrar.
*/
