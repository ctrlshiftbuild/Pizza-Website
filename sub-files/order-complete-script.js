let p = document.getElementById("redirect");

let seconds = 6;

const id = setInterval(() => {
    p.textContent = `redirecting in ${seconds - 1}`;
    seconds--
    if (seconds <= 0) {
        sessionStorage.removeItem("key");
        window.location.href = "menu.html"
        clearInterval(id);
    }
}, 1000)