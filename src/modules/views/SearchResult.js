import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles/index';
import DetailsCard from "../components/DetailsCard";

let screenWidth = window.screen.width;
const styleCustom = makeStyles({
    card: {
        maxWidth: 0.95 * screenWidth,
        margin: 0.01 * screenWidth,
        padding: 0.01 * screenWidth,
        marginLeft: 0.01 * screenWidth
    },


});

const SearchResult = ({resultsFound}) => {
    const classes = styleCustom();
    return Array.from(resultsFound).map(result =>
        <DetailsCard classes={classes}
                     result={result}
                     screenWidth={screenWidth}/>
    );
};

export default SearchResult;
