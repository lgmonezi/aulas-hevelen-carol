//Um array é uma espécie de coleção. Este tipo de variável pode guardar muitos valores
nomes = []; 
console.log("Tamanho do array nomes: " + nomes.length);

function printDiaSemana() {
	diaSemana = new Date().getDay(); //Retorna o dia da semana. 0 = Domingo, 6 = Sábado.
	if(diaSemana == 0) {
		console.log("Domingo")
	} else if(diaSemana == 1) {
		console.log("Segunda-Feira")
	} else if(diaSemana == 2) {
		console.log("Terça-Feira")
	} else if(diaSemana == 3) {
		console.log("Quarta-Feira")
	} else if(diaSemana == 4) {
		console.log("Quinta-Feira")
	} else if(diaSemana == 5) {
		console.log("Sexta-Feira")
	} else {
		console.log("Sábado")
	}
}

function printDiaSemanaFormaCerta() {
	hoje = new Date().getDay();
	diasSemana = [
		"Domingo",
		"Segunda-Feira",
		"Terça-Feira",
		"Quarta-Feira",
		"Quinta-Feira",
		"Sexta-Feira",
		"Sábado"
	];
	console.log(diasSemana[hoje])
}

function printDiasSemanas() {
	diasSemana = [
		"Domingo",
		"Segunda-Feira",
		"Terça-Feira",
		"Quarta-Feira",
		"Quinta-Feira",
		"Sexta-Feira",
		"Sábado"
	];
	i = 0;
	while(i < diasSemana.length) {
		console.log(diasSemana[i])
		i = i + 1;
	}
}

printDiasSemanas()