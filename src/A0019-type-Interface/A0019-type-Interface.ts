/*
    Em TypeScript, uma interface é uma estrutura que define o formato de um objeto, estabelecendo quais
    propriedades e métodos pertencem a esse objeto. Ela não é implementada diretamente no código, mas serve
    como um contrato ou um guia que deve ser seguido por qualquer objeto que implemente a interface.

    As interfaces em TypeScript são semelhantes às interfaces em outras linguagens de programação orientadas
    a objetos, como C# ou Java. No entanto, a diferença é que em TypeScript elas podem ser usadas para descrever
    também tipos primitivos, como números e strings, e não apenas objetos.

    (interface => serve para fazer contratos
    alias tbm serve.)
*/

interface carteira {
  money: number;
}

interface birthday {
  birthday: string;
}

interface showMessage {
  hi(): string;
}

// extendendo as contratos para um contrato só ou mais contratos
interface People extends carteira, birthday, showMessage {
  name: string;
  old: number;
}

// implemtentado na classe de clientes o contrato de Pessoas
class Client implements People {
  name = 'Nicolas';
  old = 28;
  money = 1_500;
  birthday = '06/03/2001';

  hi() {
    return `hi`;
  }
}

export class People1 implements People {
  constructor(
    public name: string,
    public lastName: string,
    public old: number,
    public money: number,
    public birhday: string,
  ) {}

  nomeCompleto() {
    return this.name + ' ' + this.money + this.old + this.birhday;
  }
}

const pessoaObj1: People = {
  nomeCompleto(): string {
    return this.name;
  },

  name: 'jonatas',
};

const pessoa = new People1('JOnatas', 'Silva', 28, 1_500);
console.log(pessoa.nomeCompleto());

// exibindo o valor para o console.log
let c = new Client();
console.log(c.hi);

/*

    As interfaces em TypeScript podem ser muito úteis quando se trabalha com código modular e reutilizável,
    pois permitem que diferentes módulos possam interagir entre si de forma mais clara e consistente.
    Além disso, elas ajudam na detecção de erros precoces, pois se um objeto não seguir os padrões
    definidos pela interface correspondente, ocorrerá um erro em tempo de compilação.

*/
