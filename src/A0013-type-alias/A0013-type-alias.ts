/*

    Em Typescript, alias é uma forma de atribuir um nome alternativo (como um apelido) a um tipo existente. Isso ajuda a simplificar
    e tornar mais legíveis os tipos complexos e repetitivos em um projeto de desenvolvimento.

    O alias pode ser usado para referenciar qualquer tipo disponível e pode ser definido usando o operador type. Por exemplo,
    se você tem um tipo como {id: number, name: string} que é usado várias vezes em seu código, você pode criar um alias como:


    type Person = {id: number, name: string};


    Você pode então usar o alias Person em vez da definição completa do tipo toda vez que precisar se referir a ele em seu código.

    Isso torna o código mais fácil de ler e entender, especialmente quando há muitos tipos complexos envolvidos. Além disso,
    se precisar atualizar o tipo original, só precisa fazê-lo em uma única vez no local onde a definição do tipo é feita.

    Exemplo:

    //variável comum sem alias
    const user: { id: number; name: string } = { id: 1, name: 'John Doe' };

    //Variável usando alias
    type User = { id: number; name: string };
    const newUser: User = { id: 1, name: 'John Doe' };
*/

type Old = Number;
type People = {
  name: string;
  old: Old;
  wage: Number;
  favoriteColor?: string;
};

type colorRGB = 'red' | 'blue' | 'green';
type colorCMYK = 'Ciano' | 'Magenta' | 'Yellow';
type favoriteColor = colorRGB | colorCMYK;

const people: People = {
  name: 'Jonatas Silva',
  old: 22,
  wage: 1_500, // 15000
};

export function setFavoriteColor(people: People, color: favoriteColor): People {
  return {
    ...people,
    favoriteColor: color,
  };
}

console.log(setFavoriteColor(people, 'blue'));
