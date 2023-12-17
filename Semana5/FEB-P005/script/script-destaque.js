// Função para carregar imagens a partir do JSON
function carregarImagens() {
    // Caminho para o arquivo JSON
    var jsonPath = 'json/imagens.json';

    // Requisição AJAX para obter o conteúdo do JSON
    $.getJSON(jsonPath, function (data) {
        // Log dos dados do JSON no console
        console.log('Dados do JSON:', data);

        // Seleciona o contêiner de destaque
        var destaqueContainer = $('#destaqueContent');

        // Loop através dos dados do JSON
        $.each(data, function (index, image) {
            // Log das informações de cada imagem no console
            console.log('Imagem', index + 1, ':', image);

            // Cria um elemento de imagem
            var imgElement = $('<img>').attr({
                src: image.src,
                alt: image.alt
            });

            // Adiciona um estilo personalizado à primeira imagem
            if (index === 0) {
                imgElement.css('margin-top', '10px'); // Ajuste o valor conforme necessário
            } else {
                // Adiciona margem vertical entre as imagens
                imgElement.css('margin-top', '10px'); // Ajuste o valor conforme necessário
            }

            // Adiciona a imagem ao contêiner de destaque
            destaqueContainer.append(imgElement);
        });
    })
    .fail(function() {
        console.error('Erro ao carregar o JSON.'); // Trata falha na requisição AJAX
    });
}

// Chama a função para carregar as imagens quando a página carregar
$(document).ready(function () {
    carregarImagens();
});
