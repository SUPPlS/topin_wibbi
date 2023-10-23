var audio = document.getElementById("audio");
var playButton = document.getElementById("playButton");

playButton.addEventListener("click", function() {

    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pysäytä ääni";
    } else {
        audio.pause();
        audio.currentTime = 0;
        playButton.textContent = "Toista ääni";
    }
});