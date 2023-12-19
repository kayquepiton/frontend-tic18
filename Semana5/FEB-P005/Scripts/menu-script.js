document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var jsonData = JSON.parse(xhr.responseText);
                var menuItems = jsonData.menuItems;

                var menuContent = document.querySelector('#menu-container');
                menuItems.forEach(function (item) {
                    var h6Element = document.createElement('h6');
                    h6Element.innerText = item;
                    menuContent.appendChild(h6Element);
                });
            } else {
                console.error("Falha ao carregar o arquivo JSON");
            }
        }
    };
    xhr.open("GET", "JSON/menu-data.json", true);
    xhr.send();
});
