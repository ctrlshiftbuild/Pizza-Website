import products from "./products.js";

const productImage = document.getElementById("product-img");
const productTitle = document.getElementById("product-title");
const productDesc = document.getElementById("product-desc");
const ingredients = document.getElementById("ingredients");
const ingredientToggler = document.getElementById("toggle-ingredients");
const prices = document.getElementById("prices");
const arrow = document.querySelector(".arrow-right");
const imageContainer = document.querySelector(".image-container");
const ctaButton = document.getElementById("cta");
const quantitySelect = document.getElementById("quantity");

const id = sessionStorage.getItem("id");

if (!sessionStorage.getItem("cart")) {
  sessionStorage.setItem("cart", JSON.stringify([]));
}

let product = products.filter((p) => p.id === Number(id));

product = product[0];

const imagePathEnding = product.title.replace(/ /g, "-");

productImage.src = `../images/${imagePathEnding}.png`;
productTitle.textContent = product.title;
productDesc.textContent = product.description;

product.ingredients.forEach((ingredient) => {
  ingredients.innerHTML += `
        <li class="ingredient">${ingredient}</li>
    `;
});

for (let size in product.prices) {
  prices.insertAdjacentHTML(
    "beforeend",
    `<button class="price-button" id="${size}">
        ${product.prices[size]}<br>
        ${size}
    </button>`
  );
}

const ingredientList = document.querySelectorAll(".ingredient");

ingredientToggler.addEventListener("click", () => {
  ingredientList.forEach((i) => i.classList.toggle("display-block"));
  ingredients.classList.toggle("display-block");
  arrow.classList.toggle("turn")
  if (arrow.classList.contains("turn"))
    arrow.style.transform = "rotate(90deg)"
  else 
    arrow.style.transform = "rotate(0deg)"
});

productImage.addEventListener('load', () => {
  const w = productImage.offsetWidth;
  const h = productImage.offsetHeight;

  productImage.style.width = w + 'px';
  productImage.style.height = h + 'px';
  productImage.style.objectFit = 'contain';
});

if (product.category === "Pasta & Lasagna")
  imageContainer.style.backgroundColor = "orange";

const priceButtons = document.querySelectorAll(".price-button");

const cartObj = new Map();
cartObj.set("title", product.title);

priceButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    priceButtons.forEach(b => {
      b.style.backgroundColor = "#a1a0a0";
    })
    e.target.style.backgroundColor = "#555";
    const size = e.target.id;
    const price = product.prices[size];
    cartObj.set("price", { size, price });
  })
});

ctaButton.addEventListener("click", () => {
  const cart = JSON.parse(sessionStorage.getItem("cart"));
  cartObj.set("quantity", Number(quantitySelect.value));

  if (!cartObj.get("price"))
    alert("Please select a size");
  else {
    cart.push(Object.fromEntries(cartObj));
    sessionStorage.setItem("cart", JSON.stringify(cart));
    sessionStorage.setItem("key", 1);
    window.location.href = "menu.html";
  }
})
