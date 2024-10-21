// Control del Carrusel
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n;
    const totalSlides = document.getElementsByClassName("carousel-item").length;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}

function showSlides(index) {
    const carouselInner = document.querySelector(".carousel-inner");
    const offset = -index * 1400; // Ajusta según el ancho de tu carrusel
    carouselInner.style.transform = `translateX(${offset}px)`;
}

// Carrusel automático cada 5 segundos
setInterval(() => {
    plusSlides(1);
}, 5000);

// Función para abrir el modal
function abrirModal(src, alt) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");
    let captionText = document.getElementById("modal-caption");
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
}

// Función para cerrar el modal
function cerrarModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Función para mostrar más o menos productos
function toggleProductos() {
    let ocultos = document.querySelectorAll('.producto.oculto');
    let boton = document.querySelector('.ver-mas button');

    if (boton.textContent === 'Mostrar más productos') {
        ocultos.forEach(producto => {
            producto.style.display = "block";
        });
        boton.textContent = 'Mostrar menos productos';
    } else {
        ocultos.forEach(producto => {
            producto.style.display = "none";
        });
        boton.textContent = 'Mostrar más productos';
    }
}

// Asignar eventos a las imágenes de productos
const productos = document.querySelectorAll(".producto-img");
productos.forEach(producto => {
    producto.addEventListener("click", () => {
        abrirModal(producto.src, producto.alt);
    });
});
