import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Card} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddIcon from "@material-ui/icons/AddCircle"
import RemoveIcon from "@material-ui/icons/Remove"
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
	title: {
		alignItems: 'center',
		alignContent: 'center',
		margin: 10
	},

	iconButton: {
		float: 'right',
	},

	network: {
		marginTop: 10,
		backgroundColor: "#f9f9f9"
	},

	seeMore: {
		float: "right",
		marginTop: 10
	},

	linkData:{
		textDecoration:"none",
		color: 'black'
	}

});


const Followers = ({section, addFollowers, removeFollowers, networking, unFollowUser}) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid className={classes.title} item xs={12} sm={12} md={12} lg={12}>
				<Typography align={"justify"}
				            variant={"h6"}
				            display={"inline"}
				            gutterBottom={true}
				            component={"p"}>{section}</Typography>
			</Grid>
			<br/>

			<Grid item xs={12} sm={12} md={12} lg={12} key={section}>
				{(typeof networking !== "undefined") ? networking.map(network => {
						return (
							<Card key={new Date().getMilliseconds()} className={classes.network}>
								<Grid container spacing={2}>
									<Grid item xs={6} sm={9} md={9} lg={9}>
										<Box p={2}>
											<Typography display={"block"}
											            align={"justify"}
											            variant={"body1"}
											            component={"p"}>
												<Link className={classes.linkData} to={`/profile/${network}`}>{network}</Link>
											</Typography>
										</Box>
									</Grid>
									<Grid item xs={6} sm={3} md={3} lg={3}>
										<Box p={2} className={classes.iconButton}>
											{addFollowers && <Button>
												<AddIcon>
												</AddIcon>
											</Button> ||
											removeFollowers && <Button
												onClick={(follow, follower) => unFollowUser(networking, localStorage.getItem("currentUser"))}>
												<RemoveIcon>
												</RemoveIcon>
											</Button>}
										</Box>
									</Grid>
								</Grid>
							</Card>
						)
					}
					)
					:
					<div/>
				}
				<Button size={"small"} color={"primary"} className={classes.seeMore}>
					See more
				</Button>

			</Grid>
		</React.Fragment>
	);
};

export default Followers;
