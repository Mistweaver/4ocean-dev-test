import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSelection } from '../objects/CartSelection';

interface CartState {
	items: CartSelection[];
}

const initialState: CartState = {
	items: []
}

function updateCartSelection(cart: CartSelection[], selection: CartSelection) {
	console.log("Updating cart selection");
	console.log(selection);
	// create new cart array
	let newArray: CartSelection[] = [];
	// check if the selection already exists
	let existingSelectionIndex = cart.findIndex(item => item.product.id === selection.product.id);
	console.log(existingSelectionIndex);
	// if found, update the existing selection
	if(existingSelectionIndex !== -1) {
		// if the selection quantity is zero, just remove it from the array and return a new array
		if(selection.quantity === 0) {
			newArray = cart.slice();
			newArray.splice(existingSelectionIndex, 1);
		} else {
			// else update the item and quantity
			newArray = cart.map((item, index) => {
				if (index !== existingSelectionIndex) {
					// This isn't the item we care about - keep it as-is
					return item
				}
				// Otherwise, this is the one we want - return an updated item selection
				return {
					...item,
					...selection
				}
			});
		}
	} else {
		// otherwise add the new item
		console.log("Adding new item");
		newArray = [...cart, selection];
	}
	console.log(newArray);
	return newArray;
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		updateCart: (state, action: PayloadAction<CartSelection>) => {
			state.items = updateCartSelection(state.items, action.payload);
		},
		empty:  (state, action: PayloadAction<{id: string, quantity: number}>) => {
			state.items = [];
		},
	}
});

export const { updateCart, empty } = cartSlice.actions;

export default cartSlice.reducer;

