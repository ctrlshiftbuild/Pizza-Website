import products from "./products.js";

const productsContainer = document.getElementById("products-container");
const sortbyContainer = document.getElementById("sortby");
const filterSelect = document.getElementById("filter");
const searchInput = document.getElementById("search");
const animationAddItemToCartContainer = document.querySelector(".add-animation");
const mainDisplay = document.getElementById("main-display");
let productButtons;

filterSelect.addEventListener("change", (e) => filterProducts(e.target.value));
sortbyContainer.addEventListener("change", (e) => filterProducts(e.target.value));
searchInput.addEventListener("input", (e) => searchProducts(e));

let filteredProducts = [...products];

displayProducts(filteredProducts);

function filterProducts() {
  filteredProducts =
    filterSelect.value === "All" ? products : products.filter((p) => p.category === filterSelect.value);

  sortProducts(sortbyContainer.value);
}

function sortProducts(value) {
  if (value === "atoz")
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  else if (value === "ztoa")
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  else if (value === "priceAsc")
    filteredProducts.sort(
      (a, b) =>
        (a.prices.small || a.prices.regular) -
        (b.prices.small || b.prices.regular)
    );
  else if (value === "priceDes")
    filteredProducts.sort(
      (a, b) =>
        (b.prices.small || b.prices.regular) -
        (a.prices.small || a.prices.regular)
    );
    if (value === "All") {
      filteredProducts = [...products];
    }

  displayProducts(filteredProducts);
}

function searchProducts(e) {
  const value = new RegExp(e.target.value, "gi");
  filteredProducts = products.filter(
    (product) => value.test(product.title) || value.test(product.description)
  );
  displayProducts(filteredProducts);
}

function displayProducts(array) {
  productsContainer.innerHTML = "";
  array.forEach((product) => {
    let pricesHtml = "";
    let category = product.category;

    if (category === "Pasta & Lasagna") category = "LasagnaAndPasta";

    if (product.prices.small) {
      pricesHtml += `${product.prices.small}€ / `;
    }

    pricesHtml += `${product.prices.medium || product.prices.regular || ""}€`;

    if (product.prices.large) {
      pricesHtml += ` / ${product.prices.large}€`;
    }

    const html = `
        <div class="product ${category}" id="${product.id}">
            <div>
              <h3>${product.title}</h3>
              <p>${product.description}</p>
              <p style="font-weight: 600;">Price${
                pricesHtml.length > 7 ? "s" : ""
              }: ${pricesHtml}</p>
            </div>
            <button class="product-button">Add to Order</button>
        </div>
    `;
    productsContainer.innerHTML += html;
  });
  updateButtons();
}

function takeToProduct() {
    window.location.href = "product-template.html";
}

function updateButtons() {
    productButtons = document.querySelectorAll(".product-button");
    
    productButtons.forEach(btn => {
        btn.addEventListener("click", e => {
            const parentElement = e.target.closest('.product'); 
            if (parentElement) {
                sessionStorage.setItem("id", parentElement.id);
            }
            takeToProduct();
        });
    })
}

if (sessionStorage.getItem("key"))
  runItemAddedToCart();

function runItemAddedToCart() {
  animationAddItemToCartContainer.style.opacity = 1;
  animationAddItemToCartContainer.style.maxHeight = "300px";
  animationAddItemToCartContainer.style.zIndex = "10";
  mainDisplay.style.filter = "blur(10px)"
  setTimeout(() => {
    animationAddItemToCartContainer.style.display = "none";
    mainDisplay.style.filter = "none";
    sessionStorage.removeItem("key");
  }, 2000);
}