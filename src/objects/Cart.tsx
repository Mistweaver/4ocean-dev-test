import { CartSelection } from "./CartSelection";

export interface Cart {
	// the key for your cart is the product id.  This allows faster and cleaner access of existing cart items
    [key: string]: CartSelection;
}