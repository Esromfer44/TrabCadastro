window.addEventListener("load", function () {

    document.getElementById("btnNewUser").addEventListener("click", validarCadastro);
    document.getElementById("user").addEventListener("keypress", function () {
    
    });
    document.getElementById("pwd").addEventListener("keypress", function () {
        
    });    
    document.getElementById("confPwd").addEventListener("keypress", function () {
        
    });    

    function validarCadastro() {
        var user = document.getElementById("user");
        var pwd = document.getElementById("pwd");
        var confPwd = document.getElementById("confPwd");

        if (!user.value) {
            alert("Usuário em branco. Informe um usuário");
        }
        else if (!pwd.value) {
            alert("Senha em branco. Informe uma senha");
        }
        else if (!confPwd.value) {
            alert("Confirmar senha em branco. Informe uma senha");
        }
        else if (pwd.value != confPwd.value) {
            alert("Senha e confirmar senha diferentes. Tente novamente!");
        }
        else {
            cadastrarNovoUsuario(user.value, pwd.value);
        }
    }

    function cadastrarNovoUsuario(user, pwd) {
        var usuario = { nome: user, senha: pwd };
        
        var usuarios = localStorage.getItem("usuarios");

        if (!usuarios) {
            usuarios = [usuario];
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            alert("Usuário cadastrado com sucesso!");
        }
        else if (podeCadastrar(user)) {
            usuarios = JSON.parse(usuarios);
            usuarios.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            alert("Usuário cadastrado com sucesso!");
        }
        else {
            alert("Esse usuário já existe. Tente outro!");
        }
    }

    function podeCadastrar(user) {
        var usuarios = localStorage.getItem("usuarios");
        usuarios = JSON.parse(usuarios);
        var achou = false;
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].nome == user) {
                achou = true;
                break;
            }
        }
        return !achou;
    }
});
