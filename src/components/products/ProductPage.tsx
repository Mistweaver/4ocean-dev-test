import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Product } from "../../objects/Product";

interface Props {
	product: Product;
	open: boolean;
	close: () => void;
}

const ProductPage = (props: Props) => {

	function addToCart() {

	}

	return(
		<Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title">
        	<DialogTitle id="form-dialog-title">{props.product.name}</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To subscribe to this website, please enter your email address here. We will send updates
					occasionally.
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Email Address"
					type="email"
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
			<Button onClick={props.close} color="primary">
				Cancel
			</Button>
			<Button onClick={props.close} color="primary">
				Subscribe
			</Button>
			</DialogActions>
		</Dialog>
	)
}

export default ProductPage;