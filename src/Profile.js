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

	events = [
		{
			eventName: "Birthday",
			eventPlace: "Sheraton Boston",
			eventDate: "27/09/2019",
			eventVisibility: "public",
			isUpcomingEvent: true
		},
		{
			eventName: "Appraisal",
			eventPlace: "Sheraton Boston",
			eventDate: "27/09/2019",
			eventVisibility: "private",
			isUpcomingEvent: true
		},
		{
			eventName: "Board Meeting",
			eventPlace: "Chinchpokli",
			eventDate: "03/08/2019",
			eventVisibility: "public",
			isUpcomingEvent: false
		}
	];



	render() {
		return (
			<div>
				<ProfileNavBar
					username={"Username"}/>
				<ProfileBody
					events={this.events}
					profileData={this.data}/>
			</div>
		)
	}
}
