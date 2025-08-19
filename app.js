let listaDeNomes = [];

function adicionarAmigo() {
    let nomeRecebido = document.getElementById("amigo").value;

    if (nomeRecebido == "") {
        alert("Por favor, insira um nome válido");
    } else {
        listaDeNomes.push(nomeRecebido);
        atualizarLista();
        document.getElementById("amigo").value = "";
    }
}

function atualizarLista() {
    let listaVisivel = document.getElementById("listaAmigos");
    listaVisivel.innerHTML = "";

    for (let i = 0; i < listaDeNomes.length; i++) {
        let nome = listaDeNomes[i];
        let itemLista = document.createElement("li");
        itemLista.textContent = nome;
        listaVisivel.appendChild(itemLista);
    }
}