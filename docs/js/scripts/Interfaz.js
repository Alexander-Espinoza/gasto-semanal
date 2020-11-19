class Interfaz {
  mostrarPresupuesto(cantidad) {
    const presupuestoSpan = document.querySelector("span#total");
    presupuestoSpan.innerHTML = `${cantidad}`;
  }
  mostrarPresupuestoRestante(restante, alerta) {
    const restanteSpan = document.querySelector("span#restante");

    restanteSpan.innerHTML = `${restante}`;
    const restanteDiv = document.querySelector(".restante"); //console.log(restanteDiv.classList)
    if (restanteDiv.classList.length == 4) {
      restanteDiv.classList.remove("alertInicio");
    } //console.log(restanteDiv.classList.value)
    if (alerta === "alta") {
      restanteDiv.classList.remove("alert-success", "alert-warning");
      restanteDiv.classList.add("alert-danger");
    } else if (alerta === "media") {
      restanteDiv.classList.remove("alert-danger", "alert-success");
      restanteDiv.classList.add("alert-warning");
    } else if (alerta === "baja") {
      restanteDiv.classList.remove("alert-danger", "alert-warning");
      restanteDiv.classList.add("alert-success");
    }
    console.log("alerta",alerta)
  }
  imprimirMensaje(mensaje, tipo) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");
    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }
    divMensaje.appendChild(document.createTextNode(mensaje));
    //Insertar en el DOM
    document.querySelector(".primario").insertBefore(divMensaje, formulario);

    //Quitar el mensaje
    setTimeout(() => {
      document.querySelector(".primario .alert").remove();
    }, 2000);
  }
  insertarGastoListado(nombre, cantidad) {
    const gastosListado = document.querySelector("#gastos ul");
    /* console.log(gastosListado) */
    // Crear un LI
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex bd-highlight  align-items-center mt-2";
    //Insertar el gasto
    li.innerHTML = `
            <div class="mr-auto p-1 bd-highlight">${nombre}</div>
            <span class="p-2 bd-highlight badge badge-primary badge-pill mr-4 ml-2">S/. ${cantidad}</span>
            <button class="eliminar p-1 bd-highlight"></button>
            
      `;
    //Insrtar al HTML
    gastosListado.appendChild(li);
    eliminarYa();
  }
  limpiarInputs() {
    document.getElementById("gasto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("gasto").focus();
  }
}
