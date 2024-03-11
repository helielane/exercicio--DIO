/*Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada*/

  class heroi{
    constructor(guerreiro){
    this.ataque = ["Espada", "Magia", "Artes maciais", "Shuriken"]
    this.guerreiro = guerreiro
  }
  atacar(){
    for (let i = 0; i < this.ataque.length; i++) {
        if (this.guerreiro === "Mago") {
          console.log(`O ${this.guerreiro} atacou usando ${this.ataque[1]}`);
          break; // Interrompe o loop quando encontra a palavra certa
        } else if (this.guerreiro === "Guerreiro") {
          console.log(`O ${this.guerreiro} atacou usando ${this.ataque[0]}`);
          break;
        } else if (this.guerreiro === "Monge") {
          console.log(`O ${this.guerreiro} atacou usando ${this.ataque[2]}`);
          break;
        } else if (this.guerreiro === "Ninja") {
          console.log(`O ${this.guerreiro} atacou usando ${this.ataque[3]}`);
          break;
        } else {
          console.log("Opção inválida, escolha um guerreiro: Mago, Guerreiro, Monge ou Ninja");
          break;
        }
      }
    }
  }
let heroiEmAcao = new heroi ("Nnja")

heroiEmAcao.atacar()