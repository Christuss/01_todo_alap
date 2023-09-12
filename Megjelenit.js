class Megjelenit {
    lista = []
    constructor (lista) {
        this.lista = lista
        this.megjelenites();
    }

    megjelenites() {
        let s =  "<table class= 'table'>"
        for (let index = 0; index < this.lista.length; index++) {
            s += "<tr><td>" + this.lista[index] + "</td></tr>";
            
        }
        s += "</tables>"

        $(".tarolo").html(s);
    }
}

export default Megjelenit;