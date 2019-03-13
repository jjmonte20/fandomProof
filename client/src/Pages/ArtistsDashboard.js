import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/API";


class Artist extends Component {
    state={//filled in by spotify api
        id: "0OdUWJ0sBjDrqHygGUXeCF",
        name: "",
        numFollowers: "",
        popularity: "",
        images: []
    }
    componentDidMount() {
        API.getArtistInfo(this.state.id).then(res => {
            let images = this.state.images;
            for (var i in res.data.images) {
                images.push(res.data.images[i]);
            }
            this.setState({
                name: res.data.name,
                numFollowers: res.data.followers.total,
                popularity: res.data.popularity,
                images: images
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    
    





    render() {
        return (
            <div className="container">
                <b>{this.state.name}</b><br/>
                You're an artist <br/><br/>
                <b>Spotify Information</b><br/>
                You have {this.state.numFollowers} followers on Spotify.<br/>
                Your popularity on Spotify is {this.state.popularity}.

                <br/><br/> Images: {JSON.stringify(this.state.images)}
            </div>
        );
    }
}

export default Artist;