export default class UserService {
  static oneInstance = null;

  //return a single instance of the TextSearchAPIService class.
  static getInstance() {
    if (this.oneInstance === null) {
      UserService.oneInstance = new UserService();
    }
    return this.oneInstance;
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