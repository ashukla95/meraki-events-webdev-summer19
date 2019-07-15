import React, {Component} from "react"
import withRoot from './modules/withRoot';
import SearchBar from "./modules/views/SearchBar";
import TextSearchAPIService from './modules/APIServices/TextSearchAPIService'
import SearchResult from './modules/views/SearchResult'
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/index";
/*import compose from 'docs/src/modules/utils/compose';*/

/*const Search = () => <SearchBar />;*/
const styles = theme => ({});

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            googlePlaceAPI: TextSearchAPIService.getInstance(),
            searchFormData: '',
            searchDataFromPlacesAPI: ''
        }
    }

    changeField = (evt) => {
        //console.log("event hit.");
        this.setState({
            searchFormData: evt.target.value
        }, () => {/*console.log("search data: ", this.state.searchFormData)*/
        })
    };

    search = () => {
        /*let temp = this.state.googlePlaceAPI.findPlaces(this.state.searchFormData);
        console.log("temp:", temp);
        this.setState({
            searchDataFromPlacesAPI: temp
        }, () => this.render());*/
        let temp = '';
        this.state.googlePlaceAPI.findPlaces(this.state.searchFormData)
            .then(places => {
                console.log("places found: ", temp);
                console.log(("places found candidate: ", "places found candidate: ", places.candidates))
                this.setState({
                    searchDataFromPlacesAPI: places.candidates
                })
            });
    };

    render() {
        return (
            <div>
                <div>
                    <SearchBar googlePlaceAPI={this.state.googlePlaceAPI}
                               searchBoxData={this.state.searchFormData}
                               changeField={this.changeField}
                               search={this.search}/>
                </div>
                <div className={"container-fluid bg-dark"}>
                    {console.log('result found: ', this.state.searchDataFromPlacesAPI)}
                    <SearchResult resultsFound={this.state.searchDataFromPlacesAPI}/>
                </div>
            </div>


        )
    }
}

export default withRoot(Search);
/*export default compose(
    withRoot,
    withStyles(styles),
)(Search)*/
