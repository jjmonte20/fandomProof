import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/API";
import tracks from "../userData.json"

class Dashboard extends Component {
    state={
        tracks
    }
    // Dashboard will be a splash page for the user's account

    render() {
        return (
            <div className="container">
                You've made it
            </div>
        );
    }
}

export default Dashboard;