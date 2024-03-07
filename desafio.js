/*Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/


let pontuacaoJogador = calcularSaldo(200, 11)
let nivelJogador = calcularNivel(pontuacaoJogador)

function calcularSaldo(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
       return saldo;
            
  }
  
function calcularNivel (pontuacaoJogador){
    if(pontuacaoJogador < 10){
     return pontuacaoJogador = "Ferro"
    }
        else if ((pontuacaoJogador => 11) && (pontuacaoJogador <= 20))
        return pontuacaoJogador = "Bronze"
            else if ((pontuacaoJogador => 21) && (pontuacaoJogador <= 50))
            return pontuacaoJogador = "Prata"
                else if ((pontuacaoJogador => 51) && (pontuacaoJogador <= 80))
                return pontuacaoJogador = "Ouro"
                    else if ((pontuacaoJogador => 81) && (pontuacaoJogador <= 90))
                    return pontuacaoJogador = "Diamante"
                        else if ((pontuacaoJogador => 91) && (pontuacaoJogador <= 100))
                        return pontuacaoJogador = "Lendário"
                            else if (pontuacaoJogador => 101 )
                            return pontuacaoJogador = "Imortal"
}
if(pontuacaoJogador < 0){
    let saldoNegativo = Math.abs(pontuacaoJogador)
    console.log("O Herói tem de saldo de " + saldoNegativo + " derrotas e está no nível de " + nivelJogador)    
}
    else if (pontuacaoJogador > 0) {
        console.log("O Herói tem de saldo de " + pontuacaoJogador + " vitórias e está no nível de " + nivelJogador)
    }
