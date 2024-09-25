let num = parseFloat(prompt("Digite o primeiro valor"))
let num2 = parseFloat(prompt("Digite o segundo valor"))
let num3 = parseFloat(prompt("Digite o terceiro valor"))

let maior

if(num > num2 && num3){
    maior = num
}

else if (num2 > num && num3){
    maior = num2
}

else if (num3 > num && num2){
    maior = num3
}

alert("O maior valor é: " + maior)