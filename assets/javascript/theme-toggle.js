document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", toggleTheme);
    console.log("settiseppo");

    function toggleTheme() {
        const body = document.body;
        body.classList.toggle("whitemode");
        const valkone = body.classList.contains("whitemode");
        localStorage.setItem("theme", valkone ? "light" : "dark");
    }

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
        document.body.classList.add("whitemode");
    }
});