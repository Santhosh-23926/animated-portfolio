
const typingElement = document.getElementById("typing");

const roles = [
    "B.Tech Student",
    "Python Developer",
    "Aspiring Data Scientist",
    "Web Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    typingElement.textContent = currentRole.substring(
        0,
        characterIndex
    );

    if (!deleting) {
        characterIndex++;

        if (characterIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1100);
            return;
        }
    } else {
        characterIndex--;

        if (characterIndex < 0) {
            characterIndex = 0;
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach((element) => {
        observer.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
document.getElementById("year").textContent =
    new Date().getFullYear();