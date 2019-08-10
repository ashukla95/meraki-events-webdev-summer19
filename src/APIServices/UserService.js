export default class UserService {
	static oneInstance = null;

	//return a single instance of the TextSearchAPIService class.
	static getInstance() {
		if (this.oneInstance === null) {
			UserService.oneInstance = new UserService();
		}
		return this.oneInstance;
	}

	getProfileSearchResult = (profileUserName) => {
		return fetch(`https://meraki-backend-wbdv.herokuapp.com/api/user/${profileUserName}`)
			.then(response => response.json())
	};

	getUserData(username) {
		//console.log("username received: ", username);
		return fetch(`https://meraki-backend-wbdv.herokuapp.com/api/user/${username}`)
			.then(response => response.json())
	}

	followUser(follow, follower) {
		return fetch(`https://meraki-backend-wbdv.herokuapp.com/api/follow/${follow}/follower/${follower}`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(response => true)
			.catch(error => error.json())
	}

	unFollowUser(follow, follower) {
		return fetch(`https://meraki-backend-wbdv.herokuapp.com/api/unfollow/${follow}/follower/${follower}`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(response => true)
			.catch(error => error.json())
	}
}

/*
* primary: {
        userName: "Username",
        name: "Full name",
        dob: "08-01-94",
      },
      events: [
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
      ],
      followers: {
        followers: ["Harshil Mavani", "ParthSaarthi Mitra"],
        following: ["Harshil Mavani"]
      }*/
