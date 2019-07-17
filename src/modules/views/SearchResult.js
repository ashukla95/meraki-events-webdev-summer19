import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import DetailsCard from "../components/DetailsCard";


const styleCustom = makeStyles({
    /*Set the css property for the card to be rendered after retrieval of the data from the back-end service.*/
    card: {
        margin: 10,
        padding: 10,
    },
});

/*Stateless component to render the results retrieved by calling the necessary back-end service inside a card component */
const SearchResult = ({ autoCompleteResults }) => {
    const classes = styleCustom();
    return (autoCompleteResults)
        .map(prediction =>
            <DetailsCard classes={classes}
                result={prediction}
                key={prediction.place_id} />
        )
};

export default SearchResult;
