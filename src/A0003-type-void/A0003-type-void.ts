function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  name: 'Jonatas',
  lastName: 'Silva',

  showName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

semRetorno('luiz', 'Jonatas', 'Silva');
pessoa.showName();

export { pessoa };
