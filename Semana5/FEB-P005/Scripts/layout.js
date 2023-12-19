// Criando uma classe para representar a aplicação
class UESCApp {
    constructor() {
        this.apiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bf818b953a844ddb9fe0df6528f6237e';
    }

    // Função para buscar dados da API e preencher a seção correspondente
    buscarDadosAPI(apiUrl, tipo, container) {
        // Usando crossorigin.me como proxy para evitar problemas de CORS
        const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(apiUrl);

        fetch(proxyUrl)
            .then(response => response.json())
            .then(data => {
                if (data.status === "ok" && Array.isArray(data.articles)) {
                    this.renderizarItens(data.articles.slice(0, 3), container);
                }
            })
            .catch(error => {
                console.error(`Erro ao buscar dados da API (${tipo}):`, error);
            });
    }

    // Função para renderizar os itens na página
    renderizarItens(itens, container) {
        itens.forEach(item => {
            var element = document.createElement('div');
            element.classList.add('uesc-content');

            var tituloElement = document.createElement('h6');
            tituloElement.innerHTML = item.title || ''; // Título da notícia
            element.appendChild(tituloElement);

            var descricaoElement = document.createElement('p');
            descricaoElement.innerHTML = item.description || ''; // Descrição da notícia
            element.appendChild(descricaoElement);

            var urlElement = document.createElement('a');
            urlElement.href = item.url || '#'; // URL da notícia
            urlElement.innerHTML = 'Leia mais';
            element.appendChild(urlElement);

            container.appendChild(element);
        });
    }

    // Função para inicializar a aplicação
    iniciar() {
        document.addEventListener('DOMContentLoaded', () => {
            // Quadro "Notícias"
            this.buscarDadosAPI(this.apiUrl, 'noticias', document.getElementById('noticias-container'));

            // Quadro "Menu"
            this.buscarDadosAPI(this.apiUrl, 'menu', document.getElementById('menu-container'));

            // Quadro "Destaques"
            this.buscarDadosAPI(this.apiUrl, 'destaque', document.getElementById('destaque-container'));

            // Quadro "Serviços"
            this.buscarDadosAPI(this.apiUrl, 'servicos', document.getElementById('servicos-container'));

            // Quadro "Resultados"
            this.buscarDadosAPI(this.apiUrl, 'resultados', document.getElementById('resultados-container'));
        });
    }
}

// Criando uma instância da aplicação e iniciando
const uescApp = new UESCApp();
uescApp.iniciar();