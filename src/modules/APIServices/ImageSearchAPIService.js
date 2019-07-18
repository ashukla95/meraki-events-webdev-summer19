export default class ImageSearchAPIService {
    /*A class that provides functionality tocommunicate with various back-end services inorder to extract details
    that are required to be rendered inside the respective components of the application.*/

    //static variable to hold the instance of the class ImageSearchAPIService.
    static oneInstance = null;

    //return a single instance of the ImageSearchAPIService class.
    static getInstance() {
        if (this.oneInstance === null) {
            ImageSearchAPIService.oneInstance = new ImageSearchAPIService();
        }
        return this.oneInstance;
    }


    getImageFromPhotoReference = async (maxWidth, photoReference) => {
        /*const response = await fetch(`https://meraki-backend-wbdv.herokuapp.com/api/details?placeId=${maxWidth}`);
        return await response.json();*/
        return null;
    }
}


