/******************************************************************************************************
 * Objetivo: Calcular tabuada com inicio e fim determinado pelo usuario
 * Data: 11/08/22
 * Autor: Caroline A.
 * Versão: 2.0
 ******************************************************************************************************/

 console.log("Gerenciando médias")

const { exit } = require('process');
 //import da biblioteca para a interação com o usuario
var readline = require('readline');
const { tratarNum, calculoTabu} = require('./modulos/calculo.js');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDados.question('Digite a tabuada inicial (O valor precisa estar entre 2 e 100): ', function(inicio){
    let valorInicio = inicio;

    entradaDados.question('Digite a tabuada final (O valor precisa estar entre 2 e 100): ', function(fim){
        let valorFinal = fim;

        entradaDados.question('Digite o contador inicial: (O valor precisa estar entre 1 e 50):', function(contInicial){
            let contador1 = contInicial;

            entradaDados.question('Digite o contador final: (O valor precisa estar entre 1 e 50):', function(contFinal){
                let contador2 = contFinal;
   
              if(tratarNum(inicio,fim,contInicial, contFinal) == true){
                  console.log('Não é possivel continuar')
               }else{
                calculoTabu(inicio,fim,contInicial, contFinal);
               }
            });
        });
    });
    
});
 