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
        fandom: []
    }

    componentDidMount() {
        this.loadTokens();
        this.loadFandom();
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

    loadTokens = () => {
        API.loadTokens().then(res => {
            this.setState({ fandom: res.data });
            this.loadFandom();
        });
    }

    addToken = body => {
        API.createToken({
            owner: "FanA", 
            description: body
        }).then(res => {
            console.log(res);
            this.loadTokens();
        });
    }

    loadFandom = () => {
        console.log(this.state.fandom);
    }

    giftToFriend = (thing) => {
        API.transferToken({
            id: thing,
            newOwner: "FanB"
        }).then(res => {
            console.log(res);
            this.loadTokens();
        });
    }

    render() {
        let filteredTokens = this.state.fandom.filter(
            (token) => {
                return token.owner.indexOf("FanB");
            }
        );
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Welcome to FanProof</h1>
                    <div>
                        {filteredTokens.length ? (
                            <List>
                                {filteredTokens.map(item => (
                                    <ListItem>
                                        <strong>
                                            {item.description} from {item.creator}
                                        </strong>
                                        <button type="button" className="btnKeyGift btn btn-success" onClick={() => this.giftToFriend(item.id)}>
                                            Gift to friend
                                        </button>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No results to display</h3>
                        )}
                    </div>
                </Jumbotron>
                    <div>
                        {this.state.tracks.length ? (
                            <List>
                                {this.state.tracks.map(song => (
                                    <ListItem>
                                        <strong>
                                            {song.track.name} by {song.track.artists[0].name}
                                        </strong>
                                        <button type="button" className="btnKeyAdd btn btn-success" onClick={() => this.addToken(song.track.artists[0].name)}>Purchase</button>
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