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
        marginLeft: 0.01 * screenWidth
    },


});

const SearchResult = ({resultsFound}) => {
    const classes = styleCustom();
    return Array.from(resultsFound).map(result =>
        <Grid alignContent={"center"}
              alignItems={"center"}
              container
              spacing={3}
              justify={"center"}>
            <Grid className={classes.innerGrid} item lg={6} md={6} sm={12}>
                <Card className={classes.card} width={"100%"} raised >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={result["name"]}
                            height="200"
                            width={screenWidth/2}
                            image="https://picsum.photos/200/300/?grayscale&blur"
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
                                <Typography variant="body2" color="textSecondary" align={"right"}>
                                    Rating
                                </Typography>
                                <Typography variant="body2" color="textSecondary" align={"right"}>
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
            </Grid>
        </Grid>

    );
};

export default SearchResult;
