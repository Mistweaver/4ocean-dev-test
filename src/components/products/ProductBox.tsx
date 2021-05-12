import { Card } from "@material-ui/core";
import React, { useState } from "react";
import { Product } from "../../objects/Product";
import ProductPage from "./productpage/ProductPage";

interface Props {
	product: Product;
}

const ProductBox = (props: Props) => {
	// when a user clicks on the product box, render the dialog component so they can add the product to their cart
	const [productPageOpen, setRender ] = useState(false);
	// render the product box
	return(
		<>
			<Card onClick={() => setRender(true)} style={{cursor: 'pointer'}}>
				<div style={{height: 250, padding: 5, display: 'flex'}}>
					<img style={{margin: 'auto', width: '100%'}} src={props.product.imageSrc} alt="product" />
				</div>
			</Card>
			<ProductPage 
				product={props.product}
				open={productPageOpen}
				close={() => setRender(false)}
            />
		</>
	)
}

export default ProductBox;