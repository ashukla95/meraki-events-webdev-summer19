import React from 'react'
import {Card, makeStyles} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

const styleCustom = makeStyles({
    /*Set the css property for the card to be rendered after retrieval of the data from the back-end service.*/
    card: {
        margin: 10,
        padding: 10,
        maxHeight: 500
    },
    cardContent: {
        height: 70
    },
});

/*Stateless component that renders the card with the information obtained from the parent component.*/
const DetailsCard = ({
                         result,
                         imageHeight,
                         showLearnMore

                     }) => {
    const classes = styleCustom();
    return (
            <Card className={classes.card} raised m={2}>
                <CardActionArea>
                    <CardMedia
                        height={imageHeight}
                        component="img"
                        alt={result["name"]}
                        image="https://picsum.photos/id/870/500/500?"
                        title={result["name"]}/>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom
                                    variant="body1"
                                    component="p">
                            {result["description"] ? result["description"] : result["formatted_address"]}
                        </Typography>
                        {showLearnMore ?
                            <Typography gutterBottom
                                        align={"right"}
                                        variant="body1"
                                        component="p">
                                Google Ratings: {result["rating"]}
                            </Typography>
                            :
                            <p>
                            </p>}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small"
                            color="primary" href={`/book-now/`}>
                        Book Now
                    </Button>
                    {!showLearnMore ?
                        <Link to={`/property/${result.place_id}/`}>
                            <Button size="small"
                                    color="primary">
                                Learn More
                            </Button>
                        </Link>
                         :
                        <div>
                        </div>}

                </CardActions>
            </Card>
    );
};

export default DetailsCard;
