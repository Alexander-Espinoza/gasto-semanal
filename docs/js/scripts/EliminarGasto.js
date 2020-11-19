
window.onload = function () {
    const eliminarGasto = document.querySelectorAll(".eliminar");
    for (const iterator of eliminarGasto) {
        iterator.addEventListener("click", (e) => {
            let gasto = e.target.parentNode.firstChild.nextSibling.textContent
            console.log("Aqui")
            e.target.parentNode.remove();
            console.log(local.lista)
            let listaActualizada = local.lista
            console.log(listaActualizada)
            for (const key in listaActualizada) {
                
                if (listaActualizada[key].nombre == gasto) {
                    console.log("match")
                    cantidadPresupuesto.restante+=Number(listaActualizada[key].cantidad);
                    
                    local.guardarDatosDinero(cantidadPresupuesto.presupuesto, cantidadPresupuesto.restante, cantidadPresupuesto.alerta)
                    listaActualizada.splice(key,1)
                    
                }
                
            }
            console.log(listaActualizada)   
            localStorage.setItem("lista", JSON.stringify(listaActualizada));
            //index = local.lista.indexOf(gasto);
            //console.log(index)
            
        })
    }
    
    }