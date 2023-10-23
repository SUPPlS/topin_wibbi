function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var clockElement = document.getElementById("clock");
    clockElement.textContent = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000);

updateClock();
