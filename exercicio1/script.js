
// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

const sacolao = []

const banana = {
    nome: "Banana prata",
    preco: 5.99,
    disponibilidade: true
}
const maca = {
    nome: "Maçã gala",
    preco: 9.99,
    disponibilidade: false
}
const manga ={
    nome: "Manga rosa",
    preco: 12.99,
    disponibilidade: true
}
// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(banana, maca, manga)

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao)