import MegjelenitSor from "./MegjelenitSor.js";

class Megjelenit {
  lista = [];
  constructor(lista,szuloElem) {
    this.lista = lista;
    this.szuloElem = szuloElem;
    this.szuloElem.append("<table class='table table-bordered'></table>");
    this.megjelenites();
  }

  megjelenites() {
    this.lista.forEach((elem, index) => {
      new MegjelenitSor(elem, $(".table"), index);
    });


  }
}

export default Megjelenit;
