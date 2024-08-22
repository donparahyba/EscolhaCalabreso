function escolher() {
    const opcao1 = document.getElementById("opcao1").value.trim();
    const opcao2 = document.getElementById("opcao2").value.trim();
    const resultadoElement = document.getElementById('resultado');

    if (!opcao1 || !opcao2) {
        resultadoElement.innerHTML = '<div class="alert alert-danger" role="alert">Preencha os dois campos!</div>';
        return;
    }

    const escolha = Math.random() < 0.5 ? opcao1 : opcao2;

    resultadoElement.innerHTML = `<h2 class="text-center">Calabreso escolheu:</h2><br><h4 class="text-center fade-in">${escolha}</h4>`;
}
