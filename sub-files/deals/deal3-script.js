const ctaButton = document.getElementById("cta");

ctaButton.addEventListener("click", addToOrder);

function addToOrder() {
    if (!JSON.parse(sessionStorage.getItem("cart")))
        sessionStorage.setItem("cart", JSON.stringify([]))

    const cart = JSON.parse(sessionStorage.getItem("cart"));

    const cartObj = new Map();
    cartObj.set("title", "Deal Garlic Bread");
    cartObj.set("quantity", 1);
    cartObj.set("price", { "size": "regular", "price": 2.99 });

    cart.push(Object.fromEntries(cartObj));
    sessionStorage.setItem("cart", JSON.stringify(cart));
    sessionStorage.setItem("key", 1);
    window.location.href = "../menu.html";
}