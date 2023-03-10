// Array<T> - T[]
function mutiplecateArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatArgs(...args: Array<string>): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = mutiplecateArgs(1, 2, 3);
const cocatARRAY = concatArgs('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');
console.log(result, cocatARRAY);
