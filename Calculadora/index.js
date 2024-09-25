let opcao = parseFloat(prompt("1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão"));

let num = parseFloat(prompt("Digite o primeiro valor: "));
let num2 = parseFloat(prompt("Digite o segundo valor: "));

switch(opcao) {
    case 1 :
        resultado = num + num2;
        break;

    case 2 :
       resultado = num - num2;
       break;

    case 3 :
        resultado = num * num2;
        break;

     case 4 :
        resultado = num / num2;
        break;

}

alert("O resultado é " + resultado);