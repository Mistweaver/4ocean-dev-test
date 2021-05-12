import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart } from '../objects/Cart';
import { CartSelection } from '../objects/CartSelection';

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
			let selection = cart[id];
			selection.quantity = quantity;
			return {...cart, [selection.product.id]: selection };
		}
	} else {
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

export const { add, update, empty } = cartSlice.actions;

export default cartSlice.reducer;

