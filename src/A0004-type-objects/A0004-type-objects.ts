const objA: {
  readonly key1: string; // 'readonly' permite que não poderemos alterar o valor
  key2: string;
  key3?: string; // '?' permite que o objeto possa ser um valor opcional
  [key: string]: unknown; // permite que qualquer valor que seja criado possa ser colocado
} = {
  key1: 'sdf6456',
  key2: 'sdf6423',
  key3: 'asdfg12',
};
