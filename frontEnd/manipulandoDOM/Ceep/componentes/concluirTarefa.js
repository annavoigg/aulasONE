const BotaoConclui = () => { // criando componente, o padrão é a primeira letra maiúscula
    
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';

    botaoConclui.addEventListener('click', concluirTerafa);

    return botaoConclui;

}

const concluirTerafa = (evento) => {

    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
}

export default BotaoConclui;


