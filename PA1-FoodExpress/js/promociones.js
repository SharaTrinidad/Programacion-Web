console.log("PROMOCIONES CARGADO");
const contador = document.getElementById("contador");

let tiempo = 24 * 60 * 60;

function actualizarContador() {

    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;

    contador.textContent =
        `${String(horas).padStart(2, "0")}:` +
        `${String(minutos).padStart(2, "0")}:` +
        `${String(segundos).padStart(2, "0")}`;

    tiempo--;

    if (tiempo < 0) {
        clearInterval(intervalo);
        contador.textContent = "PROMOCIÓN FINALIZADA";
    }
}

const intervalo = setInterval(actualizarContador, 1000);

actualizarContador();

function agregarPromo(nombre, precio, imagen) {

    let carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre,
        precio,
        imagen
    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert("Producto agregado al carrito");

    window.location.href = "carrito.html";
}

function agregarPromo(nombre, precio, imagen){

    let carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre,
        precio,
        imagen
    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert("Producto agregado");

    window.location.href = "carrito.html";
}