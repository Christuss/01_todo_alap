class MegjelenitSor {
    #obj = {}
    constructor(obj, szuloElem) {
        this.#obj = obj
        this.szuloElem = szuloElem
        this.#sor()
        this.sorElem = this.szuloElem.children("tr:last-child");
        this.xElem = this.sorElem.children(".x");
        this.xElem.css("display", "none");
        this.keszElem = this.sorElem.children(".pipa");
        this.kukaElem = this.sorElem.children(".kuka");

        this.keszElem.on('click', () => {
            this.#esemenyTrigger("kesz");
            this.sorElem.css("background-color", "lightgreen");
            this.keszElem.css("display", "none");
            this.xElem.css("display", "inline");
        })
        this.xElem.on('click', () => {
            this.sorElem.css("background-color", "white");
            this.xElem.css("display", "none");
            this.keszElem.css("display", "inline");
        })
        
    }
    #sor(){
       let s = "<tr>";
      for (const key in this.#obj) {
        s += "<td>" + this.#obj[key] + "</td>";
      }
      s +=
        "<td class = 'pipa'>✔</td><td class = 'x'>❌</td><td class = 'kuka'>🗑</td></tr>";
        this.szuloElem.append(s);
    }

    #esemenyTrigger(esemenyneve) {
        const esemenyem = new CustomEvent(esemenyneve, {detail:this})
        window.dispatchEvent(esemenyem);
    }

}

export default MegjelenitSor;