/*
 2.Elabore um algoritimo que receba um numero (1-7) e devolva o dia da semana correspondente 
 */

const rs = require('readline-sync')

const diaDaSemana = (rs.questionInt('Digite um numero entre 1-7 : '))

switch (diaDaSemana) {

    case 1:
    console.log("Hoje é Domingo ");
        break;

    case 2:
        console.log("Hoje é segunda ");
        break;
    case 3:
        console.log("Hoje é terça-feira ");
        break;
    case 4:
        console.log("Hoje é quarta-feira ");
        break;
    case 5:
        console.log("Hoje é quinta-feira ");
        break;
    case 6:
        console.log("Hoje é sexta-feira ");
        break;
    case 7:
        console.log("Hoje é Sabado ");
        break;

    default: 
    console.log("Numero inalido ");
        break;
}