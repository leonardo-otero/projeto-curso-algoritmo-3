/*
   passou := falso
   escreval ("Digite o nome do aluno")
   leia (nome)
   escreval ("Digite a nota1 do aluno")
   leia (nota1)
   escreval ("Digite a nota2 do aluno")
   leia (nota2)
   media := (nota1 + nota2) / 2
   
    se media >=50   entao
    passou := verdadeiro
    fimse
    se (passou) && (media >= 50 || media <= 70)
    entao

    // (passou) disjuntiva
    // !passou (diferente de passou)
    // || (e) (disjumção)
  escreval ("Aprovado" nome)
       senao
   escreval ("Reprovado", nome)
   fimse

*/
var nome, nota1, nota2, passou;

passou = false;
nome = prompt ("Digite o nome do aluno")
nota1 = prompt ("Digite a nota1 do aluno")
nota2 = prompt ("Digite a nota2 do aluno")
media = ( parseint (nota1) + parseint (nota2)) / 2

if (" media >= 50")
    passou = true
 if ( passou  && ( media >=70 && <=90 ))  
     alert ("Aprovado", + nome)
  else 
    alert ("Reprovado!" + nome)