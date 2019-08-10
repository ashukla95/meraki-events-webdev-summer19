import React, {Component} from 'react';
import ProfileNavBar from "./modules/views/ProfileNavBar";
import ProfileBody from "./modules/views/ProfileBody";
import UserService from './APIServices/UserService';
import ProfileList from "./modules/components/ProfileList";
import EventService from "./APIServices/EventService";

const userService = UserService.getInstance();

class Profile extends Component {

	userNameToBeSearched = '';

	constructor(props) {
		super(props);
		if (props.match.params.profileId === null || props.match.params.profileId === undefined) {
			this.userNameToBeSearched = localStorage.getItem("currentUser");
		} else {
			this.userNameToBeSearched = props.match.params.profileId
		}
		this.state = {
			userData: userService.getUserData(this.userNameToBeSearched),
			displayProfile: true,
			searchFormData: '',
			profileSearchResult: null,
			eventList: [],
			profileId: props.match.params.profileId

		}
	}

	componentDidMount() {
		let eventData = [];
		userService.getUserData(this.userNameToBeSearched).then(response => {
			this.setState({
				userData: response,
				eventList: response.events
			}, () => {
				this.state.eventList
					.forEach(event => {
						EventService.getInstance().getEventDataUsingEventId(event)
							.then(response => {
								eventData.push(response);
								this.setState({
									eventList: eventData
								});
							});
					});
			});
		});
	}

	generateProfileList() {
		if ((!this.state.displayProfile) && (this.state.searchFormData !== '')) {
			userService.getProfileSearchResult(this.state.searchFormData).then(response => {
				this.setState({
					profileSearchResult: [response],
					searchFormData: ''
				});
			});
		}
	};

	renderProfileList = (flag, formData) => {
		this.setState({
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
					.then(response => {
						this.setState({
							userData: response,
							displayProfile: true,
							searchFormData: '',
							profileSearchResult: null
						})
					}))
	};

	unFollowUser = (follow, follower) => {
		console.log("follow: ", follow," follower: ", follower);
		userService.unFollowUser(follow, follower)
			.then(response =>
				userService.getUserData(localStorage.getItem("currentUser"))
					.then(response => {
						this.setState({
							userData: response,
							displayProfile: true,
							searchFormData: '',
							profileSearchresult: null
						})
					}))
	};

	changeVisibiltiy = (visibilityValue, eventData) => {
		eventData.isPrivate = visibilityValue;
		let temp = eventData._id;
		let tempData = [];
		EventService.getInstance().updateEvent(eventData)
			.then(response => {
				tempData = Array.from(Object.create(this.state.eventList));
				tempData = tempData.filter(event => event["_id"] !== temp);
				tempData.push(eventData);
				this.setState({
					eventList: tempData
				});
		});
	};

	render() {
		return (
			<div style={{"height": "100%"}}>
				<ProfileNavBar
					renderProfileList={this.renderProfileList}
					changeField={this.changeField}
					username={localStorage.getItem("currentUser")}/>
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
						lastName={this.state.userData.lastName}/>
					:
					<ProfileList searchResult={this.state.profileSearchResult}
					             followUser={this.followUser}/>}

			</div>
		)
	}
}

export default (Profile)
