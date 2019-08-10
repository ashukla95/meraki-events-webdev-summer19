import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Card} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/icons/Lock"
import LockOpenIcon from "@material-ui/icons/LockOpen"
import DeleteIcon from "@material-ui/icons/Delete"
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Hidden from '@material-ui/core/Hidden';
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
	title: {
		alignItems: 'center',
		alignContent: 'center',
		margin: 10
	},

	iconButton: {
		float: 'right'
	},

	eventCard: {
		marginTop: 10,
		backgroundColor: "#f9f9f9"
	},


});

const Events = ({section, events, changeVisibiltiy, profileId}) => {
	console.log("profile id: ", profileId);
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid className={classes.title}
			      item
			      xs={12}
			      sm={12}
			      md={12}
			      lg={12}>
				<Typography align={"justify"}
				            variant={"h6"}
				            display={"inline"}
				            gutterBottom={true}
				            component={"p"}>{section}
				</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}>
				{(typeof events !== "undefined" && events.length !== 0) ? events.map(event => (
						(typeof profileId === "undefined"
					|| typeof profileId !== "undefined" && !event.isPrivate) &&  <Card key={new Date().getTime()} className={classes.eventCard}>

						<Grid container spacing={2}>
							<Grid item xs={6} sm={6} md={4} lg={3}>
								<Box p={3}>
									<Typography align={"left"} variant={"body1"} component={"p"}>
										{event.eventName}
									</Typography>
								</Box>
							</Grid>
							<Hidden smDown xsDown>
								<Grid item xs={6} sm={2} md={2} lg={3}>
									<Box p={3}>
										<Typography align={"right"} variant={"body1"} component={"p"}>
											{new Date(event.date).getDate()+'/'+new Date(event.date).getMonth()+'/'+new Date(event.date).getFullYear()}
										</Typography>
									</Box>
								</Grid>
							</Hidden>
							<Hidden smDown xsDown>
								<Grid item xs={6} sm={4} md={4} lg={3}>
									<Box p={3}>
										<Typography align={"left"} variant={"body1"} component={"p"}>
											{event.location}
										</Typography>
									</Box>
								</Grid>
							</Hidden>
							<Grid item xs={6} sm={6} md={2} lg={3}>
								<Box p={3}>
									{event.isPrivate ?
										<Button onClick={(value, eventData) => changeVisibiltiy(false, event)}>
											<LockIcon className={classes.iconButton}>
											</LockIcon>
										</Button>
										:
										<Button onClick={(value, eventData) => changeVisibiltiy(true, event)}>
											<LockOpenIcon className={classes.iconButton}>
											</LockOpenIcon>
										</Button>
									}

								</Box>
							</Grid>
						</Grid>

					</Card>
				))
					:
					<Typography variant={"body2"} component={"p"} align={"center"}>
						There are no {section}
					</Typography>

				}
			</Grid>
		</React.Fragment>
	);
};
export default (Events);
