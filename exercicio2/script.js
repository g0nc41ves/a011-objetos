const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

//a) Qual o código para imprimir o nome do **primeiro** ator/atriz?
console.log("Nome do primeiro ator: ", filme.elenco[0])

//b) Qual o código para imprimir o nome do **último** ator/atriz?
console.log("Nome do último ator: ", filme.elenco[3])

//c) Qual o código para exibir o array com **todas** as transmissões de hoje?
console.log("Todas as transmissões de hoje: ", filme.transmissoesHoje)

//d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?
console.log("Horário de transmissão Canal Brasil: ", filme.transmissoesHoje[1].horario)