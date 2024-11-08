function toggleMenu() {
    const menu = document.queerySelector(".menu-links");
    const icon = document.queerySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}