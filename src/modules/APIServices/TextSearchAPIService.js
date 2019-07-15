import Accessory from './../accessories/Accessory'
import places from './../../dummyData/placesD'
export default class TextSearchAPIService {

    static oneInstance = null;

    static getInstance() {
        if(this.oneInstance === null){
            TextSearchAPIService.oneInstance = new TextSearchAPIService();
        }
        return this.oneInstance;
    }

    findPlaces = (data) => {
        let temp = [];
        console.log("places", places, " ", places.candidates);
        temp = places.candidates.filter(places => places.name.toUpperCase().search(data.toUpperCase()) > -1);
        console.log("temp", temp);
        return temp;
        /*let temp = {"place": data};
        return fetch("https://meraki-backend-wbdv.herokuapp.com/api/places",{
            method: "GET",
            body: JSON.stringify(temp),
            headers: {
                "content-type":"application/json",
            }
        }).then(response => response.json());*/
    }
}


