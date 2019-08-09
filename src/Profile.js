import React, {Component} from 'react';
import ProfileNavBar from "./modules/views/ProfileNavBar";
import ProfileBody from "./modules/views/ProfileBody";
import UserService from './APIServices/UserService';
import ProfileList from "./modules/components/ProfileList";

const userService = UserService.getInstance();

class Profile extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userData: userService.getUserData(),
			displayProfile: true,
			searchFormData: '',
			profileSearchResult: []
		};
	}


	changeField = (evt) => {
		console.log("event received: ", evt.target.value);
		/*This function keeps a track of the data inserted in the textfield of the search page.*/
		this.setState({
			searchFormData: evt.target.value
		}, () => {console.log("state at this moment: ", this.state)})
	};

	generateProfileList() {
		if((!this.state.displayProfile) && (this.state.searchFormData !== '')) {
			this.setState({
				profileSearchResult: userService.getProfileSearchResult(),
				searchFormData: ''
			});
		}
	}

	renderProfileList = (flag, formData) => {
		console.log("Inside render profile function. Setting flag to: ", flag, " formData: ", formData);
		this.setState({
			displayProfile: flag,
			searchFormData: formData
		}, () => {this.generateProfileList()});
	};

	render() {
		return (
			<div style={{"height":"100%"}}>
				<ProfileNavBar
					renderProfileList={this.renderProfileList}
					changeField={this.changeField}
					username={"Username"}/>
				{this.state.displayProfile ?
					<ProfileBody
						events={this.state.userData.events}
						networking={this.state.userData.followers}
						profileData={this.state.userData.primary}/>
					:
					<ProfileList searchResult={this.state.profileSearchResult}/>}

			</div>
		)
	}
}

export default (Profile)
