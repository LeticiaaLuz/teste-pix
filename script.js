const botaoSim = document.querySelector('.botaoSim');
const botaoNao = document.querySelector('.botaoNao');
const content = document.querySelector('.content');

botaoNao.addEventListener('mouseover', function() {
    var contentRect = content.getBoundingClientRect();
    var botaoRect = botaoNao.getBoundingClientRect();

    var vertical = Math.random() * (contentRect.height - botaoRect.height);
    var horizontal = Math.random() * (contentRect.width - botaoRect.width);

    botaoNao.style.position = 'absolute';
    botaoNao.style.top = vertical + 'px';
    botaoNao.style.left = horizontal + 'px';
});