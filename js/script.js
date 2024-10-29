// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulação de autenticação (usuário: admin, senha: 1234)
    if (username === 'admin' && password === '1234') {
        // Ocultar tela de login
        document.getElementById('loginScreen').style.display = 'none';
        
        // Mostrar tela principal
        document.getElementById('header').style.display = 'flex';
        document.getElementById('mainContainer').style.display = 'flex';
        document.getElementById('footer').style.display = 'block';

        // Exibir nome do usuário na interface
        document.getElementById('userDisplay').textContent = username;
    } else {
        // Exibir mensagem de erro
        errorMessage.textContent = 'Usuário ou senha incorretos!';
    }
});

// Função de logout
document.getElementById('logoutButton').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Ocultar tela principal
    document.getElementById('header').style.display = 'none';
    document.getElementById('mainContainer').style.display = 'none';
    document.getElementById('footer').style.display = 'none';

    // Limpar campos de login e mensagem de erro
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('errorMessage').textContent = '';

    // Mostrar tela de login
    document.getElementById('loginScreen').style.display = 'flex';
});

// Alternar exibição do dropdown de login
document.getElementById('userButton').addEventListener('click', function() {
    this.classList.toggle('active');
});

// Manipular login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulação de autenticação (usuário: admin, senha: 1234)
    if (username === 'admin' && password === '1234') {
        // Ocultar dropdown e tela de login
        document.getElementById('loginDropdown').style.display = 'none';
        document.getElementById('userButton').classList.remove('active');

        // Mostrar tela principal
        document.getElementById('mainContainer').style.display = 'flex';
        document.getElementById('footer').style.display = 'block';

        // Exibir nome do usuário na interface
        document.getElementById('userDisplay').textContent = username;
    } else {
        // Exibir mensagem de erro
        errorMessage.textContent = 'Usuário ou senha incorretos!';
    }
});

// Função de logout
document.getElementById('logoutButton').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Ocultar tela principal
    document.getElementById('mainContainer').style.display = 'none';
    document.getElementById('footer').style.display = 'none';

    // Limpar campos de login e mensagem de erro
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('errorMessage').textContent = '';

    // Mostrar dropdown de login novamente
    document.getElementById('loginDropdown').style.display = 'block';
});