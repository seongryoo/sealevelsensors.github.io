const header = document.getElementById('headerOpen');
const burger = document.getElementById('hamburgerButton');
const dark = document.getElementById('darkOverlay');

function flipNav() {
  header.classList.toggle('open');
}
function offNav() {
  header.classList.remove('open');
}

burger.addEventListener('click', flipNav);
dark.addEventListener('click', offNav);
window.addEventListener('resize', offNav);