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
      restanteDiv.classList.remove("alert-success", "alert-warning");
      restanteDiv.classList.add("alert-warning");
    } else if (alerta === "baja") {
      restanteDiv.classList.remove("alert-success", "alert-warning");
      restanteDiv.classList.add("alert-success");
    }
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
      "list-group-item d-flex justify-content-between align-items-center";
    //Insertar el gasto
    li.innerHTML = `
            ${nombre}
            <span class="badge badge-primary badge-pill">S/. ${cantidad}</span>
      `;
    //Insrtar al HTML
    gastosListado.appendChild(li);
  }
  limpiarInputs() {
    document.getElementById("gasto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("gasto").focus();
  }
}
