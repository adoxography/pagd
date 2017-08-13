class Datalist {
	constructor(text = "", id = "", extra = "") {
		this.text = text;
		this.id = id;
        this.extra = extra;
	}

    reset() {
        this.text = "";
        this.id = "";
        this.extra = "";
    }
}

export { Datalist }
