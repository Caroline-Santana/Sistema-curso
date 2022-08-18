/*****************************************************************************************
 *Objetivo: Gerenciar os númeroa forncecidos pelos usuários
 * Autor:        Caroline
 * Data criação: 15/08/2022 
 * Versão:       1.0
 ******************************************************************************************/

 const { exit } = require("process");

const tratamentoDados = function(numIn, numFin){
     let inicio = parseInt(numIn);
     let fim = parseInt(numFin);
     let erro = false;
    
    if(numIn == '' || numFin == ''){
         console.log('Informe todos os números');
         erro = true;
    } else if(inicio < 0 || inicio > 500){
        console.log('Informe um número maior que 0 e menor que 500 ')
        erro  = true;

    }else if(fim < 100 || fim > 1000){
          console.log('Informe um número maior que 100 e menor que 1000')
         erro = true;
    }else if(inicio > fim){
        console.log('É necessário que o primeiro valor seja menor que o último')
        erro = true;
    }else if(inicio == fim){
        console.log('Por favor digite números diferentes')
        erro = true;
    }
    if(erro){
        return true;
    }else{
      return false   
    }
        
}
const parImpar = function(numIn, numFin){
    let inicial = numIn;
    let final = numFin;
    let resultado;

    while(inicial <= final){
          if(inicial / 2 == 0){
            console.log(inicial)
          }

    }
}
module.exports = {
    tratamentoDados,
}