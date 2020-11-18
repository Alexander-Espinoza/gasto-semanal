const formulario = document.getElementById("agregar-gasto");
let cantidadPresupuesto;
let lista;
const local = new LocalStorage();

document.addEventListener("DOMContentLoaded", function () {
  cantidadPresupuesto = new Presupuesto();

  const ui = new Interfaz();
  // debugger;
  // Token = true
  if (local.estado === "true") {
    cantidadPresupuesto.presupuesto = local.presupuesto;
    cantidadPresupuesto.restante = local.restante;
    cantidadPresupuesto.alerta = local.alerta;
    lista = local.lista;
    ui.mostrarPresupuesto(cantidadPresupuesto.presupuesto);
    ui.mostrarPresupuestoRestante(
      cantidadPresupuesto.restante,
      cantidadPresupuesto.alerta
    );
    local.obtenerLista();
    // Mostrar lista de gastos de localstorage
    for (const element of local.lista) {
      ui.insertarGastoListado(element.nombre, element.cantidad);
    }
  }
  // Token = false
  else {
    const presupuestoUsuario = prompt("Cuál es tu presupuesto semanal?");

    if (
      presupuestoUsuario === null ||
      presupuestoUsuario === "" ||
      isNaN(presupuestoUsuario)
    ) {
      window.location.reload();
    } else {
      cantidadPresupuesto.presupuesto = presupuestoUsuario;
      cantidadPresupuesto.restante = presupuestoUsuario;

      // Guardar en LocalStorage
      local.guardarToken(true);
      local.guardarDatosDinero(
        cantidadPresupuesto.presupuesto,
        cantidadPresupuesto.restante,
        cantidadPresupuesto.alerta
      );
      //console.log(token.estado);

      ui.mostrarPresupuesto(cantidadPresupuesto.presupuesto);
      ui.mostrarPresupuestoRestante(
        cantidadPresupuesto.restante,
        cantidadPresupuesto.alerta
      );
    }
  }
  
});

document.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombreGasto = document.getElementById("gasto").value;
  const cantidadGasto = document.getElementById("cantidad").value;

  const ui = new Interfaz();

  if (nombreGasto === "" || cantidadGasto === "") {
    ui.imprimirMensaje("Hubo un error", "error");
  } else {
    ui.imprimirMensaje("Correcto", "ok");
    ui.insertarGastoListado(nombreGasto, cantidadGasto);
    cantidadPresupuesto.presupuestoRestante(cantidadGasto); //console.log(cantidadPresupuesto.restante);
    ui.mostrarPresupuestoRestante(
      cantidadPresupuesto.restante,
      cantidadPresupuesto.alerta
    );

    // Guardar en LocalStorage
    local.guardarDatosDinero(
      cantidadPresupuesto.presupuesto,
      cantidadPresupuesto.restante,
      cantidadPresupuesto.alerta
    );

    // Guardar datos lista
    local.guardarListaGastos(nombreGasto, cantidadGasto);

    //
  }
  ui.limpiarInputs();
});

const eraserLocalStorage = document.querySelector(".eraserAll");
eraserLocalStorage.addEventListener("click", () => {
  let login = confirm("¿Estás seguro de cerrar sesión?");
  if(login){
    console.log("borrando");
    localStorage.clear();
    window.location.reload();
  }
});
