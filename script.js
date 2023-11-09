const openBurgerMenu = document.getElementById("open-burger-menu");
const burgerMenu = document.querySelector(".burger-menu");
const closeBurgerMenu = document.getElementById("close-burger-menu");
const bodyApp = document.body;
const scrollContainer = document.getElementById("scroll-container");

const section1 = document.getElementById("main");
const section2 = document.getElementById("projects");
const section3 = document.getElementById("posters");
const section4 = document.querySelector("footer");

openBurgerMenu.addEventListener("click", () => {
  burgerMenu.style.display = "flex";
  bodyApp.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  section1.style.background = "rgba(255, 251, 240, 0.5)";
  section2.style.background = "rgba(255, 251, 240, 0.5)";
  section3.style.background = "rgba(255, 251, 240, 0.5)";
  section4.style.background = "rgba(255, 251, 240, 0.5)";
});

closeBurgerMenu.addEventListener("click", () => {
  burgerMenu.style.display = "none";
  bodyApp.style.backgroundColor = "rgba(0, 0, 0, 0)";
  section1.style.background = "rgba(255, 251, 240)";
  section2.style.background = "rgb(255, 251, 240)";
  section3.style.background = "rgba(255, 251, 240)";
  section4.style.background = "rgba(255, 251, 240)";
});

bodyApp.addEventListener("click", (e) => {
  // Vérifie si le clic a été effectué à l'extérieur du menu burger
  if (!burgerMenu.contains(e.target) && e.target !== openBurgerMenu) {
    burgerMenu.style.display = "none";
  }
});

// Empêche la propagation du clic à l'élément body lorsque le menu burger est cliqué
burgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("load", () => {
  const scrollContainer = document.getElementById("scroll-container");
  const containerWidth = scrollContainer.offsetWidth; // Largeur du conteneur
  const windowWidth = window.innerWidth; // Largeur de la fenêtre

  // Définir la position par défaut pour centrer le contenu
  scrollContainer.scrollLeft = (scrollContainer.scrollWidth - containerWidth) / 2;
});