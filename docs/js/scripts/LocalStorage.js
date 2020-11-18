class LocalStorage {
  constructor() {
    this.presupuesto = Number(localStorage.getItem("presupuesto"));
    this.restante = Number(localStorage.getItem("restante"));
    this.alerta = localStorage.getItem("alerta");
    this.estado = localStorage.getItem("token");
    
  }
  guardarToken(token = false) {
    this.estado = token;
    localStorage.setItem("token", this.estado);
    localStorage.setItem("lista", "[ ]");
  }

  guardarDatosDinero(presupuesto, restante, alerta) {
    localStorage.setItem("presupuesto", presupuesto);
    localStorage.setItem("restante", restante);
    localStorage.setItem("alerta", alerta);
  }
  
  guardarListaGastos(nombre, cantidad) {
    this.listaString = localStorage.getItem("lista");
    this.lista = JSON.parse(this.listaString)
    console.log(this.lista)
    this.lista.push({ nombre: nombre, cantidad: cantidad });
    localStorage.setItem("lista", JSON.stringify(this.lista));
    //console.log(this.gastos);
  }
  
  imprimirDatosLocalIniciales(){
      console.log(this.presupuesto);
      console.log(this.restante);
      console.log(this.alerta);
      console.log(this.estado);
  }
}
