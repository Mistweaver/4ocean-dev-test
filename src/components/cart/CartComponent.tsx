import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons"
import { useAppSelector } from "../../hooks/ReduxHooks";

const CartComponent = () => {
	const cart = useAppSelector((state) => state.cart.cart);

	let itemQuantity = 0;
	for (const [key, value] of Object.entries(cart)) {
		// console.log(`${key}: ${value}`);
		// cart.items.forEach(item => { itemQuantity += item.quantity });
		itemQuantity += value.quantity;
	}

	return(
		<div>
			 <IconButton aria-label="cart">
				<Badge badgeContent={itemQuantity} color="secondary">
					<ShoppingCart fontSize="large" />
				</Badge>
			</IconButton>
		</div>
	)
}

export default CartComponent;