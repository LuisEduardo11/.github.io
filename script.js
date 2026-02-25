alert("JS cargado correctamente");

document.addEventListener("DOMContentLoaded", function() {

    const botonLinkedin = document.getElementById("linkedinBtn");
    const contenedor = document.querySelector(".contenedor");
    const modoBtn = document.getElementById("modoBtn");

    // MODO OSCURO AL CARGAR
    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("dark-mode");
    }

    // BOTÓN CAMBIAR MODO
    modoBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("modo", "oscuro");
        } else {
            localStorage.setItem("modo", "claro");
        }
    });

    // BOTÓN LINKEDIN
    botonLinkedin.addEventListener("click", function() {

        if (!document.querySelector(".mensaje")) {

            const mensaje = document.createElement("p");
            mensaje.textContent = "Estoy más cerca de mi meta de ser desarrollador profesional";
            mensaje.classList.add("mensaje");

            contenedor.appendChild(mensaje);
        }
    });

});