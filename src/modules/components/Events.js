import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/icons/Lock"
import LockOpenIcon from "@material-ui/icons/LockOpen"
import DeleteIcon from "@material-ui/icons/Delete"
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Hidden from '@material-ui/core/Hidden';

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

const Events = ({section, events}) => {
	console.log("events received for section: ", section, " are: ", events);
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
				{events.map(event => (
					<Card key={new Date().getTime()} className={classes.eventCard}>
						<CardActionArea>
							<Grid container spacing={2}>
								<Grid item xs={6} sm={6} md={4} lg={3}>
									<Box p={3}>
										<Typography align={"left"} variant={"body1"} component={"p"}>
											{event.eventName}
										</Typography>
									</Box>
								</Grid>
								<Hidden smDown xsDown >
									<Grid item xs={6} sm={2} md={2} lg={3}>
										<Box p={3}>
											<Typography align={"right"} variant={"body1"} component={"p"}>
												{event.eventDate}
											</Typography>
										</Box>
									</Grid>
								</Hidden>
								<Hidden smDown xsDown >
									<Grid item xs={6} sm={4} md={4} lg={3}>
										<Box p={3}>
											<Typography align={"left"} variant={"body1"} component={"p"}>
												{event.eventPlace}
											</Typography>
										</Box>
									</Grid>
								</Hidden>
								<Grid item xs={6} sm={6} md={2} lg={3}>
									<Box p={3}>
										{event.eventVisibility === 'public' ?
											<LockOpenIcon className={classes.iconButton}>
											</LockOpenIcon>
											:
											<LockIcon className={classes.iconButton}>
											</LockIcon>
										}
										<DeleteIcon className={classes.iconButton}>
										</DeleteIcon>
									</Box>
								</Grid>
							</Grid>
						</CardActionArea>
					</Card>
				))}
			</Grid>
		</React.Fragment>
	);
};
export default (Events);
