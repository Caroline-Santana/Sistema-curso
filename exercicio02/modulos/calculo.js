/*****************************************************************************************
 *Objetivo: Gerenciar os valores dado pelo usuário
 * Autor:        Caroline
 * Data criação: 04/08/2022 
 * Versão:       1.0
 ******************************************************************************************/

const { exit } = require("process");

const tratarNum = function(inicio, fim,contInicial, contFinal){
    let comeco = inicio;
    let final = fim;
    let cont1 = contInicial;
    let cont2 = contFinal;
    let erro = false;
    

    if(comeco == ''|| final == '' || cont1 == ''|| cont2 == ''){
        console.log('Informe todos os números');
        erro = true;
    } else if(comeco <2 || comeco >100){
         console.log('Este não é um número válido')
        erro  = true;
        exit();
    }else if(final <2 || final > 100){
         console.log('Este não é um número válido')
        erro  = true;
        exit();
    }else if(cont1 < 1 || cont1 > 50){
         console.log('Este não é um número válido')
        erro  = true;
        exit();
    }else if(cont2 < 1 || cont2 > 50){
         console.log('Este não é um número válido')
        erro  = true;
        exit();
    }
    if(erro)
        return true;
         else
         return false;
}

const calculoTabu = function (inicio,fim,contInicial, contFinal){
    let comeco = parseInt(inicio);
    let final = parseInt(fim);
    let contIni = parseInt(contInicial);
    let contFin = parseInt (contFinal);
    let resultado;

    while(comeco <= final ){
        while(contIni <= contFin){
            
            resultado = comeco * contIni;
            console.log (comeco + ' x ' + contIni + ' = ' + resultado + '\n');
            //cont = cont + 1; 
            contIni += 1;
            //cont++;
        }
        contIni = parseInt(contInicial);
        comeco += 1;
    }
    
}

module.exports = {
 tratarNum,
 calculoTabu
}