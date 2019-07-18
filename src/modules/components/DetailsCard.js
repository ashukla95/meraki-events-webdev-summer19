import React from 'react'
import {Card, makeStyles} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

const styleCustom = makeStyles({
    /*Set the css property for the card to be rendered after retrieval of the data from the back-end service.*/
    card: {
        margin: 10,
        padding: 10,
    },
    link: {
        textDecoration: "none",
        color: "black",
    }
});

/*Stateless component that renders the card with the information obtained from the parent component.*/
const DetailsCard = ({
                         result,
                         imageHeight,
                         showLearnMore

                     }) => {
    const classes = styleCustom();
    return (
            <Card raised
                  margin={2}
                  className={classes.card}>
                {console.log("result: ", result)}
                <Link className={classes.link} to={`/property/${result.place_id}/`}>
                    <CardActionArea>
                        <CardMedia
                            height={imageHeight}
                            component="img"
                            alt={result["name"]}
                            image="https://picsum.photos/id/870/500/500?"
                            title={result["name"]}/>
                        <CardContent>
                            <Typography variant={"body1"} component={"p"}>
                                {result["name"]}
                            </Typography>
                            <Grid container  justify={"space-between"}>
                                <Grid item>
                                    <Typography gutterBottom
                                                variant="body1"
                                                component="p">
                                        {result["description"] ? result["description"] : result["formatted_address"]}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    {showLearnMore &&
                                    <Typography gutterBottom
                                                align={"right"}
                                                variant="body1"
                                                component="p"
                                                mt={2}>
                                        Google Ratings: {result["rating"]}
                                    </Typography>}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions>
                    <Button size="small"
                            color="primary" href={`/book-now/`}>
                        Book Now
                    </Button>
                    {!showLearnMore &&
                        <Link  className={classes.link} to={`/property/${result.place_id}/`}>
                            <Button size="small"
                                    color="primary">
                                Learn More
                            </Button>
                        </Link>}

                </CardActions>
            </Card>
    );
};

export default DetailsCard;
