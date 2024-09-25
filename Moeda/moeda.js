let reais = parseFloat(prompt("Digite o valor em Reais a ser convertido"))
let converter = parseFloat(prompt("Digite para converter: \n 1 - euro \n 2 - dolar"))

let euro = reais * 0.16
let dolar = reais * 0.18

if(converter == 1){
    alert("Essa quantia em reais é equivalente a " + euro + "€")
}
else if(converter == 2){
    alert("Essa quantia em reais é equivalente a " + dolar + "US$")
}
else{
    alert("Digite apenas 1 ou 2.")
}