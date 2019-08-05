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
	cardname: {
		border: "none",
		textAlign: "center",
	},
	dataPanel :{
		marginTop: 8
	}
});

const Demographics = ({profileData}) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid item
			      sm={12}
			      md={12}
			      lg={12}>
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
							<Grid direction={"row"} container={true} justify={"space-between"} m={2}>
								{
									Object.keys(profileData).map(key => (
										<React.Fragment key={key}>
											<Grid className={classes.dataPanel} item sm={6} md={6} lg={6}>
												{key}
											</Grid>
											<Grid className={classes.dataPanel} item sm={6} md={6} lg={6}>
												{profileData[key]}
											</Grid>
										</React.Fragment>
									))
								}

							</Grid>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</React.Fragment>
	);
};

export default Demographics;

