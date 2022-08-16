// brincando com array no javascript

let array = [
    "Javascript",
    "PHP",
    "Python",
]

console.log(array) // [ 'Javascript', 'PHP', 'Python' ]

// Adicionar elemento no final do array
array.push("C#")
console.log(array) // [ 'Javascript', 'PHP', 'Python', 'C#' ]

// Adicionar elemento no inicio do array
array.unshift("CSS")
array.unshift("HTML")
console.log(array) // HTML, CSS, JAVASCRIPT, PHP, Python, C#


// deixar somente html, css, e javascript

array.pop() // remove o ultimo elemento do array (C#)
    // no caso de remover o primeiro usar .shift()
console.log(array)
    // HTML, CSS, JAVASCRIPT, PHP, Python

array.pop() //remove o python
array.pop() //remove o php

// concluido
console.log(array) // HTML, CSS, JAVASCRIPT


// pegar somente alguna elementos do array
console.log(array.slice(0, 2)) // HTML, CSS
console.log(array.slice(1, 3)) // CSS, JAVASCRIPT
console.log(array.slice(2, 3)) // JAVASCRIPT


// remover elementos do array
array.splice(0, 1) // remove o html
console.log(array) // CSS, JAVASCRIPT


// adicionar html novamente no array
array.unshift("HTML")
console.log(array) // HTML, CSS, JAVASCRIPT


// procurar uma posição no array // 2
console.log(array.indexOf("Javascript")) // 2