import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Card} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DeleteIcon from "@material-ui/icons/Delete"
import Box from "@material-ui/core/Box";


const useStyles = makeStyles({
	title: {
		alignItems: 'center',
		alignContent: 'center'
	},

	iconButton: {
		float: 'right'
	}

});


const Followers = () => {
	const classes = useStyles();
	return(
		<React.Fragment>
			<Grid className={classes.title} item sm={12} md={12} lg={12}>
				<p>Followers</p>
			</Grid>
			<Grid item sm={12} md={12} lg={12}>
				<Card style={{"backgroundColor":"#f9f9f9"}}>
					<CardActionArea>
							<Grid container spacing={2}>
								<Box item sm={6} p={3}>
									<Typography display={"block"}
									            align={"justify"}
									            variant={"body2"}
									            component={"p"}>
										Harshil Mavani
									</Typography>
								</Box>
								<Grid item sm={6}>
									<IconButton className={classes.iconButton}>
										<DeleteIcon>
										</DeleteIcon>
									</IconButton>
								</Grid>
							</Grid>
					</CardActionArea>
				</Card>
			</Grid>
		</React.Fragment>
	);
};

export default Followers;
