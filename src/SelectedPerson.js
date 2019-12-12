import React, {Component} from "react";

class SelectedPerson extends Component {
    constructor(props){
        super(props);
        
        this.state = this.props.initialState;
    }

    componentWillReceiveProps(nextState){
        this.setState({
            ...nextState.initialState
        })
    }

    render(){
        return (
            <div>
                <p>Name : {this.state.name}</p>
                <p>Job : {this.state.job}</p>
            </div>
        )
    }
}

export default SelectedPerson;