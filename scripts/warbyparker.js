import { loadProductsFetch, products } from "../data/products.js";
import { loadHeader } from "./loadPage/loadheader.js";
import { addToFavourite } from "../data/faovurite.js";
import { loadFooter } from "./loadPage/loadfooter.js";
import { addToCart } from "../data/cart.js";
import {
  productHtml,
  getClickedProductId,
  getSingleProductUrl,
} from "../htmlComponents/product.js";

function renderProductsWarbyparker() {
  const productsContainer = document.querySelector(".products");
  const glassesTypeButtons = document.querySelectorAll(".btn-choose-glasses");
  let glassesType;
  [...glassesTypeButtons].forEach((button) => {
    if (button.classList.contains("active")) {
      glassesType = button.innerText.toLowerCase();
    }
    button.addEventListener("click", () => {
      renderProductsWarbyparker();
    });
  });
  let productsHtml = ``;
  products.forEach((product) => {
    if (product.type == glassesType && product.location === "warbyparker") {
      productsHtml += productHtml(product);
    }
  });

  productsContainer.innerHTML = productsHtml;
  getClickedProductId();
  addToFavourite();
  addToCart();
}

function normalizeHomepageSingleProductLinks() {
  document
    .querySelectorAll('a[href^="singleproduct.html?product="]')
    .forEach((link) => {
      const href = link.getAttribute("href");
      const productId = href.split("product=")[1];

      if (productId) {
        link.href = getSingleProductUrl(decodeURIComponent(productId));
      }
    });
}

document.addEventListener("DOMContentLoaded", () => {
  normalizeHomepageSingleProductLinks();
  loadHeader();
  loadFooter();
  loadProductsFetch(renderProductsWarbyparker);
});
