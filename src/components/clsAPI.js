import React from "react";

class ClsAPI extends React.Component {
    constructor() {
        super();

        this.state = {
            apiData: {}
        }

        this.timer = "";
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextState.apiData, " - nextstate");
        // console.log(this.state.apiData, " - currentstate");

        // return false;

        // if(JSON.stringify(nextState.apiData) !== JSON.stringify(this.state.apiData))
        //     return true;
        // return false;

        return (JSON.stringify(nextState.apiData) !== JSON.stringify(this.state.apiData)) ? true : false;
    }

    fetchData(usCode) {
        fetch(`https://api.zippopotam.us/us/${usCode}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                this.setState({apiData: data});
            });
    }

    componentDidMount() {
        this.fetchData(33162);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevState.apiData.places, " - get snapshot before update");
        return "";
    }

    componentDidUpdate() {
        this.timer = setInterval(() => {
            console.log("componentDidUpdate...")
            this.fetchData(94501);    
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        console.log("rendering...");
        return (
            <>
                <h1>API Data</h1>
                {
                    this.state.apiData.places && <p>State: {this.state.apiData.places[0].state}</p>
                }
                
                <p>Country: {this.state.apiData.country}</p>
            </>
        )
    }
}

export default ClsAPI;