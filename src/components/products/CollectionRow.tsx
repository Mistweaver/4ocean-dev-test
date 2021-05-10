import { Grid, Card, Typography } from "@material-ui/core";
import React from "react";
import { Collection } from "../../objects/Collection";
import { Product } from "../../objects/Product";
import ProductBox from "./ProductBox";

interface Props {

}

const CollectionRow = (props: Props) => {
    let collection = new Collection();
    collection.name="New Collection";
    collection.products.push(new Product());
    collection.products.push(new Product());
    collection.products.push(new Product());

    return(
        <div style={{marginBottom: 20}}>
            <Typography variant="h5" gutterBottom>{collection.name}</Typography>
            <Grid container spacing={2}>
                {
                    collection.products.map(product => (
                        <Grid key={product.id} item xs={4}>
                            <ProductBox 
                                product={product}
                            
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default CollectionRow;