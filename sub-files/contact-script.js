const logoButtons = document.querySelectorAll(".logo-button");
const sendButton = document.getElementById("cta");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");


logoButtons.forEach(btn => {
    if (btn.classList.contains("github")) {
        btn.addEventListener("click", () => window.location.href = "https://github.com/ctrlshiftbuild");
        return;
    }
    btn.addEventListener("click", () => alert("Normally, this would work but this is just a demo sight."))
})

sendButton.addEventListener("click", () => {
    fullName.value = "";
    email.value = "";
    message.value = "";
})