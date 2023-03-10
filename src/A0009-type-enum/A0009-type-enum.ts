/*
    Em typescript, um 'enum' (abreviação de enumeração) é um tipo de dado que consiste em um conjunto de valores nomeados.
    Ele nos permite declarar um conjunto fixo de valores e usá-los como uma lista de opções para escolher.
*/

enum Color {
  RED = '#FF0000', // 0
  GREEN = '#00FF00', // 1
  BLUE = '#0000FF', // 2
}

console.log(Color);

let myColor: Color = Color.RED;
console.log(myColor);
/*
    Aqui atribuímos a variável myColor com o valor Color.RED, ou seja, 0. Podemos acessar um valor específico do enum
    diretamente, como Color.BLUE.
*/

/*
    Nesse caso, cada cor tem um valor hexadecimal atribuído objetivamente.

    Podemos usar enums em situações onde precisamos de um conjunto finito de valores, como para representar dias da semana,
    direções geográficas, tamanhos de roupas, entre outros. Eles tornam o nosso código mais legível, expressivo e fácil de
    manter ao consertar possíveis erros de escrita de strings.
*/

/*
    Não, enum não serve para salvar.

    Ele é um recurso da linguagem TypeScript que permite definir um conjunto de valores nomeados, tornando mais fácil trabalhar
    com esses valores em diferentes partes do programa.

    Por exemplo, considere o seguinte código que define um enum para representar os dias da semana:
*/

enum DiasDaSemana {
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  Domingo,
}

/*
    Neste exemplo, criamos um enum chamado DiasDaSemana que tem sete valores: Segunda, Terca, Quarta, Quinta, Sexta, Sabado e Domingo.
    Cada um desses valores é um membro do enum e é automaticamente atribuído a um número inteiro sequencial.

    Podemos usar esse enum em diferentes partes do nosso programa para referenciar os dias da semana de forma mais legível e intuitiva.
    Por exemplo:
*/

const ultimoDiaUtil = DiasDaSemana.Sexta;
console.log(`O último dia útil da semana é ${ultimoDiaUtil}.`);

// Ao executar esse código, veremos a seguinte saída:

//O último dia útil da semana é 4.

/*
    Portanto, enum é uma ferramenta útil para criar um conjunto finito de valores
    nomeados que tornam o código mais legível e fácil de entender.
*/

// podemos acessar os valores pelos 'index'

console.log(DiasDaSemana[0]); // acessando o valor do indice 0 do sequencial de um array de enum
