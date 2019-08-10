import React from 'react';
import {Grid} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import AddIcon from "@material-ui/icons/AddCircle"
import RemoveIcon from "@material-ui/icons/Remove"
import LockOpenIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles(theme => ({
	profileName: {
		textDecoration: "none",
		color: 'black'
	},
	cardGrid: {
		width: "100%"
	},
	iconButton: {
		float: 'right'
	},
	dataGrid: {
		marginTop: theme.spacing(1)
	}
}));

const ProfileList = ({searchResult, followUser, unFollowUser}) => {
	console.log("search result: ", searchResult);
	const classes = useStyles();
	return (
		<React.Fragment>
			{/*Render the column names inside a card.*/}
			<Grid item sm={12} md={12} lg={12} xl={12}>

				<Grid container spacing={2}>
					<Grid item xs={6} sm={6} md={2} lg={2}>
						<Box p={3} fontWeight={"fontWeightBold"}>
							<Typography align={"justify"} variant={"body1"} component={"p"}>
								Username
							</Typography>
						</Box>
					</Grid>
					<Hidden smDown xsDown>
						<Grid item sm={2} md={2} lg={2}>
							<Box p={3}>
								<Typography align={"justify"} variant={"body1"} component={"p"}>
									First Name
								</Typography>
							</Box>
						</Grid>
					</Hidden>
					<Hidden smDown xsDown>
						<Grid item sm={2} md={2} lg={2}>
							<Box p={3}>
								<Typography align={"justify"} variant={"body1"} component={"p"}>
									Last Name
								</Typography>
							</Box>
						</Grid>
					</Hidden>
					<Hidden smDown xsDown>
						<Grid item sm={2} md={2} lg={2}>
							<Box p={3}>
								<Typography align={"justify"} variant={"body1"} component={"p"}>
									Total Followers
								</Typography>
							</Box>
						</Grid>
					</Hidden>
					<Hidden smDown xsDown>
						<Grid item sm={2} md={2} lg={2}>
							<Box p={3}>
								<Typography align={"justify"} variant={"body1"} component={"p"}>
									Total Following
								</Typography>
							</Box>
						</Grid>
					</Hidden>
					<Grid item xs={6} sm={6} md={2} lg={2}>
						<Box p={3}>
							<Typography align={"justify"} variant={"body1"} component={"p"}>
								Follow
							</Typography>
						</Box>
					</Grid>
				</Grid>


			</Grid>

			{/*Render the data inside relevant column of the entire grid.*/}
			<Grid
				item
				className={classes.dataGrid}
				xs={12}
				sm={12}
				md={12}
				lg={12}>
				{(searchResult !== null) ? searchResult.map(result => (
						<Card key={new Date().getTime()} className={classes.eventCard}>
							<CardActionArea>
								<Grid container spacing={2}>
									<Grid item xs={6} sm={6} md={2} lg={2}>
										<Box p={3}>
											<Typography align={"justify"} variant={"body1"} component={"p"}>
												<Link to={`/profile/${result._id}`}
												      className={classes.profileName}>{result.username}</Link>
											</Typography>
										</Box>
									</Grid>
									<Hidden smDown xsDown>
										<Grid item sm={2} md={2} lg={2}>
											<Box p={3}>
												<Typography align={"justify"} variant={"body1"} component={"p"}>
													{result.firstName}
												</Typography>
											</Box>
										</Grid>
									</Hidden>
									<Hidden smDown xsDown>
										<Grid item sm={2} md={2} lg={2}>
											<Box p={3}>
												<Typography align={"justify"} variant={"body1"} component={"p"}>
													{result.lastName}
												</Typography>
											</Box>
										</Grid>
									</Hidden>
									<Hidden smDown xsDown>
										<Grid item sm={2} md={2} lg={2}>
											<Box p={3}>
												{result.followers.length}
											</Box>
										</Grid>
									</Hidden>
									<Hidden smDown xsDown>
										<Grid item sm={2} md={2} lg={2}>
											<Box p={3}>
												{result.following.length}
											</Box>
										</Grid>
									</Hidden>
								</Grid>
							</CardActionArea>
							<CardActions>
								<Grid item xs={6} sm={6} md={2} lg={2}>
									<Box p={3}>
										<Button
											onClick={(username, followerId) => followUser(result._id, window.localStorage.getItem("username"))}>
											<AddIcon>
											</AddIcon>
										</Button>
									</Box>
								</Grid>
							</CardActions>
						</Card>
					)) :
					<Typography variant={"body2"} align={"center"} component={"p"}>
						Sorry no results obtained. Please try again by using some other profile name.
					</Typography>
				}
			</Grid>

			<div/>
		</React.Fragment>
	);
};

export default ProfileList;
