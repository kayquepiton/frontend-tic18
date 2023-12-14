var dadosJson = {
    menu: [
        "Centros e grupos de pesquisa",
        "Internacional",
        "Laboratórios",
        "Mapa da cidade",
        "Núcleos",
        "Projetos"
    ],
    noticias: [
        {
            titulo: "Reeleito, reitor da UESC agradece",
            link: "link_para_reeleicao.html",
            texto: "Confiança na comunidade acadêmica"
        },
        {
            titulo: "Professor da UESC ministra curso no Rio Grande do Sul",
            link: "link_para_curso_rs.html",
            texto: "Detalhes sobre o curso no Rio Grande do Sul"
        },
        {
            titulo: "Autor das ameaças à UESC é aprendido",
            link: "link_para_ameacas_uesc.html",
            texto: "Desfecho da investigação"
        }
    ],
    destaque: [
        "imagens/uesc1.jpg",
        "imagens/uesc2.jpg"
    ],
    servicos: [
        "Auditórios",
        "Bibliotecas",
        "Licitações",
        "Pavilhão Max Menezes",
        "Portal Acadêmico",
        "Protocolo Digital",
        "Peticionamento Eletrônico SEI"
    ],
    resultados: [
        {
            titulo: "Seleção pública professor substituto",
            link: "link_para_reeleicao.html",
            texto: "Confiança na comunidade acadêmica"
        },
        {
            titulo: "Processo seletivo professor visitante - PPGMC",
            link: "link_para_eleicao_2024_2028.html",
            texto: "Expectativas para o próximo mandato"
        },
        {
            titulo: "Pós-graduação produção vegetal",
            link: "link_para_curso_rs.html",
            texto: "Detalhes sobre o curso no Rio Grande do Sul"
        },
        {
            titulo: "Pós-graduação produção em ciência de saúde",
            link: "link_para_ameacas_uesc.html",
            texto: "Desfecho da investigação"
        }
    ]
};
// Função para buscar dados de um tópico do JSON
function buscarDados(tipo) {
    var dados = dadosJson[tipo];
    var container = document.getElementById(tipo + "-container");
    if (container) {
        container.innerHTML = '';
        if (tipo === 'destaque') {
            dados.forEach(function (item) {
                var imagemElement = document.createElement('img');
                imagemElement.src = item;
                container.appendChild(imagemElement);
            });
        } else if (tipo === 'resultados') {
            // Chamada à API JSONPlaceholder para preencher a seção de resultados
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                    return response.json();
                })
                .then(function (posts) {
                    posts.slice(0, dados.length).forEach(function (post) {
                        var element = document.createElement('div');
                        element.classList.add('uesc-content');

                        var tituloElement = document.createElement('h6');
                        tituloElement.innerHTML = post.title;
                        element.appendChild(tituloElement);

                        var textoElement = document.createElement('p');
                        textoElement.innerHTML = post.body;
                        element.appendChild(textoElement);

                        container.appendChild(element);
                    });
                })
                .catch(function (error) {
                    console.error('Erro ao buscar dados da API:', error);
                });
        } else {
            dados.forEach(function (item) {
                var element = document.createElement('div');
                element.classList.add('uesc-content');
                if (tipo === 'menu' || tipo === 'servicos') {
                    var h6Element = document.createElement('h6');
                    h6Element.innerHTML = item;
                    element.appendChild(h6Element);
                } else {
                    var tituloElement = document.createElement('h6');
                    tituloElement.innerHTML = item.titulo;
                    element.appendChild(tituloElement);
                    if (item.link) {
                        var linkElement = document.createElement('a');
                        linkElement.href = item.link;
                        linkElement.innerHTML = item.texto;
                        element.appendChild(linkElement);
                    }
                }
                container.appendChild(element);
            });
        }
    }
}

// Chamada da função ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    buscarDados('menu');
    buscarDados('noticias');
    buscarDados('destaque');
    buscarDados('servicos');
    buscarDados('resultados');
});