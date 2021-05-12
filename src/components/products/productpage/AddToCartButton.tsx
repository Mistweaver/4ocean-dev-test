import { makeStyles, createStyles } from "@material-ui/core";

interface Props {
    quantity: number;
    add: () => void;
}

const useStyles = makeStyles(() => 
    createStyles({
		button: {
			padding: 8,
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: 20,
            background: '#FFD814',
            borderColor: '#FCD200',
            "&:hover": {
                background: '#F7CA00',
                borderColor: '#F2C200',
                boxShadow: '0 2px 5px 0 rgb(213 217 217 / 50%)'
            }
		},
        empty: {
            padding: 8,
            textAlign: 'center',
            borderRadius: 20,
            color: 'grey',
            backgroundColor: 'lightgrey',
            opacity: 0.8
        }
    })
    
)


const AddToCartButton = (props: Props) => {
    const classes = useStyles();
	// render the disabled button styling if the product has zero inventory
    if(props.quantity > 0) {
        return(
            <div className={classes.button} onClick={props.add}>
                Add to Cart
            </div>
        )
    } else {
        return(
            <div className={classes.empty}>
                Add to Cart
            </div>
        )
    }
}

export default AddToCartButton;