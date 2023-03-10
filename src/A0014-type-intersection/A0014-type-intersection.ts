/*
    Em TypeScript, uma interseção é um tipo composto que combina dois ou mais tipos existentes em um novo tipo que contém
    todas as propriedades de todos os tipos incluídos.

    Isso significa que se você tiver dois interfaces com diferentes propriedades e métodos, poderá criar uma nova interface
    que combine todas essas propriedades e métodos usando o operador de interseção '&'.

    por exemplo:
*/

interface IA {
  propA: number;
  methodA(): void;
}

interface IB {
  propB: string;
  methodB(): void;
}

type Intersection = IA & IB;

/*
    Neste caso, a interface 'Intersection' teria todas as propriedades e métodos de IA e IB juntos, como você pode ver aqui:
*/

const meuObjeto: Intersection = {
  propA: 42,
  methodA() {},
  propB: 'Hello',
  methodB() {},
};

/*
    Este conceito é útil quando você deseja criar um tipo que deve conter todas as propriedades e métodos de vários tipos relacionados,
    por exemplo, ao modelar uma API com uma variedade de objetos que possuem diferentes campos.
*/

type haveName = { name: string };
type haveLastName = { lastName: string };
type haveOld = { old: number };
type People = haveName & haveLastName & haveOld;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'D';
type Intersection2 = AB & AC & AD; // a interseção sempre setá o 'A'

const people: People = {
  name: 'Jonatas',
  lastName: 'Silva',
  old: 22,
};

console.log(people);

export { people };
