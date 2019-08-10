export default class UserService {
  static oneInstance = null;
  backendUrl = "http://localhost:8080";
  //return a single instance of the TextSearchAPIService class.
  static getInstance() {
    if (this.oneInstance === null) {
      UserService.oneInstance = new UserService();
    }
    return this.oneInstance;
  }

  getProfileSearchResult = () => {
    return ["A", "B", "C"];
  };

  createUser(user) {
    return fetch(`${this.backendUrl}/api/user`, {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .catch((error) => console.log(error));
  }

  getTotalUsers() {
    return fetch(`${this.backendUrl}/api/user`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(users => users.json())
      .catch(error => error);
  }

  login(username, password) {
    return fetch(`${this.backendUrl}/api/login`, {
      method: 'post',
      body: JSON.stringify({ username, password }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(user => user.json())
      .catch(error => undefined);
  }

  getUserData() {
    return {
      primary: {
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
      }
    }
  }
}
