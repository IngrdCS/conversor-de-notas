/*
Transformar notas escolares


Crie um algoritmo que transforme as notas do sistema
numérico para o sistema de notas em caracteres tipo A B C


* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60     - F

*/


function converterNota(nota) {
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota < 60 && nota >= 0

    let notaFinal;

    if (notaA) {
        notaFinal = 'A';
    } else if (notaB) {
        notaFinal = 'B';
    } else if (notaC) {
        notaFinal = 'C';
    } else if (notaD) {
        notaFinal = 'D';
    } else if (notaF) {
        notaFinal = 'F';
    } else {
        notaFinal = 'Nota inválida';
    }

    return notaFinal;

}


// testando valores no console

console.log(converterNota(101)) // nota inválida
console.log(converterNota(-1)) // nota inválida
console.log(converterNota(10)) // nota F
console.log(converterNota(65)) // nota D
console.log(converterNota(75)) // nota C
console.log(converterNota(85)) // nota B
console.log(converterNota(95)) // nota A