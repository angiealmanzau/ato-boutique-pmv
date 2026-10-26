const botonConfirmar = document.getElementById("confirmarPedido");
const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

if (botonConfirmar && mensajeConfirmacion) {

    botonConfirmar.addEventListener("click", function () {

        mensajeConfirmacion.classList.add("visible");

        mensajeConfirmacion.scrollIntoView({
            behavior: "smooth"
        });

    });

}