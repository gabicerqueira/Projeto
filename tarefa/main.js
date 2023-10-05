const form = document.querySelector('.form');
const input = document.getElementById('input');
const lista = document.getElementById('lista');

let todas = []; //Array para armazenar as tarefas

function listarTarefas(){
    lista.innerHTML = ''; //Limpa a lista

    // Loop para as tarefas
    for(let i = 0; i < todas.length; i++){
        const toda = todas[i]

        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.innerHTML = toda; //Texto da tarefa no elemento span
        button.innerHTML = 'Apagar tarefa';
        button.addEventListener('click', function(){
            todas.splice(i, 1);
            listarTarefas();
        })

        // Adiciona o span e o botão ao elemento lista
        li.appendChild(span);
        li.appendChild(button);

        lista.appendChild(li);
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    const texto = input.value.trim(); //Obtém o texto da tarefa e remove espaços extras

    if(texto.length === 0){
        return; //Se tentar criar tarefa sem nada escrito, não vai
    }

    todas.push(texto);
    input.value = '';
    listarTarefas();
})
listarTarefas();