import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/API";

class Home extends Component {
    state={
        name: "",
        password: "",
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
                Welcome to Fan Proof
                <form>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="John Smith" 
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="password" 
                    />
                    <FormBtn
                        disabled={!(this.state.name && this.state.password)}
                        onClick={this.handFormSubmit}
                    >
                    Submit
                    </FormBtn>
                </form>
            </div>
        );
    }
}

export default Home;