//Crie a const para a frase aqui
 const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS" , mas não deixe o gato sair `
 const minhaFrase = frase.replace(" verde " , " rosa " ).replace("azul" , "laranja")

 console.log(minhaFrase)

 const temVerdeLaranja = minhaFrase.includes("verde" , "laranja")
 console.log("A nova string tem verde e laranja?" , temVerdeLaranja)
 
 console.log(frase.replace("mas não deixe o gato sair", " MAS NÃO DEIXE O GATO SAIR"))