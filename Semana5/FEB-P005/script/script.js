// Certifique-se de incluir a biblioteca jQuery em seu projeto antes de usar este código.
var UESCApp = /** @class */ (function () {
    function UESCApp() {
        this.apiUrl =
            'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bf818b953a844ddb9fe0df6528f6237e';
    }
    UESCApp.prototype.buscarDadosAPI = function (apiUrl, tipo, container) {
        var _this = this;
        var proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(apiUrl);
        $.ajax({
            url: proxyUrl,
            dataType: 'json',
            success: function (data) {
                if (data.status === 'ok' && Array.isArray(data.articles)) {
                    _this.renderizarItens(data.articles.slice(0, 3), container);
                }
            },
            error: function (error) {
                console.error("Erro ao buscar dados da API (".concat(tipo, "):"), error);
            },
        });
    };
    UESCApp.prototype.renderizarItens = function (itens, container) {
        itens.forEach(function (item) {
            var element = $('<div>').addClass('uesc-content');
            var tituloElement = $('<h6>').html(item.title || ''); // Título da notícia
            element.append(tituloElement);
            var descricaoElement = $('<p>').html(item.description || ''); // Descrição da notícia
            element.append(descricaoElement);
            var urlElement = $('<a>').attr('href', item.url || '#').html('Leia mais'); // URL da notícia
            element.append(urlElement);
            container.append(element);
        });
    };
    UESCApp.prototype.iniciar = function () {
        var _this = this;
        $(document).ready(function () {
            // Quadro "Notícias"
            _this.buscarDadosAPI(_this.apiUrl, 'noticias', $('#noticias-container'));
            // Quadro "Menu"
            _this.buscarDadosAPI(_this.apiUrl, 'menu', $('#menu-container'));
            // Quadro "Destaques"
            _this.buscarDadosAPI(_this.apiUrl, 'destaque', $('#destaque-container'));
            // Quadro "Serviços"
            _this.buscarDadosAPI(_this.apiUrl, 'servicos', $('#servicos-container'));
            // Quadro "Resultados"
            _this.buscarDadosAPI(_this.apiUrl, 'resultados', $('#resultados-container'));
        });
    };
    return UESCApp;
}());
// Criando uma instância da aplicação e iniciando
var uescApp = new UESCApp();
uescApp.iniciar();
