document.addEventListener("DOMContentLoaded", function () {
    // Agregar una animación sutil al cargar la página
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s ease-in-out";
    document.body.style.opacity = "1";

    // Agregar efecto hover a las secciones
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.boxShadow = "0 4px 15px rgba(0, 122, 204, 0.3)";
        });
        section.addEventListener("mouseleave", () => {
            section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });

    // Efecto de desplazamiento suave para los enlaces de navegación (si los hubiera)
    const smoothScrollLinks = document.querySelectorAll("a[href^='#']");
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: "smooth"
                });
            }
        });
    });

    // Mensaje de bienvenida en la consola
    console.log("¡Bienvenido a mi CV! Espero que te guste el diseño.");
});
