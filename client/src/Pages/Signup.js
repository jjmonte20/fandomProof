import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/API";

class Signup extends Component {
    state={
        name: "",
        password: "",
        fullname: ""
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
                <br />
                <br />
                Signup for an account
                <br/>
                <br/>
                <form>
                    <label htmlFor="username">Username</label>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="darkMaster" 
                    />
                    <label htmlFor="password">Password</label>
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="password" 
                    />
                    <label htmlFor="fullname">First and Last Name</label>
                    <Input
                        value={this.state.fullname}
                        onChange={this.handleInputChange}
                        name="fullname"
                        placeholder="John Doe" 
                    />
                    <FormBtn
                        disabled={!(this.state.name && this.state.password)}
                        onClick={this.handFormSubmit}
                    >
                    Signup
                    </FormBtn>
                </form>
            </div>
        );
    }
}

export default Signup;