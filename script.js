function gerarSenha() {
    var tamanhoSenha = document.getElementById('tamanho').value;
    var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    var senha = '';

    for (var i = 0; i < tamanhoSenha; i++) {
        var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indiceAleatorio);
    }

    document.getElementById('senha-gerada').textContent = 'Senha gerada: ' + senha;

    document.getElementById('copiar-senha').style.display = 'inline-block';
}

function copiarSenha() {
    var senhaGerada = document.getElementById('senha-gerada').textContent.replace('Senha gerada: ', '');
    if (senhaGerada) {
        navigator.clipboard.writeText(senhaGerada).then(() => {
            alert('Senha copiada para a área de transferência!');
        }).catch(err => {
            alert('Falha ao copiar a senha!');
        });
    } else {
        alert('Nenhuma senha gerada para copiar!');
    }
}
