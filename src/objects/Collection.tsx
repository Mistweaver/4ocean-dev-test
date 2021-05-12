import { Product } from "./Product";

export class Collection {
	id: number;
	name: string;
	products: Product[];

	constructor() {
		this.id = 0;
		this.name = "";
		this.products = [];
	}
}