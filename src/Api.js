import React, {Component} from 'react'

export default class Api extends Component {
    state = {
        data: []
    }

    // component did mount
    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response => {
            if(response.ok){
               return response.json()
            } else {
                return null;
                // throw new Error('Something went wrong:')
            }
        })
        .then(result => {
            this.setState({
                data: result
            })
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    
    render(){
        const {data} = this.state;
        data.length = 10;
        const result = data ? data.map((entry, index)=>{
            return <li key={index}>{entry.title}</li>
        }) : <p>No data found</p>;
        
        return (
            <div>
                <h4>Pulling in API Data</h4>
                <ul>
                {result} 
                </ul>
            </div>
        )
    }
}