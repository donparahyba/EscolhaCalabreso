function escolher() {
    var opcao1 = document.getElementById("opcao1").value;
    var opcao2 = document.getElementById("opcao2").value;

    var aleatorio = Math.floor(Math.random() * 2) + 1;

    if (opcao1 === '' || opcao2 === '') {
        document.getElementById('resultado').innerHTML = '<div class="alert alert-danger" role="alert">Preencha os dois!!!</div>';
    }
    else if(aleatorio == 1){
        document.getElementById('resultado').innerHTML = "<h2 class=\"text-center\">Calabreso escolheu:</h2><br><h4 class=\"text-center fade-in\">" + opcao1 + "</h4>";
    }
    else{
        document.getElementById('resultado').innerHTML = "<h2 class=\"text-center\">Calabreso escolheu:</h2><br><h4 class=\"text-center fade-in\">" + opcao2 + "</h4>";
    }
}
