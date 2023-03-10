/*

    Classes em TypeScript são estruturas de programação que permitem definir um conjunto de propriedades
    e métodos que podem ser atribuídos a um objeto. Esses objetos são chamados de instâncias da classe.

    As classes oferecem uma maneira de organizar o código em módulos reutilizáveis e mais fáceis de manter.
    Além disso, as classes em TypeScript seguem os princípios da orientação a objetos (OO), como encapsulamento,
    herança e polimorfismo.

    Para definir uma classe em TypeScript, utiliza-se a palavra-chave 'class', seguida pelo nome da classe,
    e entre chaves ({}) define-se os métodos e propriedades da classe. O exemplo abaixo ilustra a sintaxe básica
    de uma classe simples:

*/

// criando a classe 'Empresa'
export class Empresa {
  public readonly Name: string;

  // iniciando uma variavel privada que ira inicar um array de colaboradores vazio com []
  private readonly colaboration: Colaboration[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.Name = name;
    this.cnpj = cnpj;
  }

  // adcionando no array novos colaboradores na varivel de "Colaboration"
  addColaboration(colaboration: Colaboration): void {
    this.colaboration.push(colaboration);
  }

  // mostrando no console todos os colaboradores.
  mostrarColaboradores(): void {
    for (const colaborador of this.colaboration) {
      console.log(colaborador);
    }
  }
}

// criando uma classe para representar a criação de um novo colaborador utilizando contrutor
export class Colaboration {
  constructor(public readonly name: string, public readonly email: string) {}
}

const Empresa1 = new Empresa('Castleit', '11.1111.1111/11');
const colaborador1 = new Colaboration('Jonatas', 'jonatas01@gmail.com');

// Adicionando na pratiova 2 colaboradores
Empresa1.addColaboration(colaborador1);
Empresa1.addColaboration({
  name: 'Edilene',
  email: 'edi@bol.com',
});

// imprimindo na tela os colaboradores
console.log(Empresa1);
Empresa1.mostrarColaboradores();
