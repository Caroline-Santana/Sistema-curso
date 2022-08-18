/******************************************************************************************************
 * Objetivo: Calcular a quantidade de números impares e pares e listá-los 
 * Data: 15/08/22
 * Autor: Caroline A.
 * Versão: 2.0
 ******************************************************************************************************/

 console.log("Listagem de números")

const { exit } = require('process');
 //import da biblioteca para a interação com o usuario
var readline = require('readline');
const {tratamentoDados} = require('./modulo/lista.js');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Informe o número inicial:', function(numIn){
    let inicio = numIn;
    entradaDados.question('Informe o número final:', function(numFin){
        let final = numFin;
        if(tratamentoDados(inicio , final) == true){
            console.log('Não foi possivel continuar')
        }else{
            console.log('Escreveu tudo certinho princesa')
        }
        
    });
});