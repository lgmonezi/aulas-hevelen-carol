//Funcoes podem retornar valores

function convertFahrCelsius(fahr) {
	celsius = 5 * (fahr - 32) / 9
	return celsius;
}

variavel = convertFahrCelsius(43);
console.log("43 Fahr em Celsius é " + variavel)