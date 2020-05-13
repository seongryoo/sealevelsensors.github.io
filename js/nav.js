/* Defining important dynamic elements */

const header = document.getElementById('headerOpen');
const burger = document.getElementById('hamburgerButton');
const dark = document.getElementById('darkOverlay');
let burgerStyles;

/* Helper method for checking if hamburger menu is open*/

function ifMenuOpen() {
  burgerStyles = window.getComputedStyle(burger);
  let burgerDisplayed = burgerStyles.getPropertyValue('display');
  return burgerDisplayed == 'none' || header.classList.contains('open');
}
function ifMenuClosed() {
  burgerStyles = window.getComputedStyle(burger);
  let burgerDisplayed = burgerStyles.getPropertyValue('display');
  return burger.style.display == 'none' || !header.classList.contains('open');
}

/* Updates all interactive aria labels */

function updateAttributes() {
  makeFocusable('logo-link', ifMenuClosed);
  makeFocusable('navlink', ifMenuOpen);
  updateAriaHidden('logo-link', ifMenuClosed);
  updateAriaHidden('navlink', ifMenuOpen);
  updateHamburgerAria();
}

/* Handles actual toggling of header class */

function flipNav() {
  header.classList.toggle('open');
  updateAttributes();
}
function offNav() {
  header.classList.remove('open');
  updateAttributes();
}

/* Update attributes is called at the document load */

updateAttributes();

/* Clicking or pressing enter on burger will toggle nav */
burger.addEventListener('click', flipNav);
burger.addEventListener('keydown', enterWrapper(flipNav));

/* Clicking outside of navbar or changing window -> close nav*/
dark.addEventListener('click', offNav);
window.addEventListener('resize', offNav);

function updateHamburgerAria() {
  if (header.classList.contains('open')) {
    burger.setAttribute('aria-label', 'Close hamburger menu');
    burger.setAttribute('aria-pressed', 'true');
  } else {
    burger.setAttribute('aria-label', 'Open hamburger menu');
    burger.setAttribute('aria-pressed', 'false');
  }
}