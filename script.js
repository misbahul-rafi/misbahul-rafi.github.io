const hero = document.querySelector(".hero");
const overlay = document.querySelector(".overlay");
const navIcon = document.querySelector(".nav-icon");
const navMenu = document.querySelector(".nav-menu");
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");
const nav = document.querySelector('nav')
const menus = document.querySelectorAll("nav a")
const cards = document.querySelectorAll("#faq .card");

const openNav = () => {
  navMenu.classList.add("active");
  overlay.classList.add("show");
  iconOpen.classList.remove("show-icon");
  iconClose.classList.add("show-icon");
};
const closeNav = () => {
  navMenu.classList.remove("active");
  overlay.classList.remove("show");
  iconClose.classList.remove("show-icon");
  iconOpen.classList.add("show-icon");
};
overlay.addEventListener("click", closeNav);
navIcon.addEventListener("click", () => {
  if (navMenu.classList.contains("active")) {
    closeNav();
  } else {
    openNav();
  }
});
menus.forEach(menu => {
  menu.addEventListener("click", closeNav)
});
const adjustHeroHeight = () => {
  const hero = document.querySelector('.hero');
  const img = hero.querySelector('img');
  hero.style.height = img.clientHeight + 'px';
}
cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => {
      if(c !== card) c.classList.remove("active");
    });
    card.classList.toggle("active");
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > hero.offsetHeight) {
    nav.classList.add("scrolled");
    nav.querySelector("h1 a").style.opacity = "1";
  } else {
    nav.querySelector("h1 a").style.opacity = "0";
    nav.classList.remove("scrolled");
  }
});
window.addEventListener('load', adjustHeroHeight);
window.addEventListener('resize', adjustHeroHeight);