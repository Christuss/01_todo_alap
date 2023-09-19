class UrlapView {
    #adat = {}
    constructor(SZULOELEM) {
        this.#urlapLetrehozasa(SZULOELEM);
        this.formElem = $(".tarolo form");
        this.submitElem = this.formElem.children("div").children("#submit")
    }
    #adatGyujt() {

    }

    #urlapLetrehozasa(szuloElem){
        let s = `<form>
            <div class="form-group">
                <label for="tevekenyseg">tevekékenység</label>
                <input id="tevekenyseg">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>`;
        szuloElem.append(s);
    }

    #esemenyTrigger(esemenyneve) {
        const esemenyem = new CustomEvent(esemenyneve, {detail: this.#adat})
        window.dispatchEvent(esemenyem);
    }
}

export default UrlapView;