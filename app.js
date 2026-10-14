// ===== 1. Copiar comandos al hacer clic =====
document.querySelectorAll("code").forEach(function (codigo) {
    codigo.title = "Clic para copiar";

    codigo.addEventListener("click", function () {
        navigator.clipboard.writeText(codigo.textContent).then(function () {
            mostrarAviso("Copiado: " + codigo.textContent);
        });
    });
});

// Mensaje flotante que aparece y desaparece
const aviso = document.createElement("div");
aviso.className = "aviso";
document.body.appendChild(aviso);

function mostrarAviso(texto) {
    aviso.textContent = texto;
    aviso.classList.add("visible");

    clearTimeout(aviso.temporizador);
    aviso.temporizador = setTimeout(function () {
        aviso.classList.remove("visible");
    }, 1800);
}

// ===== 2. Secciones que aparecen al hacer scroll =====
const secciones = document.querySelectorAll("section");

const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });

secciones.forEach(function (seccion) {
    seccion.classList.add("oculta");
    observador.observe(seccion);
});

// ===== 3. Botón para volver arriba =====
const botonSubir = document.createElement("button");
botonSubir.className = "boton-subir";
botonSubir.textContent = "↑";
botonSubir.title = "Volver arriba";
document.body.appendChild(botonSubir);

window.addEventListener("scroll", function () {
    botonSubir.classList.toggle("visible", window.scrollY > 300);
});

botonSubir.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});