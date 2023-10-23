var audio = document.getElementById("audio");
var playButton = document.getElementById("playButton");

playButton.addEventListener("click", function() {
    console.log("bissi");
    if (audio.paused) {
        audio.play();
        playButton.textContent = "guys";
    } else {
        audio.pause();
        audio.currentTime = 0;
        playButton.textContent = "guys";
    }
});