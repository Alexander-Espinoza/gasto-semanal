class Presupuesto {
  constructor(presupuesto = 0, restante = 0) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(restante);
    this.alerta = "baja";
  }

  presupuestoRestante(cantidad = 0) {
    this.restante -= cantidad;
    this.comprobarPresupuesto();
    //this.guardarLocal();
    return this.restante;
  }
  comprobarPresupuesto() {
    console.log("Comprobando");
    if (this.restante < this.presupuesto / 4) {
      this.alerta = "alta";
    } else if (this.restante < this.presupuesto / 2) {
      this.alerta = "media";
    } else {
      this.alerta = "baja"
    }
  }
  /* leerLocal() {
    this.presupuesto = Number(localStorage.getItem("presupuesto"));
    this.restante = Number(localStorage.getItem("restante"));
    this.alerta = localStorage.getItem("alerta");
  } */
  /*   guardarLocal() {
    localStorage.setItem("presupuesto", this.presupuesto);
    localStorage.setItem("restante", this.restante);
    localStorage.setItem("alerta",this.alerta);
  } */
}
