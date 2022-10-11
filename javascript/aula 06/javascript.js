/**
 * If (Se, em inglês), executa o bloco de código se a condição dentro os parênteses
 * for avaliada como verdadeiro (true)
 */
variavel = true;
if(variavel) {
	console.log("Esta linha será executada");
}

variavel = false;
if(variavel) {
	console.log("Essa linha não será executada");
}

num1 = 15
num2 = 15
soma = num1 + num2
if(soma == 30) {
	console.log("Vai executar, e o valor é " + soma);
}

/**
 * O operador else (se não) do if pode ser usado quando
 * desejamos executar um código alternativo,
 * caso a condição do if seja avaliada como false
 */
variavel = false;
if(variavel) {
	console.log("Essa linha não será executada")
} else {
	console.log("Esta linha será executada")
}

/**
 * O operador 'typeof' retorna uma string (valor de texto) com o tipo da variavel:
 */
variavel = "Avião"
console.log(typeof variavel) //string

variavel = 100
console.log(typeof variavel) //number

variavel = "100"
console.log(typeof variavel) //string

variavel = true
console.log(typeof variavel) //boolean

variavel = false
console.log(typeof variavel) //boolean

variavel = "true"
console.log(typeof variavel) //string

variavel = "false"
console.log(typeof variavel) //string


/**
 * Lembrando que tudo que gera um valor é uma expressão. Então o resultado de typeof
 * pode ser atribuído a variaveis
 */
variavel = 15
tipoVariavel = typeof variavel
console.log(tipoVariavel) //number