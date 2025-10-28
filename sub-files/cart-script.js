const productsInCart = document.getElementById("products-in-cart");
const totalH2 = document.getElementById("total");
const amountInTaxesP = document.getElementById("amount-in-taxes");
const ctaButton = document.getElementById("cta");

let cart = JSON.parse(sessionStorage.getItem("cart"));
let cleanedCartItems = [];

let total = 0;
let taxes = 0;

for (let item of cart) {
  const arrayOfDupes = cart.filter(
    (i) => i.title === item.title && i.price.size === item.price.size
  );
  if (arrayOfDupes.length === 1) {
    cleanedCartItems.push(arrayOfDupes[0]);
    continue;
  }
  if (arrayOfDupes.length > 1) {
    const realQuantity = arrayOfDupes.reduce((a, b) => {
      return a + Number(b.quantity);
    }, 0);
    cart = cart.filter(
      (i) => i.title !== item.title && i.price.size !== item.price.size
    );
    item.quantity = realQuantity;
    cleanedCartItems.push(item);
  }
}

function displayProducts() {
  productsInCart.innerHTML = "";
  for (let item of cleanedCartItems) {
    productsInCart.innerHTML += `
            <div class="product-summary-container">
                <h3 class="${item.title.split(" ").join("-")}">${item.quantity}x ${item.title}</h3>
                <p>${Number(item.price.price) * item.quantity}€</p>
                <button class="delete-button">Delete</button>
            </div>
        `;
  }
  const deleteButtons = document.querySelectorAll(".delete-button");

  deleteButtons.forEach(button => {
    button.addEventListener("click", removeProduct);
})
    updateTotal();
}

function updateTotal() {
    total = 0;
    taxes = 0;
    for (let item of cleanedCartItems) {
      total += item.quantity * Number(item.price.price);
    }
    total = Math.round(total * 100) / 100
    
    taxes = Math.round(total * 0.07 * 100) / 100;
    
    totalH2.textContent = `Total: ${total}€`;
    amountInTaxesP.textContent = `Amount in taxes: ${taxes}€`
}

displayProducts();
updateTotal();

function removeProduct(e) {
  const parent = e.target.closest(".product-summary-container");
  const heading = parent.querySelector("h3");
  const title = Array.from(heading.classList).pop().split("-").join(" "); 

  const index = cleanedCartItems.findIndex(item => {
      return item.title === title;
  });

  if (index !== -1) {
    cleanedCartItems.splice(index, 1); 
    displayProducts(); 
  }
}

ctaButton.addEventListener("click", () => {
    sessionStorage.removeItem("cart");
    window.location.href = "order-complete.html";
})
