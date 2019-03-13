import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/API";

class Settings extends Component {
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
                Adjust Settings
                <br/>
                <br/>
                <form>
                    <label htmlFor="Username">Username</label>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="New Username" 
                    />
                    <label htmlFor="Password">Password</label>
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="New Password" 
                    />
                    <label htmlFor="First and Last Name">First and Last Name</label>
                    <Input
                        value={this.state.fullname}
                        onChange={this.handleInputChange}
                        name="fullname"
                        placeholder="New Name" 
                    />
                    <FormBtn
                        disabled={!(this.state.name && this.state.password)}
                        onClick={this.handFormSubmit}
                    >
                    Save Changes
                    </FormBtn>
                </form>
            </div>
        );
    }
}

export default Settings;