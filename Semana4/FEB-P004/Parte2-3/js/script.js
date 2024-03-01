function inserirRoteiro() {
    // Obter os valores do formulário
    var nome = document.getElementById('nome').value;
    var destino = document.getElementById('destino').value;
    var duracao = document.getElementById('duracao').value;
    var url = document.getElementById('url').value;
    var observacoes = document.getElementById('observacoes').value;

    // Validar se todos os campos foram preenchidos
    if (!nome || !destino || !duracao || !url || !observacoes) {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    // Validar se foi selecionado um destino
    if (!destino) {
        alert('Por favor, selecione um destino válido.');
        return;
    }

    // Validar se o número de dias é positivo
    if (duracao < 0) {
        alert('O número de dias não pode ser negativo.');
        return;
    }

    // Calcular o preço com base no número de diárias (considerando 500 como preço por diária)
    var preco = duracao * 500;

    // Criar um novo elemento div para o roteiro
    var novoRoteiro = document.createElement('div');
    novoRoteiro.className = 'roteiros-viagens';

    // Adicionar estilos diretamente ao elemento
    novoRoteiro.style.width = '200px';
    novoRoteiro.style.margin = '20px auto';
    novoRoteiro.style.padding = '30px';
    novoRoteiro.style.border = '1px solid #ccc';
    novoRoteiro.style.borderRadius = '12px';
    novoRoteiro.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.1)';
    novoRoteiro.style.display = 'flex';
    novoRoteiro.style.flexDirection = 'column';
    novoRoteiro.style.alignItems = 'center';
    novoRoteiro.style.textAlign = 'center';

    // Criar a estrutura HTML do roteiro
    var estruturaHTML = `
    <div style="overflow: hidden; border-radius: 15px; margin-bottom: 15px;">
        <img src="${url}" class="postal" style="width: 100%; border-radius: 15px;">
    </div>
    <div class="roteiro-destino" style="font-size: 1.8em; font-weight: bold; margin-bottom: 10px; color: purple;">${destino}</div>
    <ul class="roteiro-incluso" style="margin: 15px 0; padding: 0; list-style: none; display: flex; flex-direction: column; align-items: flex-start;">
        <li style="margin: 10px 0; position: relative; padding-left: 20px; color: purple;"><i class="fas fa-check" style="margin-right: 5px; color: #2afa2a;"></i>Áereo ida e volta</li>
        <li style="margin: 10px 0; position: relative; padding-left: 20px; color: purple;"><i class="fas fa-check" style="margin-right: 5px; color: #2afa2a;"></i>${duracao} diárias</li>
        <li style="margin: 10px 0; position: relative; padding-left: 20px; color: purple;"><i class="fas fa-check" style="margin-right: 5px; color: #2afa2a;"></i>Café da Manhã</li>
    </ul>
    <div class="roteiro-preco" style="font-size: 1.5em; font-weight: bold; margin: 20px 0; color: purple;">R$${preco}</div>
    <div class="roteiro-obs" style="font-size: 1em; margin-bottom: 15px; color: purple;">Taxas Inclusas</div>
    <div class="roteiro-parcelamento" style="font-size: 1em; margin-bottom: 15px; color: purple;">Em até 10x sem Juros</div>
    <button class="roteiro-comprar" onclick="comprarRoteiro('${nome}', '${destino}', ${duracao}, '${url}', '${observacoes}', ${preco})" style="background-color: #2afa2a; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 1.2em; transition-duration: 0.3s; color: #fff !important;">Comprar</button>
    `;

    novoRoteiro.innerHTML = estruturaHTML;

    // Adicionar o novo roteiro à classe container-destinos
    var containerDestinos = document.querySelector('.container-destinos');
    containerDestinos.appendChild(novoRoteiro);

    // Limpar os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('duracao').value = '';
    document.getElementById('url').value = '';
    document.getElementById('observacoes').value = '';

    // Rolar até o final da página
    novoRoteiro.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function comprarRoteiro(nome, destino, duracao, url, observacoes, preco) {
    // Enviar informações para o console log
    console.log('Informações da compra:');
    console.log('Nome:', nome);
    console.log('Destino:', destino);
    console.log('Duração:', duracao, 'diárias');
    console.log('URL:', url);
    console.log('Descrição:', observacoes);
    console.log('Preço:', 'R$', preco);
}
