import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Card} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LockIcon from "@material-ui/icons/Lock"
import LockOpenIcon from "@material-ui/icons/LockOpen"
import DeleteIcon from "@material-ui/icons/Delete"
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
	title: {
		alignItems: 'center',
		alignContent: 'center'
	},

	iconButton: {
		float: 'right'
	},

});

const Events = ({section}) => {
	const classes = useStyles();
	return(
		<React.Fragment>
			<Grid className={classes.title} item sm={12} md={12} lg={12}>
				<p>{section}</p>
			</Grid>
			<Grid item sm={12} md={12} lg={12}>
				<Card style={{"backgroundColor":"#f9f9f9"}}>
					<CardActionArea>
						<CardContent>
							<Grid container spacing={2}>
								<Box item={true} sm={3} p={3}>
									<Typography m={2} align={"center"} variant={"body1"} component={"p"}>
										Company Meeting
									</Typography>
								</Box>
								<Grid item sm={9}>
									<IconButton className={classes.iconButton}>
										<LockIcon>
										</LockIcon>
									</IconButton>
									<IconButton className={classes.iconButton}>
										<LockOpenIcon>
										</LockOpenIcon>
									</IconButton>
									<IconButton className={classes.iconButton}>
										<DeleteIcon>
										</DeleteIcon>
									</IconButton>
								</Grid>
							</Grid>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</React.Fragment>
	);
};

export default Events;
