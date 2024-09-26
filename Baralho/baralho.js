let naipe, num, Final
let num2 = parseFloat(prompt("Quantas cartas você deseja tirar do Baralho"))

for (let rep = 0; rep < num2; rep++) {
    naipe = parseInt(Math.random() * 4 + 1)
    switch (naipe) {
        case 1:
            Final = "Copa"
            break;
    
        case 2:
            Final = "Ouro"
            break;

        case 3:
            Final = "Espada"
            break;

        case 4:
            Final = "Paus"
            break; 
           
        default:
            break;
    }
    num = parseInt(Math.random() * 10 + 1)

    console.log("A sua carta é "+ num + " de " + Final)
}