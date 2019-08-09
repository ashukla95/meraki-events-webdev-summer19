import React from 'react';
import {Grid} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
	profileName: {
		textDecoration: none
	}
}));

const ProfileList = ({searchResult}) => {
	const classes = useStyles();
	return (
		<Grid>
			{searchResult.map(result =>
				<Card>
					<CardContent>
						<Link to={`/profile/${1}`}>
							<Typography className={classes.profileName} variant={"body1"} paragraph align={"justify"}
							            gutterBottom={false} display={"block"}>
								{result}
							</Typography>
						</Link>
					</CardContent>
				</Card>
			)}
		</Grid>
	);
};

export default ProfileList;
