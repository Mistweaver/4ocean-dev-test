import { Card } from "@material-ui/core";
import React, { useState } from "react";
import { Product } from "../../objects/Product";
import ProductPage from "./ProductPage";

interface Props {
	product: Product;
}

const ProductBox = (props: Props) => {
	const [productPageOpen, setRender ] = useState(false);

	return(
		<>
			<Card onClick={() => setRender(true)} style={{cursor: 'pointer'}}>
				<div style={{height: 200}} />
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