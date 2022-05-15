/*Sempre pensar primeiro na logica antes e começar a codar*/
/* OBJETIVO 1
    - Mudar de personagem quando passar o mouse em cima
    de outro personagem
    - Coloca a classe selecionado no personagem que 
    passamos o mouse em cima para adicionar animação
    - Retirar a classe selecionado do personagem que 
    está selecionado

OBJETIVO 2
    - Trocar a imagem e nome do personagem grade
    - Alterar nome e imagem do jogador 1
*/

/*OBJETIVO 1*/
/*Evento de passar o mouse em cima do elemento*/
/* document: pegar qualquer item dentro do codigo HTML*/
/*addEventListener: adiciona um evento ao id selecionado*/
/*querySelectorAll: seleciona todos os elementos que tiver
a mesma classe*/
/*forEach: para cada elemento selecionado ele faz algo*/

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {

    const idSelecionado = personagem.attributes.id.value;

    if(idSelecionado === 'Ken') return;

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");

    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.gif`;

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');
    
    nomeJogador1.innerHTML = nomeSelecionado;
  });
});
