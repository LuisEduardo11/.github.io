const botonLinkedin = document.getElementById("linkedinBtn");
const contenedor = document.querySelector(".contenedor");

botonLinkedin.addEventListener("click", function(event) {
    
    //
        if (!document.querySelector(".mensaje")) {

            botonLinkedin.textContent = "¡Gracias por hacer clic!";

            const mensaje = document.createElement("p");
            mensaje.textContent = "Estoy más cerca de mi meta de ser desarrollador profesional";
            mensaje.classList.add("mensaje");

            contenedor.appendChild(mensaje);
        }
    });
    
    //
    if(localStorage.getItem("modo")=== "oscuro"){
        document.body.classList.add("dark-mode");
    }

    modoBtn.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode");

        //
        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("modo", "oscuro");
        } else {
            localStorage.setItem("modo", "claro");
        }
    })