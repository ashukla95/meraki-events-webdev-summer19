import React, {useState} from 'react';
import {styles as toolbarStyles} from "../components/Toolbar";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import {AppBar, TextField} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {NavLink} from 'react-router-dom'
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import Grid from "@material-ui/core/Grid";
import {fade} from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import clsx from 'clsx';

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
		flex: 2,

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
		marginLeft: theme.spacing(10)
	},
	searchProfile: {
		flex: 1,
		marginLeft: theme.spacing(70),
		textAlign: 'justify'
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
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('lg')]: {
			width: 200,
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		backgroundColor: fade(theme.palette.common.white, 0.50),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.65),
		},
		borderRadius: "0.2em 0.2em 0.3em 0.3em "
	},
	rightLink: {
		fontSize: 30,
		color: theme.palette.common.white,
		marginLeft: theme.spacing(2),
	},
	linkSecondary: {
		color: theme.palette.secondary.main,
	},
	icon: {
		margin: theme.spacing(1),
		fontSize: 40,
	},
});

const ProfileNavBar = (props) => {
	const {classes} = props;

	const [anchorEl, setAnchorEl] = useState(null);
	const [formData, setFormData] = useState('');

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
					{!props.searchProfile ?
						<React.Fragment>
							<Grid item className={classes.left}>
								<TextField
									id="filled-search"
									label="Search User by ID"
									autoFocus={false}
									type="text"
									fullWidth
									margin={"dense"}
									className={classes.textField}
									variant={"filled"}
									value={formData}
									onChange={(event) => setFormData(event.target.value)}
								/>
							</Grid>
							<Grid item>
								<div className={classes.right}
								     onClick={(data) => props.renderProfileList(formData)}>
									<IconButton size={"small"}>
										<SearchIcon
											className={clsx(classes.rightLink, classes.linkSecondary, classes.icon)}>
										</SearchIcon>
									</IconButton>
								</div>
							</Grid>
						</React.Fragment>
						:
						<React.Fragment>
							<Grid item className={classes.left}>
							</Grid>
							<Grid item>
								<div className={classes.right}>
									<Button
										onClick={(flag) => props.renderProfileList(false)}
										className={classes.userName}>SEARCH PROFILE
									</Button>
								</div>
							</Grid>
						</React.Fragment>
					}
					{
						window.localStorage.getItem("currentUser") &&
						<Grid item className={classes.right}>
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
								<MenuItem>
									<NavLink className={classes.link} to={'/profile'}>My account
									</NavLink>
								</MenuItem>
								<MenuItem>
									<NavLink className={classes.link}
									         to={{
										         pathname: '/login/',
										         clearData: true
									         }}>Logout
									</NavLink>
								</MenuItem>
							</Menu>
						</Grid>}
					{!window.localStorage.getItem("currentUser") && <Grid item className={classes.right}>
					</Grid>}
				</Toolbar>
			</AppBar>
			<div className={classes.placeholder}/>
		</div>
	);
};
ProfileNavBar.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ProfileNavBar);
