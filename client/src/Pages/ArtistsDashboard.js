import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/API";


class Artist extends Component {
    state={//filled in by spotify api
        id: "0OdUWJ0sBjDrqHygGUXeCF",
        name: "",
        numFollowers: "",
        popularity: "",
        images: [],
        tokens: [],
        search: ""
    }
    componentDidMount() {
        this.loadTokens();
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

    loadTokens = () => {
        API.loadPublisherTokens().then(res => {
            this.setState({ tokens: res.data });
            console.log(this.state.tokens);
        });
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        let filteredArtists = this.state.tokens.filter(
            (artist) => {
                return artist.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
        return (
            <div className="container">
                <b>{this.state.name}</b><br/>
                Universal's Dashboard <br/><br/>
                <b>Spotify Information</b><br/>
                You have {this.state.numFollowers} followers on Spotify.<br/>
                Your popularity on Spotify is {this.state.popularity}.

                <br/><br/> Images: {JSON.stringify(this.state.images)}
                <br/><br/>
                <form className="filterArtists">
                    <label htmlFor="fuzzySearch">Search Artists for FanChain Following</label>
                    <input
                        className="form-control"
                        type="search"
                        name="search"
                        value={this.state.search}
                        placeholder="Search"
                        aria-label="Search"
                        onChange={this.handleInputChange}
                        />
                </form>
                <div>
                    <h2 className="fanChainNumbers">Artist FanChain: {filteredArtists.length}</h2>
                    {filteredArtists.length ? (
                        <div className="card">
                            {filteredArtists.map(artist => (
                                <div className="card-body">
                                <Link to={"/promotions/" + artist.description}><strong>{artist.description}</strong></Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h3>Cannot find any Artists</h3>
                    )}
                </div>
            </div>
        );
    }
}

export default Artist;