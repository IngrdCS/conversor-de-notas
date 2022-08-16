// brincando com frases no javascript 

let frase = "eu estou estudando Javascript"

// seperar a frase em um array
let array = frase.split("")
console.log(array) // [ 'e', 'u', ' ', 'e', 's', 't', 'o', ' ', 'e', 's', 't', 'u', 'd', 'a', 'n', 'd', 'o', ' ', 'J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't' ]

// inverter a frase
let arrayInvertido = array.reverse()
console.log(arrayInvertido) // [ 'J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't', ' ', 'n', 'd', 'u', 'd', 'a', 'n', ' ', 'e', 's', 't', 'u', 'd', 'o', ' ', 'e', 's', 't', 'o', ' ', 'u', 'e' ]

// juntar a frase invertida
let fraseInvertida = arrayInvertido.join("")
console.log(fraseInvertida) // tpircsavaJ odnadutse uotse ue

let juntarArray = array.join("")
console.log(juntarArray)

// contar quantas letras tem a frase
let quantidadeLetras = fraseInvertida.length
console.log(quantidadeLetras) // 29

// frase sem espaços
let fraseSemEspaco = frase.replace(/ /g, "")
console.log(fraseSemEspaco) // eustoestudandoJavascript


// encontrar palavras em frases (true, false)
console.log(frase.includes("Javascript")) // true