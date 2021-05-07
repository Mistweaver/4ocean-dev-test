import { Product } from "./Product";

export class Collection {
	id: string;
	name: string;
	products: Product[];

	constructor() {
		this.id = "";
		this.name = "";
		this.products = [];
	}
}