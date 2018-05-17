import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Example extends Component {
    constructor() {
        this.state = {
            message: "Loading..."
        };
    }
    componentDidMount() {
        axios({
            method: "get",
            url: "/api/v1/user"
        }).then(response => {
            console.log(response);

            this.setState({
                message: "Success"
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">{this.state.message}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
