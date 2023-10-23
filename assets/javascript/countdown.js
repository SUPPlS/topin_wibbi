var christmasDate = new Date("2023-12-25T00:00:00Z");

var currentDate = new Date();

var daysUntilChristmas = Math.floor((christmasDate - currentDate) / (1000 * 60 * 60 * 24));

var countdownElement = document.getElementById("countdown");
countdownElement.textContent = daysUntilChristmas;