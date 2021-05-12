import { Badge, Drawer, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons"
import React, { useState } from "react";
import { useAppSelector } from "../../hooks/ReduxHooks";
import { FormatNumberAsMoney } from "../../utilities/FormatNumberAsMoney";
import LineItem from "./LineItem";

const CartComponent = () => {
	const cart = useAppSelector((state) => state.cart.cart);

	console.log(cart);

	const [menuOpen, setMenuOpen ] = useState(false);

	function openMenu() {
		setMenuOpen(true);
	}

	function closeMenu() {
		setMenuOpen(false);
	}

	let itemQuantity = 0;
	let subTotal = 0;
	let cartList: any = [];
	for (const [key, value] of Object.entries(cart)) {
		// console.log(`${key}: ${value}`);
		// cart.items.forEach(item => { itemQuantity += item.quantity });
		itemQuantity += value.quantity;
		subTotal += value.product.price * itemQuantity;
		console.log("Subtotal: " + subTotal)
		cartList.push(<LineItem id={value.product.id} name={value.product.name} price={value.product.price} quantity={value.quantity} currentInventory={value.product.inventory} />)
	}

	
	return(
		<div>
			 <IconButton aria-label="cart" onClick={openMenu}>
				<Badge badgeContent={itemQuantity} color="secondary">
					<ShoppingCart fontSize="large" />
				</Badge>
			</IconButton>
			<Drawer anchor="right" open={menuOpen} onClose={closeMenu}>
                    <div style={{
                        width: 300,
                        height: '100%',
                        backgroundColor: 'transparent',
                        color: 'black',
                        padding: 15,
						display: 'flex',
						flexDirection: 'column'
                    }}>
						<div style={{textAlign: 'center', paddingBottom: 10}}>
							<div style={{fontSize: '14pt'}}>Subtotal</div>
							<div style={{color: 'red'}}>{FormatNumberAsMoney(subTotal)}</div>
						</div>
						{cartList}
					</div>
			</Drawer>
		</div>
	)
}

export default CartComponent;