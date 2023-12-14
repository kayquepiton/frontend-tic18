// Função para buscar dados da API e preencher a seção correspondente
function buscarDadosAPI(apiUrl, tipo, container) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                data.slice(0, 3).forEach(item => { // Limitando para 3 itens por tipo
                    var element = document.createElement('div');
                    element.classList.add('uesc-content');

                    var tituloElement = document.createElement('h6');
                    tituloElement.innerHTML = item.title || item.titulo || item.name; // Adaptado para aceitar diferentes estruturas
                    element.appendChild(tituloElement);

                    var textoElement = document.createElement('p');
                    textoElement.innerHTML = item.body || item.texto || ''; // Adaptado para aceitar diferentes estruturas
                    element.appendChild(textoElement);

                    container.appendChild(element);
                });
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados da API:', error);
        });
}

// Chamada da função ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    // Quadro "Menu"
    buscarDadosAPI('https://jsonplaceholder.typicode.com/todos', 'menu', document.getElementById('menu-container'));

    // Quadro "Notícias"
    buscarDadosAPI('https://jsonplaceholder.typicode.com/posts', 'noticias', document.getElementById('noticias-container'));

    // Quadro "Destaques"
    buscarDadosAPI('https://jsonplaceholder.typicode.com/photos', 'destaque', document.getElementById('destaque-container'));

    // Quadro "Serviços"
    buscarDadosAPI('https://jsonplaceholder.typicode.com/todos', 'servicos', document.getElementById('servicos-container'));

    // Quadro "Resultados"
    buscarDadosAPI('https://jsonplaceholder.typicode.com/comments', 'resultados', document.getElementById('resultados-container'));
});
