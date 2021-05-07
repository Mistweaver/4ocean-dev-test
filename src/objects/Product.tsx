export class Product {
	id: string;
	name: string;
	sku: string;
	description: string;
	price: number;
	inventory: number;

	constructor() {
		this.id = "";
		this.name = "";
		this.sku = "";
		this.description = "";
		this.price = 0;
		this.inventory = 0;
	}
}