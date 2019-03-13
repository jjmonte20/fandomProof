import axios from "axios";

var CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
var CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
var REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
//var token = ''; //need to implement server side token generation
var token = process.env.REACT_APP_SPOTIFY_TOKEN;

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
    },
    getArtistInfo: function(artist_id) {
        /*if (token == '') {
            var authorization_param='Basic ' + new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64');
            //https://accounts.spotify.com/api/token
            axios.post(`https://accounts.spotify.com/api/token`, {
                headers: {'Content-Type':'application/x-www-form-urlencoded', "Authorization": authorization_param}, params: {"grant_type": 'authorization_code'}
            })
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log("error here");
                console.log(error);
            });
        }*/
        return axios.get(`https://api.spotify.com/v1/artists/${artist_id}`,
        {
            headers: {"Authorization": 'Bearer ' + token}
        });
    }
};