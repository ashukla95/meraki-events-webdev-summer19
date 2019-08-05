import React, {Component} from 'react';
import ProfileNavBar from "./modules/views/ProfileNavBar";
import ProfileBody from "./modules/views/ProfileBody";

export default class Profile extends Component {
	constructor(props) {
		super(props);
	}

	data={
		UserName: "Username",
		Name: "FULL NAME",
		DOB: "DD/MM/YYY",
	};

	render() {
		return (
			<div>
				<ProfileNavBar
					username={"Username"}/>
				<ProfileBody
					profileData={this.data}/>
			</div>
		)
	}
}
