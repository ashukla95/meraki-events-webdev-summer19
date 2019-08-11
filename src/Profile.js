import React, { Component } from 'react';
import ProfileNavBar from "./modules/views/ProfileNavBar";
import ProfileBody from "./modules/views/ProfileBody";
import UserService from './APIServices/UserService';
import ProfileList from "./modules/components/ProfileList";
import EventService from "./APIServices/EventService";
import AppFooter from "./modules/views/AppFooter"
import withRoot from "./modules/withRoot";

const userService = UserService.getInstance();
const eventService = EventService.getInstance();

class Profile extends Component {

	state = {
		userData: {},
		displayProfile: true,
		searchFormData: '',
		profileSearchResult: null,
		eventList: [],
		profileId: -1,
		offlineUpdate: false
	}

	constructor(props) {
		super(props);
		let userNameToBeSearched =
			(props.match.params.profileId === null || props.match.params.profileId === undefined) ?
				localStorage.getItem("currentUser") : props.match.params.profileId;
		this.getUserDataToLocal(userNameToBeSearched, props);
	}

	getUserDataToLocal(userNameToBeSearched, props) {
		userService
			.getUserData(userNameToBeSearched)
			.then(userData => {
				this.setState({ ...this.state, userData, profileId: props.match.params.profileId, })
				let eventList = [];
				userData.events.map(eventId => {
					eventService
						.getEventDataUsingEventId(eventId)
						.then(eventDetails => {
							eventList.push(eventDetails);
							this.setState({ ...this.state, eventList })
						})
				})
			});
	}

	generateProfileList() {
		if ((!this.state.displayProfile) && (this.state.searchFormData !== '')) {
			userService.getProfileSearchResult(this.state.searchFormData).then(response => {
				if (response !== undefined) {
					this.setState({
						...this.state,
						profileSearchResult: [response],
						searchFormData: ''
					});
				}
			});
		}
	};

	renderProfileList = (flag, formData) => {
		this.setState({
			...this.state,
			displayProfile: flag,
			searchFormData: formData
		}, () => {
			this.generateProfileList()
		});
	};

	followUser = (follow, follower) => {
		userService.followUser(follow, follower)
			.then(response =>
				userService.getUserData(localStorage.getItem("currentUser"))
					.then(userData => {
						if (userData !== undefined) {
							this.setState({
								...this.state,
								userData,
								displayProfile: true,
								searchFormData: '',
								profileSearchResult: null
							})
						}
					}))
	};

	unFollowUser = (follow, follower) => {
		userService.unFollowUser(follow, follower)
			.then(response =>
				userService.getUserData(localStorage.getItem("currentUser"))
					.then(userData => {
						this.setState({
							...this.state,
							userData,
							displayProfile: true,
							searchFormData: '',
							profileSearchresult: null
						})
					}))
	};

	changeVisibiltiy = (visibilityValue, eventData) => {
		eventData.isPrivate = visibilityValue;
		let tempData = [];
		EventService.getInstance().updateEvent(eventData)
			.then(response => {
				tempData = Array.from(Object.create(this.state.eventList));
				this.setState({
					...this.state,
					eventList: []
				});
				this.setState({
					...this.state,
					eventList: tempData,
				});
			});
	};

	render() {
		return (
			<div >
				<ProfileNavBar
					renderProfileList={this.renderProfileList}
					changeField={this.changeField}
					username={localStorage.getItem("currentUser")} />
				{this.state.displayProfile ?
					<ProfileBody
						profileId={this.state.profileId}
						changeVisibiltiy={this.changeVisibiltiy}
						events={this.state.eventList}
						followUser={this.followUser}
						unFollowUser={this.unFollowUser}
						followers={this.state.userData.followers}
						following={this.state.userData.following}
						username={this.state.userData.username}
						firstName={this.state.userData.firstName}
						lastName={this.state.userData.lastName} />
					:
					<ProfileList searchResult={this.state.profileSearchResult}
						followUser={this.followUser} />}
				<AppFooter />
			</div>
		)
	}
}

export default withRoot(Profile)
