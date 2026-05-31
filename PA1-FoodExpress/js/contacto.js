const formulario =
document.getElementById("formContacto");

const resultado =
document.getElementById("resultado");

formulario.addEventListener("submit",(e)=>{

    e.preventDefault();

    const nombre =
    document.getElementById("nombre").value.trim();

    const correo =
    document.getElementById("correo").value.trim();

    const mensaje =
    document.getElementById("mensaje").value.trim();

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(nombre.length < 3){

        mostrarError(
            "El nombre debe tener al menos 3 caracteres."
        );

        return;
    }

    if(!emailRegex.test(correo)){

        mostrarError(
            "Ingrese un correo válido."
        );

        return;
    }

    if(mensaje.length < 10){

        mostrarError(
            "El mensaje debe tener al menos 10 caracteres."
        );

        return;
    }

    resultado.innerHTML = `
        <div class="alert alert-success">
            Mensaje enviado correctamente.
        </div>
    `;

    formulario.reset();

});

function mostrarError(texto){

    resultado.innerHTML = `
        <div class="alert alert-danger">
            ${texto}
        </div>
    `;
}