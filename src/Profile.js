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
			...userService.getUserData(),
			displayProfile: true,
			searchFormData: '',
			profileSearchResult: []
		};
	}

	changeField = (evt) => {
		/*This function keeps a track of the data inserted in the textfield of the search page.*/
		this.setState({
			searchFormData: evt.target.value
		})
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("**************************************************************")
		console.log("prev state: ", prevState);
		console.log("this state: ", this.state);
		if((!this.state.displayProfile) && (this.state.searchFormData !== prevState.searchFormData)) {
			console.log("Setting search result.");
			this.setState({
				profileSearchResult: userService.getProfileSearchResult()
			})
		}
		this.render();
	}

	renderProfileList = (flag) => {
		this.setState({
			displayProfile: flag
		});
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
						events={this.state.events}
						networking={this.state.followers}
						profileData={this.state.primary}/>
					:
					<ProfileList searchResult={this.state.profileSearchResult}/>}

			</div>
		)
	}
}

export default (Profile)
