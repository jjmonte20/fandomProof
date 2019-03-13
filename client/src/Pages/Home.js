import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/API";
import Jumbotron from "../Components/Jumbotron";
import { List, ListItem } from "../Components/List";
import tracks from "../userData.json";

class Home extends Component {
    state={
        name: "",
        password: "",
        tracks,
        track: []
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handFormSubmit = e => {
        e.preventDefault();
        if (this.state.name && this.state.password) {
            console.log(this.state.name);
            console.log(this.state.password);
        }
    }

    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Welcome to FanProof</h1>
                    <FormBtn
                        onClick={this.loadTracks}
                    >
                        Log tracks
                    </FormBtn> 
                </Jumbotron>
                    <div>
                        {this.state.tracks.length ? (
                            <List>
                                {this.state.tracks.map(song => (
                                    <ListItem>
                                        <strong>
                                            {song.track.name} by {song.track.artists[0].name}
                                        </strong>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No results to display</h3>
                        )}
                    </div>
            </div>
        );
    }
}

export default Home;