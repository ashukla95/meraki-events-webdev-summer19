import React, {Component} from "react"
import withRoot from '../withRoot';
import AppAppBar from "../views/AppAppBar";
import SearchBar from "./SearchBar";

const Search = () => {
    return (
        <SearchBar/>
    )
};

export default withRoot(Search);
