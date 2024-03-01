document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var jsonData = JSON.parse(xhr.responseText);
                var images = jsonData;

                var imageContainer = document.querySelector('#destaque-container');

                images.forEach(function (imageData) {
                    var imgElement = document.createElement('img');
                    imgElement.src = imageData.src;
                    imgElement.alt = imageData.alt;
                    imageContainer.appendChild(imgElement);
                });
            } else {
                console.error("Falha ao carregar o arquivo JSON");
            }
        }
    };
    xhr.open("GET", "JSON/destaque-data.json", true); // Alterei o nome do arquivo JSON
    xhr.send();
});
