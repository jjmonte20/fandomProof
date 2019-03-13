import React, { Component } from "react";
import promotion from "../promotions.json";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/API";

class Promotions extends Component {
    state={
        type: "",
        link: "",
        promotion
    }

    componentDidMount() {
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handFormSubmit = e => {
        e.preventDefault();
        console.log(this.state.type, this.state.link);
        promotion.push({
            event: this.state.type,
            link: this.state.link
        })
    }

    render() {
        let url = window.location.toString();
        let result = url.substring(url.lastIndexOf("/") + 1);
        return (
            <div className="container">
                <h1>Promote {result} here</h1>
                <form>
                    <label htmlFor="Type">Media Type</label>
                    <Input
                        value={this.state.type}
                        onChange={this.handleInputChange}
                        name="type"
                        placeholder="Concert, Album, Song..." 
                    />
                    <label htmlFor="Link">Link to Promotion</label>
                    <Input
                        value={this.state.link}
                        onChange={this.handleInputChange}
                        name="link"
                        placeholder="www.ticketmaster.com/..." 
                    />
                    <FormBtn
                        disabled={!(this.state.type && this.state.link)}
                        onClick={this.handFormSubmit}
                    >
                    Promote
                    </FormBtn>
                </form>
            </div>
        )
    }
}

export default Promotions;