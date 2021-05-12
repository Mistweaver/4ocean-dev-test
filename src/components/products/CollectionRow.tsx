import { Grid, Typography } from "@material-ui/core";
import { Collection } from "../../objects/Collection";
import ProductBox from "./ProductBox";

interface Props {
    collection: Collection;
}

const CollectionRow = (props: Props) => {
	// render the collections name and it's products
    return(
        <div style={{paddingTop: 20, borderTop: '1px solid lightgrey', marginBottom: 35}}>
            <Typography variant="h5" gutterBottom>{props.collection.name}</Typography>
            <Grid container spacing={2}>
                {
                    props.collection.products.map(product => (
                        <Grid key={product.id} item xs={4}>
                            <ProductBox product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default CollectionRow;