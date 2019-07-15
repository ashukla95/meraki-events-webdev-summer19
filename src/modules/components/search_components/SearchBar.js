import React from "react"
import Toolbar, { styles as toolbarStyles } from "../Toolbar";
import AppBar from "../AppBar";
import Link from "@material-ui/core/Link";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

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
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(2),
    },
    linkSecondary: {
        color: theme.palette.secondary.main,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        backgroundColor: "White",
        borderRadius: "0.2em 0.2em 0.3em 0.3em ",
        height: 55,
    },
    button: {
        margin: theme.spacing(1),
    },
    input1: {
        height: "0.3em",
    },
});

function SearchBar(props) {
    const { classes } = props;
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.leftSmall}>
                        <Link
                            variant="h6"
                            underline="none"
                            color="inherit"
                            className={classes.title}
                            href="/">
                            {'Meraki Events'}
                        </Link>
                    </div>
                    <div className={classes.left}>
                        <Input
                            id="filled-search"
                            placeholder={"Enter the hotel to be searched."}
                            label="Enter Property"
                            autoFocus={true}
                            type="text"
                            fullWidth
                            margin={"dense"}
                            className={classes.textField}
                            variant={"filled"}
                            onChange={props.changeField}
                        />
                    </div>
                    <div className={classes.right}>
                        <Button
                            variant="contained"
                            className={clsx(classes.rightLink, classes.linkSecondary)}
                            onClick={props.search}>
                            {'Search'}
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    )
};
SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SearchBar);
