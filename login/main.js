const form = document.querySelector('.login-form'); //Seleciona o formulário de login

//Seleciona o campo de entrada do formulário
const usuarioInput = form.querySelector("input[type='text']"); //Pega a tag pelo tipo dela
const senhaInput = form.querySelector("input[type='password']"); //Pega a tag pelo tipo dela

form.addEventListener('submit', (event) =>{ //Adiciona um ouvinte quando clicar no botão

    event.preventDefault(); //Evita que a página seja recarregada

    //o trim remove os espaços em branco no começo e no final
    const usuario = usuarioInput.value.trim(); //Obtém os valores dos campos de entrada do usuário
    const senha = senhaInput.value.trim(); //Obtém os valores dos campos de entrada da senha

    if(usuario === '' || senha === ''){
        alert("Por favor, preencha os campos");
    } else if(usuario === 'gabi' && senha === '1910'){ //Verifica e as informações de login estão corretas
        alert("Bem- vindo!")
        location.replace("/tarefa/index.html", "_self")

    } else{
        alert("Usuário ou senha incorreto, tente novamente") //Exibe uma mensagem de erro
    }
})