import React from 'react';
import DetailsCard from "../components/DetailsCard";

/*Stateless component to render the results retrieved by calling the necessary back-end service inside a card component */
const SearchResult = ({ autoCompleteResults }) => {
    return (autoCompleteResults)
        .map(prediction =>
            <DetailsCard
                result={prediction}
                gridWidthLarge={6}
                gridWidthMedium={6}
                gridWidthSmall={12}
                detailsForSingleProperty={false}
                imageHeight={200}
                imageWidth={345}
                key={prediction.place_id} />
        )
};

export default SearchResult;
