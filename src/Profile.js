import React, {Component} from 'react';
import ProfileNavBar from "./modules/views/ProfileNavBar";
import ProfileBody from "./modules/views/ProfileBody";
import UserService from './APIServices/UserService';
import ProfileList from "./modules/components/ProfileList";

const userService = UserService.getInstance();

class Profile extends Component {

	userNameToBeSearched = '';

	constructor(props) {
		super(props);
		console.log("props match: ", props.match.params.profileId);
		window.localStorage.setItem("currentUser", "hmavani");
		console.log("window storage: ", window.localStorage);
		if (props.match.params.profileId === null || props.match.params.profileId === undefined) {
			this.userNameToBeSearched = window.localStorage.getItem("currentUser");
			console.log("username to be searched: ", this.userNameToBeSearched)
		} else {
			this.userNameToBeSearched = props.match.params.profileId
		}
		this.state = {
			userData: userService.getUserData(this.userNameToBeSearched),
			displayProfile: true,
			searchFormData: '',
			profileSearchResult: null

		}
	}

	componentDidMount() {
		console.log("component did mount.")
		userService.getUserData(this.userNameToBeSearched).then(response => {
			this.setState({
				userData: response
			})
		})
	}

	generateProfileList() {
		if ((!this.state.displayProfile) && (this.state.searchFormData !== '')) {
			userService.getProfileSearchResult(this.state.searchFormData).then(response => {
				this.setState({
					profileSearchResult: [response],
					searchFormData: ''
				}, () => {
					console.log("result from service: ", this.state.profileSearchResult)
				});
			});
		}
	};

	renderProfileList = (flag, formData) => {
		console.log("Inside render profile function. Setting flag to: ", flag, " formData: ", formData);
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
				userService.getUserData(window.localStorage.getItem("currentUser"))
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
				userService.getUserData(window.localStorage.getItem("currentUser"))
					.then(response => {
						this.setState({
							userData: response,
							displayProfile: true,
							searchFormData: '',
							profileSearchResult: null
						})
					}))
	};

	render() {
		return (
			<div style={{"height": "100%"}}>
				<ProfileNavBar
					renderProfileList={this.renderProfileList}
					changeField={this.changeField}
					username={this.state.userData.username}/>
				{this.state.displayProfile ?
					<ProfileBody
						events={this.state.userData.events}
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
