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
import Rating from 'react-rating'
import Box from "@material-ui/core/Box";

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
	                     showLearnMore,
	                     merakiRating

                     }) => {
	console.log("result: ", result);
	const classes = styleCustom();
	return (
		<Card raised
		      margin={2}
		      className={classes.card}>
			<Link className={classes.link} to={`/property/${result.place_id}/`}>
				<CardActionArea>
					<CardMedia
						height={imageHeight}
						component="img"
						alt={result["name"]}
						image="https://picsum.photos/id/870/500/500?"
						title={result["name"]}/>
					<CardContent>
						<Grid container justify={"space-between"}>
							<Grid item>
								<Typography variant={"body1"} component={"p"}>
									{result["name"]}
								</Typography>
							</Grid>

							<Grid item>
								<Grid container spacing={1} direction={"row"} justify={"space-between"}>
									<Grid item>
										<Typography variant={"body1"} component={"p"}>
											Meraki Rating:
										</Typography>
									</Grid>
									<Grid item>
										<Rating initialRating={merakiRating}
										        readonly
										        stop={5}
										        emptySymbol={['fa fa-star-o  red']}
										        fullSymbol={['fa fa-star  red']}/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid container justify={"space-between"}>
							<Grid item>
								<Typography gutterBottom
								            variant="body1"
								            component="p">
									{result["description"] ? result["description"] : result["formatted_address"]}
								</Typography>
							</Grid>
							<Grid item>
								{
									showLearnMore &&
									<Grid container spacing={1} direction={"row"} justify={"space-between"}>
										<Grid item>
											<Typography variant={"body1"} component={"p"}>
												Google Rating:
											</Typography>
										</Grid>
										<Grid item>
											<Rating initialRating={result["rating"]}
											        readonly
											        stop={5}
											        emptySymbol={['fa fa-star-o  red']}
											        fullSymbol={['fa fa-star  red']}/>
										</Grid>
									</Grid>
								}
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
				<Link className={classes.link} to={`/property/${result.place_id}/`}>
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
