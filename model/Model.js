import { TODOLIST2 } from "./adatok.js";

class Model {
    #list = []
    constructor() {
        this.#list = TODOLIST2;
    }

    //visszaadjuk a prog akt áll
    getList() {
        return this.#list;
    }

    torol(index) {
        this.#list.splice(index, 1);
    }

    setTrue(index){
        this.#list[index].kesz = true;
        console.log(this.#list[index].kesz);
    }

    setFalse(index){
        this.#list[index].kesz = false;
        console.log(this.#list[index].kesz);
    }
}

export default Model;