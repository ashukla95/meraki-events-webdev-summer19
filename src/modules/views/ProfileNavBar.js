import React from 'react';
import {styles as toolbarStyles} from "../components/Toolbar";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {NavLink} from 'react-router-dom'

const styles = theme => ({
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
		justifyContent: "left",
		display: 'flex',
		marginLeft: 50
	},
	link: {
		textDecoration: 'none',
		color: 'black'
	}

});

const ProfileNavBar = (props) => {
	const {classes} = props;

	const [anchorEl, setAnchorEl] = React.useState(null);

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function redirectToProfile() {
		setAnchorEl(null);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	return(
		<div>
			<AppBar position={"fixed"}>
				<Toolbar className={classes.toolbar}>
					<div className={classes.leftSmall}>
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
					</div>
					<div align={"center"} className={classes.left}>
						Lorum
					</div>
					<div className={classes.right}>
						<Button
							aria-controls="simple-menu"
							className={classes.button}
							aria-haspopup="true"
							onClick={handleClick}>
							UserName
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
							keepMounted
							open={Boolean(anchorEl)}
							onClose={redirectToProfile}
						>
							<MenuItem><NavLink className={classes.link} to={'/profile'}>My account</NavLink></MenuItem>
							<MenuItem><NavLink className={classes.link} to={'/'}>Logout</NavLink></MenuItem>
						</Menu>
					</div>
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
