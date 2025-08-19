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

function sortearAmigo() {
  if (listaDeNomes.length === 0) {
    document.getElementById('resultado').innerHTML = "Adicione amigos à lista!";
    return;
  }

  if (sorteioRealizado) {
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);
  const amigoSorteado = listaDeNomes[indiceAleatorio];

  document.getElementById('resultado').innerHTML = "O amigo sorteado é: " + amigoSorteado;
  document.getElementById('listaAmigos').innerHTML = "";

  sorteioRealizado = true;
}

// realizei uma verificação para evitar que o sorteio fosse realizado
// mais de uma vez com a variável sorteioRealizado, pois o sorteio só deve ser realizado uma vez por sessão.


// exemplo de código comentado para sortear amigo em que tentei verificar se a 
// lista estava vazia antes de sortear, porém não funcionou como esperado 
// pois não havia compreendido que o array estava vazio e não a string.

// function sortearAmigo() {
//     if (listaDeNomes == "") {
//         adicionarAmigo();
//     }
// }