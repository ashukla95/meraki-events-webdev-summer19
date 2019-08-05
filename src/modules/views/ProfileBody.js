import React from 'react';
import Demographics from "../components/Demographics";
import Grid from "@material-ui/core/Grid";
import Events from "../components/Events";
import Followers from "../components/Followers";
import {Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {grey} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
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
	},

	demographics: {
		marginTop: 5
	}

}));

const ProfileBody = ({profileData, events}) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item lg={2} md={2} sm={2} className={classes.demographics}>
					<Grid container>
						<Demographics
							profileData={profileData}/>
					</Grid>
				</Grid>
				<Grid item lg={7} md={7} sm={7} margin={2} padding={2}>
					<Paper className={classes.paper}>
						<Grid container>
							<Events
								events={events.filter(event => event.isUpcomingEvent == true)}
								section={"Upcoming Events"}/>
						</Grid>
					</Paper>
					<Paper elevation={2} className={classes.paper}>
						<Grid container>
							<Events
								events={events.filter(event => event.isUpcomingEvent == false)}
								section={"Past Events"}/>
						</Grid>
					</Paper>
				</Grid>
				<Grid item lg={3} md={3} sm={3}>
					<Paper className={classes.paper}>
						<Grid container>
							<Followers
								addFollowers={true}
								removeFollowers={false}
								section={"Followers"}/>
						</Grid>
					</Paper>
					<Paper className={classes.paper}>
						<Grid container>
							<Followers
								addFollowers={false}
								removeFollowers={true}
								section={"Following"}/>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default ProfileBody;
