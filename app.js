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