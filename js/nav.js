/* Defining important dynamic elements */

const header = document.getElementById('headerOpen');
const burger = document.getElementById('hamburgerButton');
const dark = document.getElementById('darkOverlay');
let burgerStyles;

function isMenuOpen() {
  return strudel.isStyle('#hamburgerButton', 'display', 'none') ||
         strudel.hasClass('#headerOpen', 'open');
}

let strudelNav = strudel.query(isMenuOpen)
  .watch('#hamburgerButton', 'style')
  .watch('#headerOpen', 'class')

  .reaction('.logo-link')
    .set('tabIndex', -1)
    .set('aria-hidden', true)
      .else()
    .set('tabIndex', 0)
    .remove('aria-hidden')

  .reaction('.navlink')
    .set('tabIndex', 0)
    .remove('aria-hidden')
      .else()
    .set('tabIndex', -1)
    .set('aria-hidden', true)

  .reaction('#hamburgerButton')
    .set('aria-label', 'Close hamburger menu')
    .set('aria-pressed', 'true')
      .else()
    .set('aria-label', 'Open hamburger menu')
    .set('aria-pressed', 'false');

strudelNav.allReact();

/* Handles actual toggling of header class */

function flipNav() {
  header.classList.toggle('open');
}
function offNav() {
  header.classList.remove('open');
}

/* Clicking or pressing enter on burger will toggle nav */
strudel.clickPress('#hamburgerButton', flipNav);

/* Clicking outside of navbar or changing window -> close nav*/
dark.addEventListener('click', offNav);
window.addEventListener('resize', offNav);
