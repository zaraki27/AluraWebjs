// Funções para reproduzir o som quando um botão é clicado
function playSound(soundId) {
    const audioElement = document.getElementById(soundId);
    if (audioElement) {
        audioElement.currentTime = 0; // Reinicia o áudio, caso já esteja tocando
        audioElement.play();
    }
}

// Adicione um evento de clique a cada botão
document.querySelectorAll('.tecla').forEach(button => {
    button.addEventListener('click', function() {
        const soundId = 'som_' + this.classList[1]; // Pega a classe do botão para encontrar o ID do áudio
        playSound(soundId);
    });
});
