import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/API";
import Jumbotron from "../Components/Jumbotron";

class Home extends Component {
    state={
        name: "",
        password: "",
    }

    componentDidMount() {
        API.getTracks().then(res => console.log(res.data));
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
                </Jumbotron>
            </div>
        );
    }
}

export default Home;