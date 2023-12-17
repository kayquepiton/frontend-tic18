// Certifique-se de incluir a biblioteca jQuery em seu projeto antes de usar este código.

class UESCApp {
    private apiUrl: string;

    constructor() {
        this.apiUrl =
            'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bf818b953a844ddb9fe0df6528f6237e';
    }

    buscarDadosAPI(apiUrl: string, tipo: string, container: JQuery<HTMLElement>): void {
        const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(apiUrl);

        $.ajax({
            url: proxyUrl,
            dataType: 'json',
            success: (data: { status: string; articles?: any[] }) => {
                if (data.status === 'ok' && Array.isArray(data.articles)) {
                    this.renderizarItens(data.articles.slice(0, 3), container);
                }
            },
            error: (error) => {
                console.error(`Erro ao buscar dados da API (${tipo}):`, error);
            },
        });
    }

    renderizarItens(itens: any[], container: JQuery<HTMLElement>): void {
        itens.forEach((item) => {
            const element = $('<div>').addClass('uesc-content');

            const tituloElement = $('<h6>').html(item.title || ''); // Título da notícia
            element.append(tituloElement);

            const descricaoElement = $('<p>').html(item.description || ''); // Descrição da notícia
            element.append(descricaoElement);

            const urlElement = $('<a>').attr('href', item.url || '#').html('Leia mais'); // URL da notícia
            element.append(urlElement);

            container.append(element);
        });
    }

    iniciar(): void {
        $(document).ready(() => {
            // Quadro "Notícias"
            this.buscarDadosAPI(
                this.apiUrl,
                'noticias',
                $('#noticias-container') as JQuery<HTMLElement>
            );

            // Quadro "Menu"
            this.buscarDadosAPI(this.apiUrl, 'menu', $('#menu-container') as JQuery<HTMLElement>);

            // Quadro "Destaques"
            this.buscarDadosAPI(
                this.apiUrl,
                'destaque',
                $('#destaque-container') as JQuery<HTMLElement>
            );

            // Quadro "Serviços"
            this.buscarDadosAPI(
                this.apiUrl,
                'servicos',
                $('#servicos-container') as JQuery<HTMLElement>
            );

            // Quadro "Resultados"
            this.buscarDadosAPI(
                this.apiUrl,
                'resultados',
                $('#resultados-container') as JQuery<HTMLElement>
            );
        });
    }
}

// Criando uma instância da aplicação e iniciando
const uescApp = new UESCApp();
uescApp.iniciar();
