import { Grid, Card } from "@material-ui/core";
import React, { useState } from "react";

const Collections = () => {

    return(
        <div style={{marginTop: 25, marginBottom: 20}}>
            

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card>
                        <div style={{height: 200}} />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <div style={{height: 200}} />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <div style={{height: 200}} />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Collections;