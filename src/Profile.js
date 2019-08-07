import React, { Component } from 'react';
import ProfileNavBar from "./modules/views/ProfileNavBar";
import ProfileBody from "./modules/views/ProfileBody";
import UserService from './APIServices/UserService';

const userService = UserService.getInstance();

class Profile extends Component {

	constructor() {
		super();
		this.state = userService.getUserData();
	}

	render() {
		return (
			<div>
				<ProfileNavBar
					username={"Username"} />
				<ProfileBody
					events={this.state.events}
					networking={this.state.followers}
					profileData={this.state.primary} />
			</div>
		)
	}
}

export default (Profile)
