function validateForm() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const loginMessage = document.getElementById("loginMessage");

        if (username === "Cliente" && password === "1234") {
            // Redirecionar para a página de vídeo
            window.location.href = "./video_page/video_page.html";
            return false; // Impede o envio do formulário
        } else {
            // Exibir mensagem de erro
            loginMessage.textContent = "Usuário ou senha incorreta!!!";
            loginMessage.classList.add("shake"); // Adicionar classe de animação

            // Remover a classe "shake" após um tempo (por exemplo, 0.5 segundos)
            setTimeout(function() {
                loginMessage.classList.remove("shake");
            }, 500);

            return false; // Impede o envio do formulário
        }
    }
