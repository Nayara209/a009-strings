const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
//Removendo espaços
console.log(minhaString.trim())

//Quantidade de caracteres
const novaString = "Eu não sou superticioso, mas sou um pouco ________."
const tamanho2 = minhaString.length
const tamanho = novaString.length
console.log(tamanho)
console.log(tamanho2)
const novaFrase = minhaString.replace(" ________.", " sticioso ")

console.log(novaFrase)