document.addEventListener("DOMContentLoaded", function () {

    function playSound(soundId) {
      const audioElement = document.getElementById(soundId);
      if (audioElement) {
        audioElement.currentTime = 0; 
        audioElement.play();
      }
    }
  
 
    document.querySelectorAll('.tecla').forEach(button => {
      button.addEventListener('click', function() {
        const soundId = 'som_' + this.classList[1];
        playSound(soundId);
      });
    });
  });
  