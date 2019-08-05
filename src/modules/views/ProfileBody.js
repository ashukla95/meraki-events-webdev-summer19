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
		marginTop: 5,
	},

	profileBody: {
		backgroundColor: "#757575",
		height: "100%",
		padding: 5
	}

}));

const ProfileBody = ({profileData, events, networking}) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid className={classes.profileBody} container spacing={2}>
				<Grid item lg={2} md={12} sm={12} xs={12} className={classes.demographics}>
					<Grid container>
						<Demographics
							profileData={profileData}/>
					</Grid>
				</Grid>
				<Grid item lg={7} md={12} sm={12} xs={12} margin={2} padding={2}>
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
				<Grid item lg={3} md={12} sm={12} xs={12}>
					<Paper className={classes.paper}>
						<Grid container>
							<Followers
								addFollowers={true}
								removeFollowers={false}
								networking={networking.followers}
								section={"Followers"}/>
						</Grid>
					</Paper>
					<Paper className={classes.paper}>
						<Grid container>
							<Followers
								addFollowers={false}
								removeFollowers={true}
								networking={networking.following}
								section={"Following"}/>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default ProfileBody;
