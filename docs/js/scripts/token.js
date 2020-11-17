class Token {
  constructor(token = false) {
    this.estado = token;
  }
  guardarToken(token = false) {
    this.estado = token;
    localStorage.setItem("token", this.estado);
  }
  leerToken() {
    this.estado = localStorage.getItem("token");
    //console.log(this.estado);
    return this.estado
  }
}
