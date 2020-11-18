class Gastos {
  constructor() {
    this.gastos = [];
  }

  guardarLista(nombre, cantidad) {
    this.gastos.push({ nombre: nombre, cantidad: cantidad });
    localStorage.setItem("lista", JSON.stringify(this.gastos));
    console.log(this.gastos);
  }

  leerLista() {
    this.lista = localStorage.getItem("lista");
    this.listaJSON = JSON.parse(this.listaJSON);
    return this.listaJSON;
  }
}
