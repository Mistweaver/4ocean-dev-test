import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart } from '../objects/Cart';
import { CartSelection } from '../objects/CartSelection';

// your cart state will be of type Cart, with product id's used as keys for access
interface CartState {
    cart: Cart;
}

const initialState: CartState = { cart: {}}

function addToCart(cart: Cart, selection: CartSelection) {
	if(cart.hasOwnProperty(selection.product.id)) {
		// product already in cart, add to existing quantity
		let newQuantity = cart[selection.product.id].quantity + selection.quantity;
		let updatedSelection = { ...selection, quantity: newQuantity };
		return {...cart, [selection.product.id]: updatedSelection };
	} else {
		// this product isn't in the cart, just add it as a new entry
		return { ...cart, [selection.product.id]: selection}
	}
}

function updateQuantity(cart: Cart, id: number, quantity: number) {
	if(cart.hasOwnProperty(id)) {
		if(quantity === 0) {
			// if the quantity is zero, just remove the property from the cart
			let newCart = {...cart};
  			delete newCart[id];
  			return newCart;
		} else {
			// we are not removing the item from the cart, just increasing/decreasing quantity by some amount
			let selection = cart[id];
			selection.quantity = quantity;
			return {...cart, [selection.product.id]: selection };
		}
	} else {
		// product doesn't exist, just return the cart
		// this case shouldn't be enterable, but if it occurs some error handling should happen
		return cart;
	}
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<CartSelection>) => {
			state.cart = addToCart(state.cart, action.payload);
		},
		update:(state, action: PayloadAction<{id: number, quantity: number}>) => {
			state.cart = updateQuantity(state.cart, action.payload.id, action.payload.quantity);
		},
		empty:  (state, action: PayloadAction<{}>) => {
			state.cart = {};
		},
	}
});

// export the actions
export const { add, update, empty } = cartSlice.actions;

export default cartSlice.reducer;

