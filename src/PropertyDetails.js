import React, { Component } from 'react';
import TextSearchAPIService from './modules/APIServices/TextSearchAPIService'
import withRoot from "./modules/withRoot";

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

            </div>
        )
    }
}

export default withRoot(PropertyDetails);
