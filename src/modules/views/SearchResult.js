import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles/index';
import DetailsCard from "../components/DetailsCard";
import Grid from "@material-ui/core/Grid";

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
    {console.log("result found inside searchResult: ", resultsFound)}
    return (resultsFound).map(result =>
        result["candidates"].map(resultInner =>

            <DetailsCard classes={classes}
                         result={resultInner}
                         screenWidth={screenWidth}/>
                         )
    );
};

export default SearchResult;
{/*
>*/}
