// never é qunado nunca retorna nada

export function criaErro(): void {
  throw new Error('Erro qualquer');
}

criaErro();
