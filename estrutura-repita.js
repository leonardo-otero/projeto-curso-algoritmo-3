/*
Var
// Seção de Declarações das variáveis 
sairLoop: caractere,
valor1, valor2: real,

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    repita
      escreva ("Digite o primeiro valor:")
      leia (valor1)
      escreva ("Digite o segundo valor:")
      leia (valor2)
      escreval ("Resultado", valor1 + valor2)
      escreval ("Se deseja sair? S/N")
      leia (sairLoop)
    ate sairLoop <> "N"
    */
    function acaoBotao() {
        var sairLoop, valor01, valor02
        do {
            valor1 = prompt("Digite o primeiro valor:")
            valor2 = prompt ("Digite o segundo valor:")
            Document.getElementById("paragrafo").innerText = "Resultado:" + (parseInt (valor01) + parseInt (valor02) )
           sairLooop = prompt("Deseja sair? S/N")
           
    } while(sairLoop == "N")
        
}

