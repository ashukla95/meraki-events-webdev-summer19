import React, {Component} from 'react';
import ProfileNavBar from "./modules/views/ProfileNavBar";
import ProfileBody from "./modules/views/ProfileBody";

export default class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ProfileNavBar/>
				<ProfileBody/>
			</div>
		)
	}
}
