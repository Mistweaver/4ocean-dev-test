import { Button, Dialog, DialogContent, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useAppDispatch } from "../../../hooks/ReduxHooks";
import { Product } from "../../../objects/Product";
import AddToCartButton from "./AddToCartButton";

import { add } from '../../../slices/CartSlice';
import { Check } from "@material-ui/icons";
import { FormatNumberAsMoney } from "../../../utilities/FormatNumberAsMoney";

interface Props {
	product: Product;
	open: boolean;
	close: () => void;
}

const ProductPage = (props: Props) => {
	const [quantity, setQuantity] = useState(1);
	// responsiveness for when a user clicks add so they know their selection was added to their cart
	const [added, renderAdded] = useState(false);

	const dispatch = useAppDispatch();
	
	// dispatch the item and selected quantity
	function addToCart() {
		const { product } = props;
		dispatch(
			add({ 
				product: { 
					id: product.id,
					description: product.description,
					sku: product.sku,
					price: product.price,
					imageSrc: product.imageSrc,
					name: product.name,
					inventory: product.inventory
				},
				quantity
			})
		);
		// render the selection added jsx
		renderAdded(true);
	}

	function changeQuantity(event: { target: { value: string }}) {
		setQuantity(parseInt(event.target.value))
	}

	let quantitySelection = [];
	for(let i = 0; i < props.product.inventory; i++) {
		quantitySelection.push(
			<option key={i} value={i+1}>{i+1}</option>
		)
	}

	function close() {
		// this doesn't quite work and looks meh, but I hacked this together in 3 minutes
		props.close();
		renderAdded(false);
	}

	return(
		<Dialog open={props.open} onClose={close} maxWidth="md" fullWidth aria-labelledby="product-box">
			<DialogContent>
				<Grid container spacing={1}>
					<Grid item xs={8}>
						<div style={{height: 500, padding: 5, display: 'flex'}}>
							<img style={{margin: 'auto', width: '100%'}} src={props.product.imageSrc} alt="product" />
						</div>
					</Grid>
					<Grid item xs={4}>
						<div style={{paddingLeft: 15, borderLeft: '1px solid lightgrey', height: '100%'}}>
							<div style={{fontSize: '18pt', fontWeight: 600}}>{props.product.name}</div>
							<div style={{fontSize: '9pt', color: 'grey', marginBottom: 10}}>SKU: {props.product.sku}</div>
							<div style={{marginBottom: 20}}>{props.product.description}</div>
							<div style={{color: 'red', fontSize: '18pt', fontWeight: 500, marginBottom: 5}}>{FormatNumberAsMoney(props.product.price)}</div>
							<div style={{marginBottom: 10}}>
								{
									props.product.inventory > 0 ? <div style={{color: 'green'}}>{props.product.inventory} In Stock</div> : <div style={{color: 'grey'}}>Out of Stock</div>
								}
							</div>
							{
								props.product.inventory > 0 &&
								<div style={{display: 'flex', marginBottom: 10}}>
									<div style={{marginRight: 10}}>Qty:</div>
									<select value={quantity} onChange={changeQuantity} style={{padding: 5, borderRadius: 15, minWidth: 75}}>
										{quantitySelection}
									</select>
								</div>
							}
							
							{
								added ?
								<div>
									<div style={{padding: 10, borderRadius: 10, color: 'green', display: 'flex', textAlign: 'center', marginBottom: 10}}>
										<Check style={{color: 'green', marginTop: 'auto', marginBottom: 'auto', marginRight: 10}} />
										<div>Added to Cart!</div>
									</div>
									<Button variant="outlined" color="secondary" onClick={close}>Close</Button>
								</div>
								
								:
								<AddToCartButton quantity={props.product.inventory} add={addToCart} />
							}
						</div>
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	)
}

export default ProductPage;