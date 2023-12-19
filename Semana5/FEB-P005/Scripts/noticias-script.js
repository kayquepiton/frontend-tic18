class UESCApp {
    constructor() {
        this.apiUrl =
            'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bf818b953a844ddb9fe0df6528f6237e';
    }

    buscarDadosAPI(apiUrl, tipo, container) {
        const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(apiUrl);
        $.ajax({
            url: proxyUrl,
            dataType: 'json',
            success: (data) => {
                if (data.status === 'ok' && Array.isArray(data.articles)) {
                    this.renderizarItens(data.articles.slice(0, 3), container);
                    this.adicionarEstilos(); // Adiciona estilos após renderizar os itens
                }
            },
            error: (error) => {
                console.error(`Erro ao buscar dados da API (${tipo}):`, error);
            },
        });
    }

    renderizarItens(itens, container) {
        itens.forEach((item) => {
            const element = $('<div>').addClass('noticias-container');
            const tituloElement = $('<h6>').html(item.title || ''); // Título da notícia
            element.append(tituloElement);
            const descricaoElement = $('<p>').html(item.description || ''); // Descrição da notícia
            element.append(descricaoElement);
            const urlElement = $('<a>').attr('href', item.url || '#').html('Leia mais'); // URL da notícia
            element.append(urlElement);
            container.append(element);
        });

        // Adiciona o estilo para reduzir a margem inferior
        container.find('.uesc-content').css('margin-bottom', '10px');
    }

    iniciar() {
        $(document).ready(() => {
            // Quadro "Resultados"
            this.buscarDadosAPI(this.apiUrl, 'resultados', $('#resultados-container'));

            // Quadro "Notícias"
            this.buscarDadosAPI(this.apiUrl, 'noticias', $('#noticias-container'));
        });
    }
}

// Criando uma instância da aplicação e iniciando
const uescApp = new UESCApp();
uescApp.iniciar();
