import React, {Component}  from 'react'
import Table from './Table'
import Form from './Form'
import SelectedPerson from './SelectedPerson'
import Api from './Api'

class App extends Component {    
    state = {
        characters: [
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
          ],
        initialState: {
            name: '',
            job: ''
        }
    };  
    
    removeCharacter = (index) => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character, i)=>{
                return i !== index;
            })
        });
        this.setState({
            initialState: {name: '', job: ''}
        }) 
    }

    // add Character
    handleSubmit = character => {
        let hasCharacter = this.state.characters.some(item => {
            return character.name === item.name && character.job === item.job;
        })
        if(!hasCharacter && (character.name  && character.job )) {
            this.setState({ characters: [...this.state.characters, character] })
        }       
        this.setState({
            initialState: {name: '', job: ''}
        }) 
    }

    // edit character
    editCharacter = (index) => {
        const {characters} = this.state;
        this.setState({
            initialState : characters[index]
        })
    }

    

    render() {
        return (
            <div className="container">
                <div>
                    <h1 className="text-center text-primary">React Tutorial</h1>
                </div>
                <div className="row">                  
                    <div className="col-sm-6">
                        <h4>List of Characters </h4>
                        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} editCharacter={this.editCharacter} />
                    </div>
                    <div className="col-sm-6">
                        <h4>Edit Character</h4>
                        <Form handleSubmit={this.handleSubmit} initialState={this.state.initialState} />
                        <h4>Selected Character</h4>
                        <SelectedPerson initialState={this.state.initialState} />
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Api />
                    </div>
                </div>
            </div>
        )
    }
}


export default App;