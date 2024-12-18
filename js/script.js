function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }
// Get the hamburger and menu elements
// Toggle the menu
function toggleMenu() {
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.hamburger');

  // Toggle menu visibility
  menu.classList.toggle('active');
  hamburger.classList.toggle('hidden');
}
