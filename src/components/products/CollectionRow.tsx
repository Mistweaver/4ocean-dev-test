import { Grid, Typography } from "@material-ui/core";
import { Collection } from "../../objects/Collection";
import { Product } from "../../objects/Product";
import ProductBox from "./ProductBox";

interface Props {
    collection: Collection;
}

const CollectionRow = (props: Props) => {
    /*let collection = new Collection();
    collection.name="New Collection";
    collection.products.push(new Product());
    collection.products.push(new Product());
    collection.products.push(new Product());*/

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