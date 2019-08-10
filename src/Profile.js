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
		//console.log("props match: ", props.match.params.profileId);
		localStorage.setItem("currentUser", "hmavani");
		console.log("window storage: ", localStorage);
		if (props.match.params.profileId === null || props.match.params.profileId === undefined) {
			this.userNameToBeSearched = localStorage.getItem("currentUser");
			//console.log("username to be searched: ", this.userNameToBeSearched)
		} else {
			this.userNameToBeSearched = props.match.params.profileId
		}
		this.state = {
			userData: userService.getUserData(this.userNameToBeSearched),
			displayProfile: true,
			searchFormData: '',
			profileSearchResult: null,
			eventList: []

		}
	}

	componentDidMount() {
		console.log("component did mount.");

		let eventData = [];
		userService.getUserData(this.userNameToBeSearched).then(response => {
			this.setState({
				userData: response,
				eventList: response.events
			}, () => {
				this.state.eventList
					.forEach(event => {
						//console.log(event);
						EventService.getInstance().getEventDataUsingEventId(event)
							.then(response => {
								//console.log("event resp: ", response);
								eventData.push(response);
								this.setState({
									eventList: eventData
								});
								//console.log("event data: ", eventData, this.state.eventList);
							});
					});
				//console.log("event data: ", eventData);
			});
		});
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		this.state.eventList.forEach(event => console.log(new Date(event.date) > new Date()));
	}

	generateProfileList() {
		if ((!this.state.displayProfile) && (this.state.searchFormData !== '')) {
			userService.getProfileSearchResult(this.state.searchFormData).then(response => {
				this.setState({
					profileSearchResult: [response],
					searchFormData: ''
				}, () => {
					//console.log("result from service: ", this.state.profileSearchResult)
				});
			});
		}
	};

	renderProfileList = (flag, formData) => {
		//console.log("Inside render profile function. Setting flag to: ", flag, " formData: ", formData);
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
							profileSearchresult: null
						})
					}))
	};

	unFollowUser = (follow, follower) => {
		userService.unFollowUser(follow, follower)
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

	changeVisibiltiy = (visibilityValue, eventData) => {
		eventData.isPrivate = visibilityValue;
		let temp = eventData._id;
		console.log("event data: ", eventData, temp);
		let tempData = [];
		EventService.getInstance().updateEvent(eventData)
			.then(response => {
				tempData = Array.from(Object.create(this.state.eventList));
				tempData = tempData.filter(event => event["_id"] !== temp);
				console.log("event list data before change: ", tempData);
				tempData.push(eventData);
				console.log("event list data after change: ", tempData);
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
						changeVisibiltiy={this.changeVisibiltiy}
						events={this.state.eventList}
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
