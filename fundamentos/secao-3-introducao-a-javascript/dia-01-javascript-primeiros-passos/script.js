//
//Questão 01
//
console.log("===============================================")
console.log("Questão 01")
console.log("")
    const num1 = 10;
    const num2 = 8;
    const num3 = 3;

    // adição
    console.log("adição: " + (num1 + num2))

    //subtração
    console.log("subtração: "+ (num1 - num2))

    //multiplicação
    console.log("multiplicação: "+ (num1 * num2)) 

    //divisão
    console.log("divisão: "+ (num1 / num2))

    //modulo
    console.log("modulo: "+ (num1 % num2))

    //exponenciação
    console.log("exponenciação: "+ (num1**num2)) 
//
//Questão 02
//
console.log("")
console.log("===============================================")
console.log("Questão 02")
console.log("")
    if(num1 > num2){
        console.log("O primeiro numero é maior")
    } else {
        console.log("O segundo numero é maior")
    }
//
//Questão 03
//
console.log("")
console.log("===============================================")
console.log("Questão 03")
console.log("")
    if(num1 > num2 && num1 > num3){
        console.log("O primeiro numero é maior")
    } else if(num2 > num1 && num2 > num3){
        console.log("O segundo numero é maior")
    } else{
        console.log("O terceiro numero é maior")
    }
//
//Questão 04
//
console.log("")
console.log("===============================================")
console.log("Questão 04")
console.log("")
    let positivo = 1;
    let negativo = -1;
    let zero = 0;
    let num = zero;

    if(num > 0){
        console.log("numero positivo")
    } else if(num < 0){
        console.log("numero negativo")
    } else {
        console.log("esse numero é zero")
    }
//
//Questão 05 :rocket:
//
console.log("")
console.log("===============================================")
console.log("Questão 05")
console.log("")
    let angulo1 = 60;
    let angulo2 = 30;
    let angulo3 = 50;
    let angulointerno = 180;

    if(angulo1 + angulo2 + angulo3 === angulointerno){
        console.log("é um triangulo? "+true)
    } else {
        console.log("é um triangulo? "+false)
    }
//
//Questão 06
//
console.log("")
console.log("===============================================")
console.log("Questão 06")
console.log("")
    let peca = 'torre';

    switch(peca){
        case "peao":
            console.log("peao: 1 casa a frente(elimina na diagonal)")
            break;

        case "torre":
            console.log("torre: Anda em linha reta")
            break;

        case "cavalo":
            console.log("cavalo: Anda em L")
            break;

        case "bispo":
            console.log("bispo: Anda na Diagonal")
            break;

        case "rainha":
            console.log("rainha: Todas as direções")
            break;

        case "rei":
            console.log("rei: 1 casa para qualquer lado ou diagonal")
            break;
    }
//
//Questão 07 enunciado incompleto
//
console.log("")
console.log("===============================================")
console.log("Questão 07 - enunciado incompleto")
//
//Questão 08 & 09
//
console.log("")
console.log("===============================================")
console.log("Questão 08")
console.log("")
    let numero1 = 1;
    let numero2 = 7;
    let numero3 = 5;

    if((numero1 % 2) === 1 && (numero2 % 2) === 1 && (numero3 % 2) === 1){
        console.log(false + " não tem par por aqui")
    } else {
        console.log(true + " tem par por aqui")
    }
console.log("")
console.log("===============================================")
console.log("Questão 09")
console.log("")
    if((numero1 % 2) === 0 && (numero2 % 2) === 0 && (numero3 % 2) === 0){
        console.log(false + " não tem impar por aqui")
    } else {
        console.log(true + " tem impar por aqui")
    }
//
//Questão 10
//
console.log("")
console.log("===============================================")
console.log("Questão 10")
console.log("")
    let valorDeCompra = 10;
    let valorDeVenda = 15;
    let qntdDeVendas = 1000;

    if(valorDeVenda > 0){
        let lucro = (valorDeVenda  - valorDeCompra) * qntdDeVendas
        console.log("Lucro com "+qntdDeVendas+" vendas: "+ lucro)
    } else {
        console.log("não teve vendas")
    }

//
//Questão 11
//
console.log("")
console.log("===============================================")
console.log("Questão 11")
console.log("")
    let salario = 3000.00;
    console.log("Salario Bruto: "+ salario)

    if(salario<=1556.94){
        salario = salario - ((salario*8)/100)
    } else if(salario>=1556.95 && salario<=2594.92){
        salario = salario - ((salario*9)/100)
    } else if(salario>=2594.93 && salario<=5189.82){
        salario = salario - ((salario*11)/100)
    } else{
        salario = salario - 570.88
    }

    if(salario<=1903.98){
        console.log("Insento de imposto de renda")
    } else if(salario>=1903.99 && salario <= 2826.65){
        salario = salario - (((salario*7.5)/100) - 142.80)
    }  else if(salario>=2826.66 && salario <= 3751.05){
        salario = salario - (((salario*15)/100) - 354.80)
    } else if(salario>=3751.06 && salario <= 4664.68){
        salario = salario - (((salario*22.5)/100) - 636.13)
    } else{
        salario = salario - (((salario*27.5)/100) - 869.36)
    }
    console.log("Salario Liquido: "+ salario)