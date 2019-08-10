import React from 'react';
import Demographics from "../components/Demographics";
import Grid from "@material-ui/core/Grid";
import Events from "../components/Events";
import Followers from "../components/Followers";
import {Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		height: "100%",
		backgroundColor: "#757575"
	},
	paper: {
		padding: theme.spacing(1),
		margin: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		marginTop: 5,
		marginRight:0,
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
		padding:4
	}

}));

const ProfileBody = ({username, firstName, lastName, events, followers, following, unFollowUser}) => {
	console.log("events: ", events);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid className={classes.profileBody} container direction={"row"} spacing={2}>
				<Grid item lg={2} md={12} sm={12} xs={12} className={classes.demographics}>
					<Grid container>
						<Demographics
							username={username}
							firstName={firstName}
							lastName={lastName}/>
					</Grid>
				</Grid>
				<Grid item lg={7} md={12} sm={12} xs={12}>
					<Paper className={classes.paper}>
						<Grid container>
							{(events === [])?
								<Events
									events={events.filter(event => event.isUpcomingEvent === true)}
									section={"Upcoming Events"}/>:
								<Events
									events={events}
									section={"Upcoming Events"}/>}
						</Grid>
					</Paper>
					<Paper elevation={2} className={classes.paper}>
						<Grid container>
							{(events === [])?
								<Events
									events={events.filter(event => event.isUpcomingEvent === false)}
									section={"Past Events"}/>:
								<Events
									events={events}
									section={"Past Events"}/>}
						</Grid>
					</Paper>
				</Grid>
				<Grid item lg={3} md={12} sm={12} xs={12}>
					<Paper className={classes.paper}>
						<Grid container>
							<Followers
								addFollowers={true}
								removeFollowers={false}
								networking={followers}
								section={"Followers"}/>
						</Grid>
					</Paper>
					<Paper className={classes.paper}>
						<Grid container>
							<Followers
								addFollowers={false}
								removeFollowers={true}
								networking={following}
								section={"Following"}/>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default (ProfileBody);
