const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll(".menu-links a");

// Lock or unlock page scrolling
function toggleScroll() {
  document.body.style.overflowY = menuToggle.checked
    ? "hidden"
    : "";
}

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.checked = false;
        toggleScroll();
    }); })