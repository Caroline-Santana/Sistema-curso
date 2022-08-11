/*****************************************************************************************
 *Objetivo: Gerenciar as médias de uma faculdade
 * Autor:        Caroline
 * Data criação: 04/08/2022 
 * Versão:       2.0
 ******************************************************************************************/

const { exit } = require("process");

const tratarDados = function(nome1, nome2, sexo1, sexo2, nomeCurso, materia){
    
    let nomeAluno = nome1;
    let nomeProf = nome2;
    let geneAluno = sexo1;
    let genProf = sexo2;
    let curso = nomeCurso;
    let dspln = materia;
    let erro = false
    
    if( nomeAluno == '' || nomeProf == ''|| geneAluno == '' || genProf == '' || curso == '' || dspln == ''){
        
        console.log('Informe todos os dados socilictados')
        erro = true
   }
   if(erro)
        return false;
         else
         return true;
} 

const tratarNotas = function (valor1, valor2, valor3, valor4){
    let nota1 = valor1;
    let nota2 = valor2;
    let nota3 = valor3;
    let nota4 = valor4;
    let erro = false
    if( nota1 == '' || nota2 == ''|| nota3 == '' || nota4 == ''){
        console.log('Informe todas as quatro notas')
        erro = true

    } else if(parseFloat(nota1)>100 || parseFloat(nota1)<0){
     console.log('Nota 1 não é válida')
     erro = true

   } else if (parseFloat(nota2) >100 || parseFloat(nota2)< 0){
     console.log('Nota 2 não é válida')
     erro = true

   }else if (parseFloat(nota3) >100 || parseFloat(nota3)< 0){
    console.log('Nota 3 não é válida')
    erro = true

  }else if (parseFloat(nota4) >100 || parseFloat(nota4)< 0){
    console.log('Nota 4 não é válida')
    erro = true
   }
    if(erro){
        return false;
    }else{
        return true;
    }
        
}

const mediaNotas = function(valor1, valor2, valor3, valor4){
    let nota1 = valor1;
    let nota2 = valor2;
    let nota3 = valor3;
    let nota4 = valor4;
    let resultado;
      media1 = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

      return media1;
}

const situacaoAluno = function(mediaNotas){
    
    let media = parseFloat(mediaNotas);
    let resultado;
    if(media >= 70){
        let resultado = 'aprovado';
        return resultado;
    }else if( media >= 50 || media <= 69.9){
         let resultado = 'exame'; 
        return resultado;
    }else if(media<= 50){
        let resultado = 'reprovado';
        return resultado;
    }
    return resultado;
}



module.exports = {
    tratarDados,
    tratarNotas,
    mediaNotas,
    situacaoAluno,
    

}