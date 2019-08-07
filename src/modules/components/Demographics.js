import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	dataPanel: {
		marginTop: 8
	},


});

const Demographics = ({ profileData }) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<Card>
					<CardActionArea>
						<CardMedia
							component="img"
							alt="Profile Picture"
							height="140"
							image="https://picsum.photos/200/300"
							title="Profile Picture"
						/>
						<CardContent>
							{
								/*This code iterates over the json data directly thereby eliminating the need to pass props separately.*/
								<React.Fragment >
									<Grid className={classes.dataPanel} item xs={12} sm={6} md={6} lg={6}>
										{Object.keys(profileData).map(entry => 
										<Typography 
											key={entry}
											display={"block"}
											align={"center"}
											gutterBottom={false}
											variant={"subtitle2"}
											component={"p"}>
											{profileData[entry]}
										</Typography>)}
									</Grid>
								</React.Fragment>}
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</React.Fragment>
	);
};

export default Demographics;

