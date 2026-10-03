// Portfolio JavaScript

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for navigation links
    const navigationLinks = document.querySelectorAll('a[href^="#"]');

    navigationLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Footer year
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    console.log("Vazeed's portfolio is ready!");
});