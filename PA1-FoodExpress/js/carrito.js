const contenedor = document.getElementById("contenedorCarrito");
const totalElemento = document.getElementById("total");
const btnVaciar = document.getElementById("vaciarCarrito");

let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito() {

    contenedor.innerHTML = "";

    let total = 0;

    if(carrito.length === 0){

        contenedor.innerHTML = `
            <h3 class="text-center">
                El carrito está vacío
            </h3>
        `;

        totalElemento.textContent = "0";

        return;
    }

    carrito.forEach((producto,index)=>{

        total += producto.precio;

        contenedor.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card shadow h-100">

                <img
                    src="${producto.imagen}"
                    class="card-img-top">

                <div class="card-body">

                    <h5>${producto.nombre}</h5>

                    <p>
                        Precio: S/ ${producto.precio}
                    </p>

                    <button
                        class="btn btn-danger"
                        onclick="eliminarProducto(${index})">

                        Eliminar

                    </button>

                </div>

            </div>

        </div>

        `;
    });

    totalElemento.textContent = total;
}

function eliminarProducto(index){

    carrito.splice(index,1);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    mostrarCarrito();
}

btnVaciar.addEventListener("click",()=>{

    if(confirm("¿Vaciar carrito?")){

        localStorage.removeItem("carrito");

        carrito=[];

        mostrarCarrito();
    }

});

mostrarCarrito();

const btnComprar = document.getElementById("comprar");

btnComprar.addEventListener("click", () => {

    if(carrito.length === 0){

        alert("No hay productos en el carrito");
        return;
    }

    alert(
        `Compra realizada con éxito.\nTotal pagado: S/ ${totalElemento.textContent}`
    );

    localStorage.removeItem("carrito");

    carrito = [];

    mostrarCarrito();
});