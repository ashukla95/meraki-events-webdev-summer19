import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Card} from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import { sizing, width } from '@material-ui/system';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

let screenWidth = window.screen.width;
const styleCustom = makeStyles({
    card: {
        maxWidth: 0.95 * screenWidth,
        margin: 0.01 * screenWidth,
        padding: 0.01 * screenWidth,
        marginLeft: 0.02 * screenWidth
    },
});

const SearchResult = ({resultsFound}) => {
    const classes = styleCustom();
    return Array.from(resultsFound).map(result =>
        <Card className={classes.card} width={"100%"}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://picsum.photos/id/237/200/300"
                    title={result["name"]}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {result["name"]}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {result["formatted_address"]}
                    </Typography>
                    <Typography component={"div"} display={"inline"}>
                        <Typography variant="body2" color="textSecondary" align={"right"} inline>
                            Rating
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align={"right"} inline>
                            {result["rating"]}
                        </Typography>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Book Now
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default SearchResult;
