export class Product {
	id: number;
	name: string;
	sku: string;
	imageSrc: string;
	description: string;
	price: number;
	inventory: number;

	// constructor initialized for testing purposes before the mock API was built
	constructor() {
		this.id = 0;
		this.name = "Test";
		this.sku = "#495FJALKF8";
		this.imageSrc = "https://img.themanual.com/image/themanual/the-boring-company-flamethrower-v2.jpg";
		this.description = "This is a test description, describing the test product in a testy manner";
		this.price = 5;
		this.inventory = 5;
	}
}