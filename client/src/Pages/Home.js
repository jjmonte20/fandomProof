import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/API";
import Jumbotron from "../Components/Jumbotron";
import { List, ListItem } from "../Components/List";
import tracks from "../userData.json";

class Home extends Component {
    state={
        currentUser: "FanA",
        secondaryUser: "FanB",
        name: "",
        password: "",
        tracks,
        fandom: []
    }

    componentDidMount() {
        this.setState({currentUser: "FanA"});
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
            owner: this.state.currentUser, 
            description: body
        }).then(res => {
            alert(res.data);
            this.loadTokens();
        });
    }

    loadFandom = (user) => {
        //this.setState({currentUser: user});
        console.log(user);
    }

    giftToFriend = (thing) => {
        API.transferToken({
            id: thing,
            newOwner: this.state.secondaryUser
        }).then(res => {
            alert(res.data);
            this.loadTokens();
        });
    }

    switchUser = () => {
        var curr = this.state.currentUser;
        var newUser = this.state.secondaryUser;
        this.setState({currentUser: newUser, secondaryUser: curr});
    }

    render() {

        console.log(this.state.currentUser)
        let filteredTokens = this.state.fandom.filter(
            (token) => {
                return token.owner.indexOf(this.state.secondaryUser);
            }
        );

        console.log(this.state.currentUser)

        return (
            
            <div className="container">
                <button type="button" className="btnSwitchUser btn btn-success" onClick={(e) => {this.switchUser()}}>
                    Switch User
                </button>
                <Jumbotron>
                    <h1>{this.state.currentUser}'s FanChain: {filteredTokens.length} items</h1> 
                    <div>
                        {filteredTokens.length ? (
                            <List>
                                {filteredTokens.map(item => (
                                    <ListItem>
                                        <strong>
                                            {item.description} from {item.creator}
                                        </strong>
                                        <div class="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {this.state.secondaryUser}
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                <button className="dropdown-item" type="button">{this.state.secondaryUser}</button>
                                            </div>
                                        </div>
                                        <button type="button" className="btnKeyGift btn btn-success" onClick={(e) => { if (window.confirm(`Please confirm you wish to FanChain transfer ${item.description} to ${this.state.secondaryUser} from ${item.creator}`))  this.giftToFriend(item.id)}}>
                                            Gift to
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