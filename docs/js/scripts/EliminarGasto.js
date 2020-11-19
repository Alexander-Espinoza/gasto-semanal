
function eliminarYa() {
    const eliminarGasto = document.querySelectorAll(".eliminar");
    for (const iterator of eliminarGasto) {
        iterator.addEventListener("click", (e) => {
            let gasto = e.target.parentNode.firstChild.nextSibling.textContent
            
            e.target.parentNode.remove();
            
            let listaActualizada = local.lista
            
            for (const key in listaActualizada) {
                
                if (listaActualizada[key].nombre == gasto) {
                    console.log("match")
                    cantidadPresupuesto.restante+=Number(listaActualizada[key].cantidad);
                    cantidadPresupuesto.comprobarPresupuesto();
                    local.guardarDatosDinero(cantidadPresupuesto.presupuesto, cantidadPresupuesto.restante, cantidadPresupuesto.alerta)
                    listaActualizada.splice(key,1)
                    const ui = new Interfaz();
                    ui.mostrarPresupuestoRestante(
                        cantidadPresupuesto.restante,
                        cantidadPresupuesto.alerta
                      );
                }
                
            }
            console.log(listaActualizada)   
            localStorage.setItem("lista", JSON.stringify(listaActualizada));
            //index = local.lista.indexOf(gasto);
            //console.log(index)
            
        })
    }
}  