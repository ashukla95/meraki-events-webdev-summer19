import React, { Component } from 'react';
import TextSearchAPIService from './modules/APIServices/TextSearchAPIService'
import withRoot from "./modules/withRoot";
import SearchBar from "./modules/views/SearchBar";
import DetailsCard from "./modules/components/DetailsCard";

class PropertyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { placeDetails: {} };
        TextSearchAPIService.getInstance()
            .getPlaceDetails(props.match.params.placeId)
            .then(placeDetails => {
                this.setState({ placeDetails });
            })
    }


    render() {
        return (
            <div>
                <div>
                    <SearchBar />
                </div>
                <div>
                    <DetailsCard
                        gridWidgthLarge={12}
                        gridWidgthMedium={12}
                        gridWidgthSmall={12}
                        imageHeight={365}
                        imageWidth={345}
                        result={this.state.placeDetails}
                        detailsForSingleProperty={true}
                        key={new Date().getTime()}/>
                </div>
            </div>
        )
    }
}

export default withRoot(PropertyDetails);
