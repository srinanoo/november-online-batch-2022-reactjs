import React from "react";

class ClsLifeCycle extends React.Component {
    constructor(props) {
        super(props);
        // initialisation

        this.state = {
            name: "Initial Name",
            subject: "Initital Subject",
            age: 0,
            arr: [],
            obj: {},
            login: false,
            menu: ["Home", "About", "Contact", "Login"],
        }

        // this way of updating the state from props is not recommended...
        // this.state = {
        //     name: this.props.name,
        //     subject: this.props.subject
        // }

        this.handleState = this.handleState.bind(this);
    }

    static getDerivedStateFromProps(props) { 
        // will be called in the Mounting and as well as Updating cycle...
        // accept "props" as parameter and returns a state object
        return { login: props.login };
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.state.name, "Existing State");
        // console.log(nextState.name, "Next State");

        if(this.state.name !== nextState.name)
            return true;

        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // gets/stores the snapshot before updating the state
        console.log(prevState.name, " - Previous State - getSnapshotBeforeUpdate");
        return "";
    }

    componentDidUpdate() {
        // has the final state variable data
        // the API calls or state variable should be updated here...
        console.log(this.state.name, " - Current State - componentDidUpdate");
    }

    handleState() {
        this.setState((...prevState) => {
           return {...prevState, name: "Tony", subject: "NodeJs", login: true, menu: ["Home", "About", "Contact", "Logout"]} 
        });
    }

    componentDidMount() {
        // will be called/executed only once and that too in the Mounting cycle
        // after rendering the component, whether state should be updated or API calls...

        this.setState((...prevState) => {
            return {
                ...prevState,
                name: "New State Name",
                subject: "New State Subject"
            }
        });
    }

    render() {
        // return the JSX fragment
        console.log("rendering");
        return (
            <>
                {/* <MenuComponent menuData={this.state.menu} /> */}

                Login: {this.state.login.toString()}

                <h1>Class Component</h1>
                <h4>From State Variables</h4>
                <div>
                    <p>Name: {this.state.name}</p>
                    <p>Subject: {this.state.subject}</p>
                </div>
                <p><button onClick={this.handleState}>Update State</button></p>

                <h4>From Props Variables</h4>
                <div>
                    <p>Name: {this.props.name}</p>
                    <p>Subject: {this.props.subject}</p>
                </div>

                
            </>
        )
    }
}

class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h3>Child Component</h3>
                <ul>
                {
                    this.props.menuData && this.props.menuData.map((v, i) => <li key={i}>{v}</li>)
                }
                </ul>
            </>
        )
    }
}

export default ClsLifeCycle;