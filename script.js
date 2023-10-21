function validateForm() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const loginMessage = document.getElementById("loginMessage");

            if (username === "Cliente" && password === "1234") {
                // Login correto
                return true;
            } else {
                // Exibir mensagem de erro
                loginMessage.textContent = "Usuário ou senha incorreta!!!";
                return false; // Impede o envio do formulário
            }
        }