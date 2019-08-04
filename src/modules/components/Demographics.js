import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {CardContent} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
	cardname:{
		border: "none",
		textAlign: "center",
	}
});

const Demographics = () => {
	const classes = useStyles();
	return(
		<React.Fragment>
			<Grid item
			      sm={12}
			      md={12}
			      lg={12}>
				<p className={classes.cardname}>
					Demographics
				</p>
				<Card className={classes.card}>
					<CardActionArea>
						<CardMedia
							component="img"
							alt="Profile Picture"
							height="140"
							image="https://picsum.photos/200/300"
							title="Profile Picture"
						/>
						<CardContent>
							<Box container={true} justify={"space-between"} m={2}>
								<Grid item>
									Name
								</Grid>
								<Grid item>
									Aishwary Shukla
								</Grid>

								<Grid item>
									DOB
								</Grid>
								<Grid item>
									September 27, 1995
								</Grid>
							</Box>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</React.Fragment>
	);
};

export default Demographics;

