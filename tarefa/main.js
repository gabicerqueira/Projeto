const form = document.querySelector('.form');
const input = document.getElementById('input');
const lista = document.getElementById('lista');

let todas = []; //Array para armazenar as tarefas

function listarTarefas() {
    const listaContainer = document.getElementById('container');
    lista.innerHTML = ''; //Limpa a lista

    // Loop para as tarefas
    for (let i = 0; i < todas.length; i++) {
        const toda = todas[i]

        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.innerHTML = toda; //Texto da tarefa no elemento span
        button.innerHTML = '<i class="fas fa-trash" style="color: #FFF;"></i>';
        button.addEventListener('click', function () {
            li.classList.add('slide-out');
            setTimeout(() => {
            todas.splice(i, 1);
            listarTarefas();}, 500);
        })

        // Adiciona o span e o botão ao elemento lista
        li.appendChild(span);
        li.appendChild(button);

        lista.appendChild(li);

        li.addEventListener('animationend', function (e) {
            if (e.animationName === 'slide-out') {
                // Verifique se o elemento está fora da div container
                if (!listaContainer.contains(li)) {
                    li.style.display = 'none';
                }
            }
        });
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const texto = input.value.trim(); //Obtém o texto da tarefa e remove espaços extras

    if (texto.length === 0) {
        return; //Se tentar criar tarefa sem nada escrito, não vai
    }

    todas.push(texto);
    input.value = '';
    listarTarefas();
})
listarTarefas();

document.addEventListener("DOMContentLoaded", function () {
    const sairDiv = document.querySelector("#fa-user");

    if (sairDiv) {
        sairDiv.addEventListener("click", function () {
            // Redireciona para a página desejada
            window.location.href = "/login/index.html";
        });
    }
});