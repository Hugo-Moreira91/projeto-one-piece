// pegando todos os botões através de um seletor em comum - no caso, todos possuem uma mesma classe .botao
const botoes = document.querySelectorAll('.botao');

// pegando todos os personagens através de um seletor em comum - no caso, todos possuem uma mesma classe .personagem
const personagens = document.querySelectorAll('.personagem'); 

// acessando cada botão da lista criada acima através do método forEach
botoes.forEach((botao, indice) => {
    // adicionando o método de escuta do 'click' em cada botão da lista botoes
    botao.addEventListener('click', () => {

        desselecionarBotao();
        desselecionarPersonagem();
        
        botao.classList.add('selecionado');
        personagens[indice].classList.add('selecionado');
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
