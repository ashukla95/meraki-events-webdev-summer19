import React, { Component } from 'react';
import TextSearchAPIService from './modules/APIServices/TextSearchAPIService'
import withRoot from "./modules/withRoot";
import SearchBar from "./modules/views/SearchBar";
import DetailsCard from "./modules/components/DetailsCard";
import {Grid} from "@material-ui/core";

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
                    <Grid item lg={12} md={12} sm={12}>
                        <DetailsCard
                            imageHeight={365}
                            imageWidth={345}
                            result={this.state.placeDetails}
                            showLearnMore={true}/>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withRoot(PropertyDetails);
