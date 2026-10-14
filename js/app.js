// JavaScript básico del taller.
// Permite mostrar u ocultar un consejo al pulsar un botón.

const botonConsejo = document.getElementById("btn-consejo");
const textoConsejo = document.getElementById("consejo");

botonConsejo.addEventListener("click", function () {
    const estaOculto = textoConsejo.hidden;

    textoConsejo.hidden = !estaOculto;
    botonConsejo.setAttribute("aria-expanded", String(estaOculto));
    botonConsejo.textContent = estaOculto
        ? "Ocultar consejo ↑"
        : "Mostrar consejo para el equipo ↓";
});
