export class Product {
	id: string;
	name: string;
	sku: string;
	description: string;
	price: number;
	inventory: number;

	constructor() {
		this.id = "";
		this.name = "Test";
		this.sku = "#495FJALKF8";
		this.description = "This is a test description, describing the test product in a testy manner";
		this.price = 0;
		this.inventory = 0;
	}
}