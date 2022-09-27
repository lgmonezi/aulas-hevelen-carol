
//Gera tabuada somente de numeros positivos
function tabuada(numero) {
	if(numero < 0) {
		console.log("Valor negativo não vale!");
		return;
	}

	n = 0;
	fator = 0;
	while(n <= 10) {
		//Escreve "a x b = c" na tela
		console.log(numero + " x " + n + " = " + (n*numero));
		
		n = n + 1;
	}
}

tabuada(7)
tabuada(128)