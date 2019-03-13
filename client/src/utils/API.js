import axios from "axios";

export default {
// Blockchain API
    createToken: function(data) {
        console.log(data);
        return axios.post("http://40.87.80.12:10050/create-token?owner=" + data.owner + "&description=" + data.description, null, 
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
    },
    transferToken: function(id, newOwner) {
        return axios.put("/transfer-token", id, newOwner);
    },
    loadTokens: function () {
        console.log(window.location + "40.87.80.12:10053/tokens");
        return axios.get("/40.87.80.12:10053/tokens");
    },
// 3rd party API's
    // spotify
    getTracks: function() {
        return axios.get("http://api.spotify.com/v1/artists/1");
    }
};