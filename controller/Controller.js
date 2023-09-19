import Model from "../model/Model.js";
import Megjelenit from "../view/Megjelenit.js"
import UrlapView from "../view/UrlapView.js";

class Controller {
    constructor() {
        const SZULOELEM = $(".tarolo");
        const MODEL = new Model();
        const URLAP = new UrlapView(SZULOELEM);

        new Megjelenit(MODEL.getList(), SZULOELEM);

    $(window).on("torol", function (event) {
        console.log(event.detail);
        MODEL.torol(event.detail);
        SZULOELEM.empty();
        new Megjelenit(MODEL.getList(), SZULOELEM);
    })
    $(window).on("kesz", function (event) {
        MODEL.setTrue(event.detail);
        SZULOELEM.empty();
        new Megjelenit(MODEL.getList(), SZULOELEM);
    })
    $(window).on("megse", function (event) {
        MODEL.setFalse(event.detail);
        SZULOELEM.empty();
        new Megjelenit(MODEL.getList(), SZULOELEM);
    })
    }
}

export default Controller;