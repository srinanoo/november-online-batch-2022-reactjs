import React from "react";

class ClsPropsStates extends React.Component {
    constructor(props) {
        super(props);

        this.props.dinesh.name = "Name Changed";

        this.state = {
            "name": "Initial Name",
            "subject": "ReactJs",
            "age": 30,
        }

        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        console.log("updateState function called");
        // this.props.dinesh.name = "Name tried to updated inside Function";

        this.setState((...prevState) => ({...prevState, "name": "Updated Name"}));
    }

    render() {
        return (
            <>
                <h2>Class Component</h2>
                <p>Name: {this.props.dinesh.name}</p>
                <p>Id: {this.props.dinesh.id + 10}</p>
                <p>Active: {this.props.dinesh.active.toString()}</p>
                <p>Age: {this.props.dinesh.age}</p>

                <hr />

                <h3>State Data</h3>
                <p>Name: {this.state.name}</p>
                <p>Subject: {this.state.subject}</p>
                <p>Age: {this.state.age}</p>

                <p><button onClick={this.updateState}>Update State Data</button></p>

                <p><button onClick={() => this.setState(() => ({"name": "Arrow Function Name", "subject": "MongoDB", "age": 50}))}>Update State Data Using Arrow Function</button></p>

            </>
        )
    }
}

export default ClsPropsStates;