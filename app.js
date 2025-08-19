// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco

    // Verifica se o campo está vazio
    if (!nomeAmigo) {
        alert("Por favor, insira um nome.");
        return; // Sai da função se o campo estiver vazio
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    inputAmigo.value = "";

    // Atualiza a lista de amigos
    atualizarLista();
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista existente

    // Cria um elemento <li> para cada amigo e adiciona à lista
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo; // Define o texto do <li>
        lista.appendChild(li); // Adiciona o <li> à lista
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return; // Sai da função se não houver amigos
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio]; // Obtém o nome sorteado

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo secreto sorteado: <strong>${amigoSorteado}</strong>`;
}