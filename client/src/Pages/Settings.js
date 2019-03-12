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
                <form>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="darkMaster" 
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="password" 
                    />
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
                    Save Changes
                    </FormBtn>
                </form>
            </div>
        );
    }
}

export default Settings;