// DARK MODE

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("modo","oscuro");
        darkBtn.textContent = "☀️";
    }else{
        localStorage.setItem("modo","claro");
        darkBtn.textContent = "🌙";
    }

});

// CARGAR MODO GUARDADO

if(localStorage.getItem("modo")==="oscuro"){
    document.body.classList.add("dark-mode");
    darkBtn.textContent="☀️";
}

// CONTADORES

function animarContador(id, objetivo){

    let contador = 0;

    const elemento = document.getElementById(id);

    if(!elemento){
        return;
    }

    const intervalo = setInterval(()=>{

        contador += Math.ceil(objetivo/100);

        if(contador >= objetivo){

            contador = objetivo;
            clearInterval(intervalo);

        }

        elemento.textContent = contador;

    },20);

}

function actualizarContador() {

    const carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    const contador =
        document.getElementById("contadorCarrito");

    if(contador){

        contador.textContent = carrito.length;
    }
}

actualizarContador();

animarContador("clientes",1200);
animarContador("pedidos",3500);
animarContador("productos",500);