import { Button } from "@material-ui/core";
import { Add, Delete, Remove } from "@material-ui/icons"
import React from "react";
import { useAppDispatch } from "../../hooks/ReduxHooks";
import { update } from '../../slices/CartSlice';
import { FormatNumberAsMoney } from "../../utilities/FormatNumberAsMoney";

interface Props {
    id: number;
    name: string;
    price: number;
    quantity: number;
    currentInventory: number;
}

const LineItem = (props: Props) => {

    const dispatch = useAppDispatch();

	// Use update function to add, subtract, and remove items from cart.
	// While the function calls may be different, the basic function is the same: get the current cart selection by id and modify it's quantity
    function addQuantity() {
        if(props.quantity < props.currentInventory) {
            let newQuantity = props.quantity + 1;
            dispatch(
                update({ id: props.id, quantity: newQuantity })
            );
        } 
    }

    function subtractQuantity() {
        if(props.quantity > 0) {
            let newQuantity = props.quantity - 1;
            dispatch(
                update({ id: props.id, quantity: newQuantity })
            );
        }
        
    }

    function removeFromCart() {
        dispatch(
            update({ id: props.id, quantity: 0 })
        );
    }
    
    return(
        <div style={{padding: 10, borderTop: '1px solid lightgrey', display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <div>{props.name}</div>
                <div>Qty: {props.quantity}</div>
                <div>Total: <span style={{color: 'red'}}>{FormatNumberAsMoney(props.quantity * props.price)}</span></div>
            </div>
            <div>
                <div style={{padding: 5, marginBottom: 5, backgroundColor: 'lightgrey', borderRadius: 5, display: 'flex'}}>
                    <Add onClick={addQuantity} style={{borderRight: '1px solid black', margin: 'auto', paddingRight: 3, cursor: 'pointer'}}/>
                    <Remove onClick={subtractQuantity} style={{paddingLeft: 3, cursor: 'pointer'}}/>
                </div>
                <Button onClick={removeFromCart} variant="contained"><Delete style={{color: 'red'}} /></Button>
            </div>
        </div>
    )
}

export default LineItem;