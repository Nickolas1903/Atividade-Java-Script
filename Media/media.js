let nota = parseFloat(prompt("Qual a sua nota?"))
let peso = parseFloat(prompt("Qual o peso dessa nota?"))
let nota2 = parseFloat(prompt("Qual a outra nota?"))
let peso2 = parseFloat(prompt("Qual o outro peso dessa nota?"))
let nota3 = parseFloat(prompt("Qual a sua nota?"))
let peso3 = parseFloat(prompt("Qual o peso dessa nota?"))

let NotaResultado = (nota*peso + nota2*peso2 + nota3*peso3)
let PesoResultado = peso+peso2+peso3
let Resultado = NotaResultado/PesoResultado

alert("A média ponderada e: " + Resultado)