import axios from "axios";

export default {
// Blockchain API
    createToken: function(id, description) {
        return axios.post("/create-token", id, description);
    },
    transferToken: function(id, newOwner) {
        return axios.put("/transfer-token", id, newOwner);
    },
    tokens: function () {
        return axios.get("/tokens");
    },
// 3rd party API's
    // spotify
    getTracks: function() {
        return axios.get("http://api.spotify.com/v1/artists/1");
    }
};