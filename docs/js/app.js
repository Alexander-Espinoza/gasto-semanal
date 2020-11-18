const formulario = document.getElementById("agregar-gasto");
let cantidadPresupuesto;
const token = new Token();
const gastos = new Gastos();

let estado = token.leerToken();

document.addEventListener("DOMContentLoaded", function () {
  cantidadPresupuesto = new Presupuesto();

  const ui = new Interfaz();
  //debugger;
  if (estado === "true") {
    cantidadPresupuesto.leerLocal();
    ui.mostrarPresupuesto(cantidadPresupuesto.presupuesto);
    ui.mostrarPresupuestoRestante(
      cantidadPresupuesto.restante,
      cantidadPresupuesto.alerta
    );
  } else {
    const presupuestoUsuario = prompt("Cuál es tu presupuesto semanal?");
    cantidadPresupuesto.presupuesto = presupuestoUsuario;
    cantidadPresupuesto.restante = presupuestoUsuario;
    cantidadPresupuesto.guardarLocal();
    if (
      presupuestoUsuario === null ||
      presupuestoUsuario === "" ||
      isNaN(presupuestoUsuario)
    ) {
      window.location.reload();
    } else {
      token.guardarToken(true);
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
    
    // Guardar datos en LocalStorage
    gastos.guardarLista(nombreGasto, cantidadGasto);

    ui.imprimirMensaje("Correcto", "ok");
    ui.insertarGastoListado(nombreGasto, cantidadGasto);
    cantidadPresupuesto.presupuestoRestante(cantidadGasto); //console.log(cantidadPresupuesto.restante);
    ui.mostrarPresupuestoRestante(
      cantidadPresupuesto.restante,
      cantidadPresupuesto.alerta
    );
    cantidadPresupuesto.guardarLocal(); //console.log(cantidadPresupuesto.restante)
  }
});

const eraserLocalStorage = document.querySelector(".eraserAll");
eraserLocalStorage.addEventListener("click", () => {
  console.log("borrando");
  localStorage.clear();
  window.location.reload();
});
