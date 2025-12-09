let listElement = document.querySelector('.list');
let inputElement = document.querySelector('.input');
let buttonElement = document.querySelector('.button');

let arr = [
    'fazer um cafe',
    'bater ponheita pensando em andressa ',
    'estudar js',
];

function rendertodo(){
    listElement.innerHTML = ""; // limpa lista para evitar duplicar

    arr.forEach((item, index) => {
        var todoelement = document.createElement('li');
        var todotext = document.createTextNode(item);

        // cria o botão de excluir
        var linkli = document.createElement('a');
        var textlink = document.createTextNode(' excluir');
        linkli.appendChild(textlink);
        linkli.setAttribute('href', '#');

        // evento do botão
        linkli.onclick = () => {
            arr.splice(index, 1); // remove o item do array
            rendertodo(); // renderiza de novo a lista
        };

        todoelement.appendChild(todotext);
        todoelement.appendChild(linkli);
        listElement.appendChild(todoelement);
    });
}

rendertodo();
