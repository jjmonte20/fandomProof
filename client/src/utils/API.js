import axios from "axios";

export default {
// Blockchain API
    createToken: function(data) {
        console.log(data);
        return axios.post("http://40.87.80.12:10050/create-token?owner=" + data.owner + "&description=" + data.description, null, 
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
    },
    transferToken: function(data) {
        return axios.put("http://40.87.80.12:10053/transfer-token?id=" + data.id + "&newOwner=" + data.newOwner, null, 
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
    },
    loadTokens: function () {
        return axios.get("http://40.87.80.12:10053/tokens");
    },
    loadPublisherTokens: function() {
        return axios.get("http://40.87.80.12:10050/tokens");
    },
// 3rd party API's
    // spotify
    getTracks: function() {
        return axios.get("http://api.spotify.com/v1/artists/1");
    }
};