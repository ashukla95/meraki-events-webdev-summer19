import React from 'react';
import DetailsCard from "../components/DetailsCard";
import {Grid} from "@material-ui/core";

/*Stateless component to render the results retrieved by calling the necessary back-end service inside a card component */
const SearchResult = ({ autoCompleteResults }) => {
    return (autoCompleteResults)
        .map(prediction =>
            <Grid item lg={6} md={6} sm={12} key={prediction.place_id}>
                <DetailsCard
                    result={prediction}
                    showLearnMore={false}
                    imageHeight={200}
                    imageWidth={345}
                    key={prediction.place_id} />
            </Grid>

        )
};

export default SearchResult;
