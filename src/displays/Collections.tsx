import { Grid, Card } from "@material-ui/core";

const Collections = () => {

    return(
        <div style={{marginBottom: 35}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card>
                        <div style={{height: 300}} />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <div style={{height: 300}} />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <div style={{height: 300}} />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Collections;