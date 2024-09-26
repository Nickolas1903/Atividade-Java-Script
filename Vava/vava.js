let pessoas, lucro, lucroFinal = -1000, ingressoFinal = 0
pessoas = parseInt(prompt("Quantas pessoas estão previstas a ir:"))

for (let ingresso = 150; ingresso > 0; ingresso -= 10) {
    lucro = (ingresso * pessoas) - 1000

    if(lucro > lucroFinal) {
        lucroFinal = lucro
        ingressoFinal = ingresso
    }

    pessoas = pessoas + 50

}

alert("O maior lucro possivel será de R$" + lucroFinal + " vendendo o ingresso a R$" + ingressoFinal)

