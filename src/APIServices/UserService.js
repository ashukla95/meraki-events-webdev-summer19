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
    return fetch(`https://meraki-backend-wbdv.herokuapp.com/api/user/${username}`)
      .then(response => response.json())
      .catch(error => undefined)
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

  getTotalUsers() {
    return fetch(`https://meraki-backend-wbdv.herokuapp.com/api/user/`)
      .then(response => response.json());
  }

  login(username, password) {

    return fetch(`http://localhost:8080/api/login/`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .catch(error => undefined)
  }

  createUser(userData) {
    return fetch(`https://meraki-backend-wbdv.herokuapp.com/api/user`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then(response => response.json());
  }
}
