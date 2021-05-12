import { Product } from "./Product";

// each cart selection is it's product data and the quantity
export interface CartSelection {
	product: Product;
	quantity: number;
}