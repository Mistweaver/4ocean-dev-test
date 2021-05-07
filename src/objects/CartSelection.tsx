import { Product } from "./Product";

export class CartSelection {
	product: Product;
	quantity: number;

	constructor() {
		this.product = new Product();
		this.quantity = 0;
	}
}