fennecFox.addEventListener("click", function () {
  removeCssStyleOfButton();
  addCssStyleOfButton(fennecFox);
  showProductsByName("Fennec smile fox");
});
arcticFox.addEventListener("click", function () {
  removeCssStyleOfButton();
  addCssStyleOfButton(arcticFox);
  showProductsByName("Arctic smile fox");
});
kitFox.addEventListener("click", function () {
  removeCssStyleOfButton();
  addCssStyleOfButton(kitFox);
  showProductsByName("Kit smile fox");
});
redFox.addEventListener("click", function () {
  removeCssStyleOfButton();
  addCssStyleOfButton(redFox);
  showProductsByName("Red smile fox");
});
petFox.addEventListener("click", function () {
  removeCssStyleOfButton();
  addCssStyleOfButton(petFox);
  showProductsByName("Pet smile fox");
});

function removeCssStyleOfButton() {
  const buttons = [fennecFox, arcticFox, kitFox, redFox, petFox];
  buttons.forEach((button) => {
    button.style.fontWeight = "";
    button.style.color = "";
    button.style.background = "";
  });
}

function addCssStyleOfButton(button) {
  button.style.fontWeight = "600";
  button.style.color = "white";
  button.style.background = "#ff3d00";
}

function showProductsByName(productName) {
  const container = document.getElementById("containerOfCards");
  container.innerHTML = "";

  const productsToShow = productList.products.filter(
    (product) => product.name === productName
  );
  productsToShow.forEach((product) => {
    const productItem = new ProductItem(product);
    const productElement = productItem.render();
    container.appendChild(productElement);
  });
}

class Product {
  constructor(imgUrl, name, likes, description) {
    this.imgUrl = imgUrl;
    this.name = name;
    this.likes = likes;
    this.description = description;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("div");
    prodEl.className = "main-fox-card";
    prodEl.innerHTML = `
    
      <img src="${this.product.imgUrl}" alt="${this.product.name}" />
      <div class="main-fox-card-text-block">
        <div class="main-fox-card-title">
          <h2>${this.product.name}</h2>
          <div class="number-with-heart">
            <svg class="heart" onclick="increaseLikes(this)">
              <path
                d="M7.30769 0H7.28365C6.32933 0 5.48558 0.525 5 1.3C4.51442 0.525 3.67067 0 2.71635 0H2.69231C1.20433 0.015 0 1.2725 0 2.825C0 3.75 0.389423 5.0625 1.14904 6.1425C2.59615 8.2 5 10 5 10C5 10 7.40385 8.2 8.85096 6.1425C9.61058 5.0625 10 3.75 10 2.825C10 1.2725 8.79567 0.015 7.30769 0Z"
                fill="#FF3D00"
              />
            </svg>
            <p class="main-card-number">${this.product.likes}</p>
          </div>
        </div>
        <p>${this.product.description}</p>
        <a href="#" class="read-more">Read more &gt;&gt;</a>
      </div>
    
    `;
    return prodEl;
  }
}

function increaseLikes(element) {
  const likesElement = element.parentNode.querySelector(".main-card-number");
  let currentLikes = parseInt(likesElement.innerText);
  let newLikes = currentLikes + 1;
  likesElement.innerText = newLikes;
}

class ProductList {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.products = [
      new Product(
        "./img/red-smile-fox-1.png",
        "Red smile fox",
        2547,
        "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere."
      ),
      new Product(
        "./img/fennec-smile-fox.png",
        "Fennec smile fox",
        9897,
        "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te, his assentior, libris docendi tractatos mea eu."
      ),
      new Product(
        "./img/arctic-smile-fox.png",
        "Arctic smile fox",
        4659,
        "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te, his assentior, libris docendi tractatos mea eu. "
      ),
      new Product(
        "./img/kit-smile-fox-1.png",
        "Kit smile fox",
        37,
        "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te, his ipsum corpora no."
      ),
      new Product(
        "./img/kit-smile-fox-2.png",
        "Kit smile fox",
        1287,
        "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affertn appetere te,"
      ),
      new Product(
        "./img/red-smile-fox-2.png",
        "Red smile fox",
        1100,
        "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te, his assentior, libris docendi tractatos mea eu."
      ),
      new Product(
        "./img/pet-smile-fox-1.png",
        "Pet smile fox",
        1000,
        "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option"
      ),
      new Product(
        "./img/pet-smile-fox-2.png",
        "Pet smile fox",
        9764,
        "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te,"
      ),
    ];
  }
  render() {
    const container = document.getElementById("containerOfCards");
    this.products.forEach((product) => {
      const productItem = new ProductItem(product);
      const productElement = productItem.render();
      container.appendChild(productElement);
    });
  }
}

const productList = new ProductList("#product-list");
productList.render();

const headerLogo = document.querySelector(".header-logo");
headerLogo.addEventListener("click", function () {
  const containerOfCards = document.getElementById("containerOfCards");
  removeCssStyleOfButton();
  containerOfCards.innerHTML = "";
  productList.render();
});
