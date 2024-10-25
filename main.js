window.addEventListener("DOMContentLoaded", main);

/** Starting point of program */
function main() {
    console.log("Check Start of program"); // Check program
    setupEventListerners();
};

/** Setup Eventlisteners for Toggle-functions */
function setupEventListerners() {
    burgerMenu.onclick = toggleMenu;
}

/** Toggle header open close */
function toggleMenu() {
    const navToggle = document.querySelector('.nav__toggle');
    navToggle.classList.toggle("header-open");
};