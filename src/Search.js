import React, {Component} from "react"
import withRoot from './modules/withRoot';
import SearchBar from "./modules/views/SearchBar";
import TextSearchAPIService from './modules/APIServices/TextSearchAPIService'
import SearchResult from './modules/views/SearchResult'
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/index";
import Grid from "@material-ui/core/Grid";
/*import compose from 'docs/src/modules/utils/compose';*/

/*const Search = () => <SearchBar />;*/
const styles = theme => ({});

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            googlePlaceAPI: TextSearchAPIService.getInstance(),
            searchFormData: '',
            searchDataFromPlacesAPI: []
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
                console.log("places found candidate: ", "places found candidate: ", places, typeof places);
                this.setState({
                    searchDataFromPlacesAPI: places
                })
            });
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("should component update: ", nextState, this.state);
        return true;
    }

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
                    {console.log("****************************")}
                    {console.log(typeof this.state.searchDataFromPlacesAPI)}
                    {(this.state.searchDataFromPlacesAPI).forEach(re => {
                        console.log(re.candidates);
                    })}
                    {console.log("----------------------------")}
                    <Grid alignContent={"center"}
                          alignItems={"center"}
                          container
                          spacing={3}
                          justify={"flex-start"}>
                        <SearchResult resultsFound={this.state.searchDataFromPlacesAPI}/>
                    </Grid>
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
