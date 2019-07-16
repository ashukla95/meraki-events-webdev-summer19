import React, {Component} from 'react';
import withRoot from "./modules/withRoot";


class PropertyDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            propertyName: props.match.params.data,
            propertyAddress: ''
        };
    }

    render() {
        return (
            <div>{this.state.propertyName}</div>
        )
    }
}

export default withRoot(PropertyDetailsPage);
