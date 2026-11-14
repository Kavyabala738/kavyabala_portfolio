const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#primary-menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("open", !isOpen);
  });
}

document.querySelectorAll(".year").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    status.textContent = "Your form looks good! This demo does not send messages yet. Connect a form service or backend to receive submissions.";
  });
}
