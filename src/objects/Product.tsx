export class Product {
	id: string;
	name: string;
	sku: string;
	description: string;
	price: number;
	inventory: number;

	constructor() {
		this.id = "12345";
		this.name = "Test";
		this.sku = "#495FJALKF8";
		this.description = "This is a test description, describing the test product in a testy manner";
		this.price = 5;
		this.inventory = 5;
	}
}