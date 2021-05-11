import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons"
import { useAppSelector } from "../../hooks/ReduxHooks";

const Cart = () => {
	const cart = useAppSelector((state) => state.cart);
	console.log("Cart: ");
	console.log(cart);

	let itemQuantity = 0;
	cart.items.forEach(item => { itemQuantity += item.quantity });

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

export default Cart;