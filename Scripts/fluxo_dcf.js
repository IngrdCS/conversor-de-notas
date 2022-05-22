/*
### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas
do tipo array 
  * rendimentos []
  * despesas []
  
Depois, crie uma função que irá calcular o total
de rendimentos e despensas e irá mostrar uma mensagem
se a família está com saldo positivo ou negativo,
seguido do valor do saldo


*/


let family = {
    incomes: [2500, 3200, 250, 360.45],
    expenses: [320.43, 128.45, 176.87, 145.00]
}

// função p somar

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value
    }


    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpreses = sum(family.expenses)

    const total = calculateIncomes - calculateExpreses

    const itsOk = total >= 0

    let balanceText = "positivo"

    if (itsOk) {
        balanceText = "positivo"

    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)

}

calculateBalance()
