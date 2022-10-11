nome = "Hevelen"
horaAtual = new Date().getHours();

if(horaAtual < 12) {
	console.log("Bom dia " + nome);
} else if(horaAtual < 18) {
	console.log("Boa tarde " + nome);
} else {
	console.log("Boa noite " + nome)
}


//Versão melhorada
mensagem = "";
if(horaAtual < 12) {
	mensagem = "Bom dia ";
} else if(horaAtual < 18) {
	mensagem = "Boa tarde ";
} else {
	mensagem = "Boa noite "
}
console.log(mensagem + nome);