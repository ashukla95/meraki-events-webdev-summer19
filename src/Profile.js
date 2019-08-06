import React, {Component} from 'react';
import ProfileNavBar from "./modules/views/ProfileNavBar";
import ProfileBody from "./modules/views/ProfileBody";

class Profile extends Component {
	/*This section has summy data. Since, it was very limited, I just created it here. But after we discuss the db design,
	* I will move it to a separate file with the mock design and I will load this data when the component mounts.*/
	data = {
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

	followers =
		{
			followers: ["Harshil Mavani", "ParthSaarthi Mitra"],
			following: ["Harshil Mavani"]
		}
	;

	/*Dummy data section complete.*/


	render() {
		return (
			<div>
				<ProfileNavBar
					username={"Username"}/>
				<ProfileBody
					events={this.events}
					networking={this.followers}
					profileData={this.data}/>
			</div>
		)
	}
}

export default (Profile)
