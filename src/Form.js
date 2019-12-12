import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.initialState;
    }

    componentWillReceiveProps (nextState){
        this.setState({
            ...nextState.initialState
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    onSubmitForm = (event) => {
       event.preventDefault();
       this.props.handleSubmit(this.state);
    }

    render() {
        const { name, job } = this.state;
        return (
            <form onSubmit={this.onSubmitForm}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                 />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange}
                 />
                <button type="submit" className="btn btn-primary">Add New</button>
            </form>
        )

    }
}

export default Form;

