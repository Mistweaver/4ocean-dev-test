import { Dialog, DialogContent, Grid } from "@material-ui/core";
import { useState } from "react";
import { useAppDispatch } from "../../../hooks/ReduxHooks";
import { Product } from "../../../objects/Product";
import AddToCartButton from "./AddToCartButton";

import { add } from '../../../slices/CartSlice';

interface Props {
	product: Product;
	open: boolean;
	close: () => void;
}

const ProductPage = (props: Props) => {
	const [quantity, setQuantity] = useState(1);

	const dispatch = useAppDispatch();
	
	function addToCart() {
		const { product } = props;
		dispatch(
			add({ 
				product: { 
					id: product.id,
					description: product.description,
					sku: product.sku,
					price: product.price,
					name: product.name,
					inventory: product.inventory
				},
				quantity
			})
		);
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

	return(
		<Dialog open={props.open} onClose={props.close} maxWidth="md" fullWidth aria-labelledby="product-box">
			<DialogContent>
				<Grid container spacing={1}>
					<Grid item xs={8}>
						<div style={{height: 500, padding: 5, display: 'flex'}}>
							<img style={{margin: 'auto', width: '100%'}} src="https://img.themanual.com/image/themanual/the-boring-company-flamethrower-v2.jpg" alt="product" />
						</div>
					</Grid>
					<Grid item xs={4}>
						<div style={{paddingLeft: 15, borderLeft: '1px solid lightgrey', height: '100%'}}>
							<div style={{fontSize: '18pt', fontWeight: 600}}>{props.product.name}</div>
							<div style={{fontSize: '9pt', color: 'grey', marginBottom: 10}}>SKU: {props.product.sku}</div>
							<div style={{marginBottom: 20}}>{props.product.description}</div>
							<div style={{color: 'red', fontSize: '18pt', fontWeight: 500, marginBottom: 5}}>$24.99</div>
							<div style={{marginBottom: 10}}>
								{
									props.product.inventory > 0 ? <div style={{color: 'evergreen'}}>In Stock</div> : <div style={{color: 'grey'}}>Out of Stock</div>
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
							<AddToCartButton quantity={props.product.inventory} add={addToCart} />
						</div>
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	)
}

export default ProductPage;