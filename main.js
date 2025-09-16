/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 pixels, add the scroll-header class to the header tag
  if (window.scrollY >= 80) 
    header.classList.add("scroll-header");
  else 
    header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== IMAGE PREVIEW ====================*/
const chooseFile = document.getElementById("file");
const img = document.getElementById("img");

chooseFile.addEventListener("change", () => {
  getImgData();
});

function getImgData() {
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      img.innerHTML = `<img src="${this.result}" alt="Image preview" />`;
    });
  }
}

/*==================== ADD PROPERTY ====================*/
function addProperty() {
  let pName = document.getElementById("pName").value.trim();
  let pPrice = document.getElementById("pPrice").value.trim();
  let pDescription = document.getElementById("pDescription").value.trim();

  if (!pName || !pPrice || !pDescription) {
    alert('Please fill in all fields.');
    return;
  }

  let article = document.createElement("article");
  article.setAttribute("class", "product__card");

  let name = document.createElement("h3");
  name.setAttribute("class", "product__title");
  name.innerText = pName;

  let img = document.createElement('img');
  img.setAttribute('class', 'product__img');

  if (chooseFile.files && chooseFile.files[0]) {
    img.src = URL.createObjectURL(chooseFile.files[0]);
    img.alt = pName; // Added alt text for accessibility
    article.appendChild(img);
  }

  let price = document.createElement("span");
  price.setAttribute("class", "product__price");
  price.innerText = pPrice + 'L';

  let description = document.createElement("p");
  description.setAttribute("class", "product__description");
  description.innerText = pDescription;

  article.appendChild(name);
  article.appendChild(price);
  article.appendChild(description);

  document.getElementById("pContainer").appendChild(article);

  alert('Your Property has been added!');
}
