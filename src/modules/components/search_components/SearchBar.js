import React from "react"
import Toolbar, { styles as toolbarStyles } from "../Toolbar";
import AppBar from "../AppBar";
import Link from "@material-ui/core/Link";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from "@material-ui/core";

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
        borderRadius: "0.2em 0.2em 0.3em 0.3em "
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
                            href="/meraki">
                            {'Meraki Events'}
                        </Link>
                    </div>
                    <div className={classes.left}>
                        <TextField
                            id="filled-search"
                            label="Enter Property"
                            autoFocus={true}
                            type="search"
                            fullWidth
                            className={classes.textField}
                            variant={"filled"}
                        />
                    </div>
                    <div className={classes.right}>
                        <Link
                            variant="h6"
                            underline="none"
                            className={clsx(classes.rightLink, classes.linkSecondary)}
                            href="/search/">
                            {'Search'}
                        </Link>
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