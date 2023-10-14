const form = document.querySelector('.form');
const input = document.getElementById('input');
const lista = document.getElementById('lista');

let todas = []; //Array para armazenar as tarefas

function listarTarefas() {
    lista.innerHTML = ''; //Limpa a lista

    // Loop para as tarefas
    for (let i = 0; i < todas.length; i++) {
        const toda = todas[i]

        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.innerHTML = toda; //Texto da tarefa no elemento span
        button.innerHTML = '<i class="fas fa-trash" style="color: #c33232;"></i>';
        button.addEventListener('click', function () {
            todas.splice(i, 1);
            listarTarefas();
        })

        // Adiciona o span e o botão ao elemento lista
        li.appendChild(span);
        li.appendChild(button);

        lista.appendChild(li);
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
    const hoverDiv = document.querySelector(".hover");
    const esconderDiv = document.querySelector(".esconder");

    hoverDiv.addEventListener("click", function () {
        esconderDiv.classList.toggle("show");
    });
});

const userButton = document.getElementById('fa-user');
const modal = document.getElementById('modal');
const desfocado = document.getElementById('desfocado');
const fechar = document.getElementById('fechar');

userButton.addEventListener('click', () => {
    modal.style.display = 'block';
    desfocado.style.display = 'block';
});

fechar.addEventListener('click', () => {
    modal.style.display = 'none';
    desfocado.style.display = 'none';
});

desfocado.addEventListener('click', () => {
    modal.style.display = 'none';
    desfocado.style.display = 'none';
});