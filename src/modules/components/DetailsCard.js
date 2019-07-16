import React from 'react'
import Grid from "@material-ui/core/Grid";
import {Card} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";



const DetailsCard = ({classes,
                         result,
                         screenWidth}) => {
    return (

            <Grid className={classes.innerGrid} item lg={6} md={6} sm={12}>
                <Card className={classes.card} width={"100%"} raised >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={result["name"]}
                            height="200"
                            width={screenWidth/2}
                            image="https://picsum.photos/id/870/200/300?grayscale&blur=2"
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
    );
};

export default DetailsCard;
