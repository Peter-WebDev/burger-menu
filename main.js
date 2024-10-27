window.addEventListener("DOMContentLoaded", main);

/** Starting point of program */
function main() {
    console.log("Check Start of program"); // Check program
    setupEventListerners();
};

/** Setup Eventlisteners for Toggle-functions */
function setupEventListerners() {
    burgerMenu.onclick = toggleHeaderOpen;
}

/** Toggle header open close */
function toggleHeaderOpen() {
    const header = document.getElementById("header");
    const nav = document.querySelector(".nav__primary");
    header.classList.toggle("headerOpen");
    nav.classList.toggle("nav--visible");
};