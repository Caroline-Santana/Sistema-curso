/*****************************************************************************************
 *Objetivo: Gerenciar as médias de uma faculdade
 * Autor:        Caroline
 * Data criação: 04/08/2022 
 * Versão:       4.0
 ******************************************************************************************/

console.log("Gerenciando médias")

const { exit } = require('process');
 //import da biblioteca para a interação com o usuario
var readline = require('readline');
const { tratarNotas, tratarDados, mediaNotas, situacaoAluno } = require('./modulos/notas.js');


// instancia do objeto para a entrada e saida de dados via prompt
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    entradaDados.question('Digite o nome do aluno: ', function(nome1){
        let aluno = nome1;
    
        entradaDados.question('Digite o nome do professor: ', function(nome2){
            let prof = nome2;

            entradaDados.question('Informe o sexo do aluno:', function(sexo1){
                let genero1 = sexo1.toUpperCase();

                entradaDados.question('Informe o sexo do professor:', function(sexo2){
                    let genero2 = sexo2.toUpperCase();

                    entradaDados.question('Digite o nome do curso:', function(nomeCurso){
                        let curso = nomeCurso;

                        entradaDados.question('Digite a disciplina:', function(materia){
                            let dspln = materia;
                            
                            entradaDados.question('Informe a primeira nota:', function(valor1){
                                let nota1 = valor1;

                                entradaDados.question('Informe a segunda nota:', function(valor2){
                                    let nota2 = valor2; 

                                    entradaDados.question('Informe a terceira nota:', function(valor3){
                                        let nota3 = valor3;
                                        
                                        entradaDados.question('Informe a quarta nota:', function(valor4){
                                            let nota4 = valor4;
                                            
                                            if(tratarDados(aluno, prof, genero1, genero2, curso, dspln)){
                                                
                                                if(tratarNotas(nota1, nota2, nota3, nota4)){
                                                     
                                                   let mediaAluno = mediaNotas(nota1, nota2, nota3, nota4)

                                                   if(situacaoAluno(mediaAluno) == 'exame'){
                                                    entradaDados.question('Informe a nota do exame:', function(exame){
                                                        let notaEx = exame;
                                                        const media2 = parseFloat(mediaAluno) + parseFloat(notaEx);
                                                         if(genero1 == 'FEMININO' && genero2 == 'MASCULINO'){
                                                            if(media2 >= 70){
                                                                console.log('A aluna ' + aluno + ' foi aprovada na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professor:' + prof + '\n' + 'Notas da aluna:' + nota1 +','+ nota2+',' + nota3 + ', ' + nota4 + ' e ' + notaEx + '\n' + 'Média Final:' + mediaAluno + '\n' + 'Média final do exame: ' + media2 );
                                                                exit();
                                                            }else{
                                                                console.log('A aluna ' + aluno + ' foi reprovada na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professor:' + prof + '\n' + 'Notas da aluna:' + nota1 +','+ nota2+',' + nota3 + ', ' + nota4 + ' e ' + notaEx + '\n' + 'Média Final:' + mediaAluno + '\n' + 'Média final do exame: ' + media2 );
                                                                exit();
                                                            }
                                                         }else if(genero1 == 'FEMININO' && genero2 == 'FEMININO'){
                                                                if(media2>= 70){
                                                                    console.log('A aluna ' + aluno + ' foi aprovada na disciplina  ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professora:' + prof + '\n' + 'Notas da aluna:' + nota1 +','+ nota2+',' + nota3 + ', ' + nota4 + ' e '+ notaEx +'\n' + 'Média Final:' + mediaAluno + '\n' + 'Média final do exame: ' + media2);
                                                                    exit();
                                                                }else{
                                                                    console.log('A aluna ' + aluno + ' foi reprovada na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professora:' + prof + '\n' + 'Notas da aluna:' + nota1 +','+ nota2+',' + nota3 + ', ' + nota4 + ' e ' + notaEx + '\n' + 'Média Final:' + mediaAluno + '\n' + 'Média final do exame: ' + media2 );
                                                                exit();
                                                                }   
                                                         }else if(genero1 == 'MASCULINO' && genero2 == 'FEMININO'){
                                                            if(media2>= 70){
                                                                console.log('O aluno ' + aluno + ' foi aprovado na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professora:' + prof + '\n' + 'Notas do aluno:' + nota1 +','+ nota2+',' + nota3 + ', ' + nota4 + ' e '+ notaEx + '\n' + 'Média Final:' + mediaAluno + '\n' + 'Média final do exame: ' + media2);
                                                                exit();
                                                            }else{
                                                                console.log('O aluno ' + aluno + ' foi reprovada na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professora:' + prof + '\n' + 'Notas da aluno:' + nota1 +','+ nota2+',' + nota3 + ', ' + nota4 + ' e ' + notaEx + '\n' + 'Média Final:' + mediaAluno + '\n' + 'Média final do exame: ' + media2 );
                                                                exit();
                                                            }       
                                                         }else if(genero1 == 'MASCULINO' && genero2 == 'MASCULINO'){
                                                            if(media2>=70){
                                                                console.log('O aluno ' + aluno + ' foi aprovado na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professor:' + prof + '\n' + 'Notas do aluno:' + nota1 +','+ nota2+',' + nota3 + ', ' + nota4 +' e '+ notaEx+ '\n' + 'Média Final:' + mediaAluno + '\n' + 'Média final do exame: ' + media2);
                                                                exit();
                                                            }else{
                                                                console.log('O aluno ' + aluno + ' foi reprovado na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professor:' + prof + '\n' + 'Notas do aluno:' + nota1 +','+ nota2+',' + nota3 + ', ' + nota4 + ' e ' + notaEx + '\n' + 'Média Final:' + mediaAluno + '\n' + 'Média final do exame: ' + media2 );
                                                                exit();
                                                            }
                                                         }
                                                    });
                                                    }else{
                                                        if(situacaoAluno(mediaAluno) == 'aprovado'){
                                                            if(genero1 == 'FEMININO' && genero2 == 'MASCULINO'){
                                                               console.log('A aluna ' + aluno + ' foi aprovada na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professor:' + prof + '\n' + 'Notas da aluna:' + nota1 +','+ nota2+',' + nota3 + ' e ' + nota4 + '\n' + 'Média Final:' + mediaAluno);
                                                               exit();
                                                            } else if(genero1 == 'FEMININO' && genero2 == 'FEMININO'){
                                                                    console.log('A aluna ' + aluno + ' foi aprovada na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professora:' + prof + '\n' + 'Notas da aluna:' + nota1 +','+ nota2+',' + nota3 + ' e ' + nota4 + '\n' + 'Média Final:' + mediaAluno);
                                                                    exit();
                                                            }else if(genero1 == 'MASCULINO' && genero2 == 'FEMININO'){
                                                                    console.log('O aluno ' + aluno + ' foi aprovado na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professora:' + prof + '\n' + 'Notas do aluno:' + nota1 +','+ nota2+',' + nota3 + ' e ' + nota4 + '\n' + 'Média Final:' + mediaAluno);
                                                                    exit();
                                                            }else if(genero1 == 'MASCULINO' && genero2 == 'MASCULINO'){
                                                                    console.log('O aluno ' + aluno + ' foi aprovado na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professor:' + prof + '\n' + 'Notas do aluno:' + nota1 +','+ nota2+',' + nota3 + ' e ' + nota4 + '\n' + 'Média Final:' + mediaAluno);
                                                                    exit();
                                                            }
                                                        }else{
                                                            if(genero1 == 'FEMININO' && genero2 == 'MASCULINO'){
                                                                console.log('A aluna ' + aluno + ' foi reprovado na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professor:' + prof + '\n' + 'Notas da aluna:' + nota1 +','+ nota2+',' + nota3 + ' e ' + nota4 + '\n' + 'Média Final:' + mediaAluno);
                                                                exit();
                                                             } else if(genero1 == 'FEMININO' && genero2 == 'FEMININO'){
                                                                     console.log('A aluna ' + aluno + ' foi reprovado na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professora:' + prof + '\n' + 'Notas da aluna:' + nota1 +','+ nota2+',' + nota3 + ' e ' + nota4 + '\n' + 'Média Final:' + mediaAluno);
                                                                     exit();
                                                             }else if(genero1 == 'MASCULINO' && genero2 == 'FEMININO'){
                                                                     console.log('O aluno ' + aluno + ' foi reprovado na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professora:' + prof + '\n' + 'Notas do aluno:' + nota1 +','+ nota2+',' + nota3 + ' e ' + nota4 + '\n' + 'Média Final:' + mediaAluno);
                                                                     exit();
                                                             }else if(genero1 == 'MASCULINO' && genero2 == 'MASCULINO'){
                                                                     console.log('O aluno ' + aluno + ' foi reprovado na disciplina ' + dspln + '. \n' + 'Curso:' + curso + '\n' + 'Professor:' + prof + '\n' + 'Notas do aluno:' + nota1 +','+ nota2+',' + nota3 + ' e ' + nota4 + '\n' + 'Média Final:' + mediaAluno);
                                                                     exit();
                                                             }
                                                        }
                                                    }
                                                }else{
                                                    console.log('Você não informou as notas corretamente')
                                                }
                                            }else{
                                                console.log('Não foi possivel continuar')
                                                exit()
                                            }
                                            
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });  
    });
    