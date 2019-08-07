import React from 'react';
import { styles as toolbarStyles } from "../components/Toolbar";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { NavLink } from 'react-router-dom'
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import Grid from "@material-ui/core/Grid";

const styles = theme => ({

	appBar: {
		backgroundColor: "black"
	},
	title: {
		fontSize: 16,
	},
	placeholder: toolbarStyles(theme).root,
	toolbar: {
		justifyContent: 'space-between',
	},
	left: {
		flex: 4,

	},
	leftLinkActive: {
		color: theme.palette.common.white,
	},
	leftSmall: {
		flex: 1,
		display: 'flex',
	},
	button: {
		margin: theme.spacing(1),
	},
	right: {
		flex: 1,
		marginLeft: 50
	},
	link: {
		textDecoration: 'none',
		color: 'black'
	},
	userName: {
		color: 'white'
	},
	arrowDownIcon: {
		color: "white"
	}
});

const ProfileNavBar = (props) => {
	const { classes } = props;

	const [anchorEl, setAnchorEl] = React.useState(null);

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function redirectToProfile() {
		setAnchorEl(null);
	}

	return (
		<div>
			<AppBar className={classes.appBar} position={"fixed"}>
				<Toolbar className={classes.toolbar}>
					<Grid item className={classes.leftSmall}>
						<Link
							underline="none"
							color="inherit"
							className={classes.title}
							href={"/"}>
							<Typography variant={"h5"}
								align={"center"}
								color={"initial"}>
								{'Meraki Events'}
							</Typography>
						</Link>
					</Grid>
					<Grid item>
						<Button
							aria-controls="simple-menu"
							className={classes.button}
							aria-haspopup="true"
							onClick={handleClick}>
							<Typography display={"block"}
								align={"justify"}
								className={classes.userName}
								gutterBottom={false}
								variant={"subtitle2"}
								component={"p"}>
								{props.username}
							</Typography>
							<ArrowDropDownIcon className={classes.arrowDownIcon}>
							</ArrowDropDownIcon>
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'center',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'center',
							}}
							getContentAnchorEl={null}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={redirectToProfile}>
							<MenuItem><NavLink className={classes.link} to={'/profile'}>My account</NavLink></MenuItem>
							<MenuItem><NavLink className={classes.link} to={'/'}>Logout</NavLink></MenuItem>
						</Menu>
					</Grid>
				</Toolbar>
			</AppBar>
			<div className={classes.placeholder} />
		</div>
	);
};
ProfileNavBar.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ProfileNavBar);
