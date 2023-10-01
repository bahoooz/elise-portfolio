const openBurgerMenu = document.getElementById("open-burger-menu");
const burgerMenu = document.querySelector(".burger-menu");
const closeBurgerMenu = document.getElementById("close-burger-menu");
const bodyApp = document.body;
const projectSection = document.getElementById("projects");
const scrollContainer = document.getElementById("scroll-container");

openBurgerMenu.addEventListener("click", () => {
  burgerMenu.style.display = "flex";
});

closeBurgerMenu.addEventListener("click", () => {
  burgerMenu.style.display = "none";
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