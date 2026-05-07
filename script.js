// Fade-in on scroll
const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);

// Form
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Demande envoyée !");
});




