const contenedor = document.getElementById("contenedorComidas");
const buscador = document.getElementById("buscador");

let comidas = [];

async function cargarComidas() {

    try {

        const respuesta =
            await fetch("http://localhost:3000/api/productos");

        comidas = await respuesta.json();

        mostrarComidas(comidas);

    } catch (error) {

        contenedor.innerHTML = `
            <h3 class="text-danger text-center">
                Error al conectar con Express
            </h3>
        `;

        console.error(error);
    }
}

function mostrarComidas(lista) {

    contenedor.innerHTML = "";

    lista.forEach(comida => {

        contenedor.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card h-100 shadow">

                <img
                    src="${comida.imagen}"
                    class="card-img-top"
                    alt="${comida.nombre}">

                <div class="card-body">

                    <h5>${comida.nombre}</h5>

                    <p>
                        Categoría:
                        ${comida.categoria}
                    </p>

                    <p class="fw-bold">
                        S/ ${comida.precio}
                    </p>

                    <button
                        class="btn btn-warning w-100"
                        onclick="agregarCarrito(
                            '${comida.id}',
                            '${comida.nombre}',
                            '${comida.imagen}',
                            ${comida.precio}
                        )">

                        Agregar al carrito

                    </button>

                </div>

            </div>

        </div>
        `;
    });
}

buscador.addEventListener("keyup", () => {

    const texto = buscador.value.toLowerCase();

    const resultado = comidas.filter(comida =>
        comida.nombre.toLowerCase().includes(texto)
    );

    mostrarComidas(resultado);
});

function agregarCarrito(id, nombre, imagen, precio) {

    const carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        id,
        nombre,
        imagen,
        precio
    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert("Producto agregado al carrito");
}

cargarComidas();