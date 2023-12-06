// Função para inserir roteiro
function inserirRoteiro() {
    // Obter os valores do formulário
    var destino = document.getElementById('destino').value;
    var duracao = document.getElementById('duracao').value;
    var descricao = document.getElementById('descricao').value;
    var preco = document.getElementById('preco').value;
    var imagem = document.getElementById('imagem').value;

    // Criar um novo elemento roteiro-viagens
    var novoRoteiro = document.createElement('div');
    novoRoteiro.classList.add('roteiros-viagens');

    // Adicionar conteúdo ao roteiro-viagens
    novoRoteiro.innerHTML = `
        <img src="${imagem}" class="postal">
        <div class="roteiro-destino">${destino}</div>
        <ul class="roteiro-incluso">
            <li>Duração: ${duracao}</li>
            <li>${descricao}</li>
        </ul>
        <div class="roteiro-preco">${preco}</div>
    `;

    // Adicionar o novo roteiro ao container-destinos
    var containerDestinos = document.querySelector('.container-destinos');
    containerDestinos.appendChild(novoRoteiro);

    // Adicionar a linha horizontal
    var hr = document.createElement('hr');
    containerDestinos.appendChild(hr);
}

// Função para comprar roteiro
function comprarRoteiro(botao) {
    // Encontrar o roteiro pai do botão clicado
    var roteiro = botao.closest('.roteiros-viagens');

    // Capturar informações do pacote turístico
    var destino = roteiro.querySelector('.roteiro-destino').textContent;
    var duracao = roteiro.querySelector('.roteiro-incluso li:nth-child(2)').textContent;
    var preco = roteiro.querySelector('.roteiro-preco').textContent;

    // Criar objeto JSON com as informações capturadas
    var pacoteTuristico = {
        destino: destino,
        duracao: duracao,
        preco: preco
    };

    // Imprimir objeto no console
    console.log(pacoteTuristico);
}
