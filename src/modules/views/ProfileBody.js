import React from 'react';
import Demographics from "../components/Demographics";
import Grid from "@material-ui/core/Grid";
import Events from "../components/Events";
import Followers from "../components/Followers";
import {Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {grey} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: grey,
		marginTop: 5
	},

	eventTitle: {
		textAlign: "center",
	}
}));

const ProfileBody = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid container={true} spacing={2}>
				<Grid item={true} lg={2} md={2} sm={2} margin={2}>
					<Grid container={true}>
						<Demographics/>
					</Grid>
				</Grid>
				<Grid item={true} lg={7} md={7} sm={7} margin={2} padding={2}>
					<Paper className={classes.paper}>
						<Grid container={true}>
							<Events/>
						</Grid>
					</Paper>
					<Paper elevation={2} className={classes.paper}>
						<Grid container={true}>
							<Events/>
						</Grid>
					</Paper>
				</Grid>
				<Grid item={true} lg={3} md={3} sm={3}>
					<Paper className={classes.paper}>
						<Grid container>
							<Followers/>
						</Grid>
					</Paper>
					<Paper className={classes.paper}>
						<Grid container>
							<Followers/>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default ProfileBody;
