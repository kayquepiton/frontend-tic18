class UESCApp {
    constructor() {
        this.apiUrlResults =
            'https://newsapi.org/v2/top-headlines?q=health&apiKey=bf818b953a844ddb9fe0df6528f6237e';
        this.apiUrlNews =
            'https://newsapi.org/v2/top-headlines?q=science&apiKey=bf818b953a844ddb9fe0df6528f6237e';
    }

    buscarDadosAPI(apiUrl, tipo, container) {
        const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(apiUrl);
        $.ajax({
            url: proxyUrl,
            dataType: 'json',
            success: (data) => {
                if (data.status === 'ok' && Array.isArray(data.articles)) {
                    this.renderizarItens(data.articles.slice(0, 3), container, tipo);
                    this.adicionarEstilos(container, tipo); // Adiciona estilos após renderizar os itens
                }
            },
            error: (error) => {
                console.error(`Erro ao buscar dados da API (${tipo}):`, error);
            },
        });
    }

    renderizarItens(itens, container, tipo) {
        itens.forEach((item) => {
            const element = $('<div>').addClass(`${tipo}-container`);
            const tituloElement = $('<h6>').html(item.title || ''); // Título do resultado ou notícia
            element.append(tituloElement);
            const urlElement = $('<a>').attr('href', item.url || '#').html('Leia mais'); // URL do resultado ou notícia
            element.append(urlElement);
            container.append(element);
        });
    }

    adicionarEstilos(container, tipo) {
        // Adiciona o estilo para reduzir a margem inferior
        container.find(`.${tipo}-container`).css('margin-bottom', '10px');
    }

    iniciar() {
        $(document).ready(() => {
            // Quadro "Resultados"
            this.buscarDadosAPI(this.apiUrlResults, 'resultados', $('#resultados-container'));

            // Quadro "Notícias"
            this.buscarDadosAPI(this.apiUrlNews, 'noticias', $('#noticias-container'));
        });
    }
}

// Criando uma instância da aplicação e iniciando
const uescApp = new UESCApp();
uescApp.iniciar();
