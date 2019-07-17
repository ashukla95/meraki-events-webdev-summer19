import React from 'react'
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

/*Stateless component that renders the card with the information obtained from the parent component.*/
const DetailsCard = ({
    classes,
    result
}) => {
    return (
        <Grid className={classes.innerGrid} item lg={6} md={6} sm={12}>
            <Card className={classes.card} raised m={2}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={result["name"]}
                        height="200"
                        width={345}
                        image="https://picsum.photos/id/870/200/300?grayscale&blur=2"
                        title={result["name"]} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {result["description"]}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small"
                        color="primary" href={`/boook-now/`}>
                        Book Now
                    </Button>
                    <Button size="small"
                        color="primary"
                        href={`/property/${result.place_id}/`}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default DetailsCard;
