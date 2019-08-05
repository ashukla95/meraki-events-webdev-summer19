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
		marginTop: 10
	}


});

const Events = ({section, events}) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid className={classes.title} item sm={12} md={12} lg={12}>
				<Typography align={"justify"}
				            variant={"h6"}
				            display={"inline"}
				            gutterBottom={true}
				            component={"p"}>{section}</Typography>
			</Grid>
			<Grid item sm={12} md={12} lg={12}>
				{events.map(event => (
					<Card key={new Date().getTime()} className={classes.eventCard}
					      style={{"backgroundColor": "#f9f9f9"}}>
						<CardActionArea>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6} md={4} lg={3}>
									<Box p={3}>
										<Typography align={"justify"} variant={"body1"} component={"p"}>
											{event.eventName}
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={12} sm={6} md={2} lg={3}>
									<Box p={3}>
										<Typography align={"justify"} variant={"body1"} component={"p"}>
											{event.eventDate}
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={12} sm={6} md={4} lg={3}>
									<Box p={3}>
										<Typography align={"justify"} variant={"body1"} component={"p"}>
											{event.eventPlace}
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={12}
								      sm={6} md={2} lg={3}>
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

export default Events;
