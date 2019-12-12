import React, {Component} from 'react'

const TableHeader = () => {
    const thead = () => {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }
    return thead;
}

const TableBody = props => {
    const rows = props.characterData.map(function(el, index){
        return (
            <tr key={index}>
                <td>{el.name}</td>
                <td>{el.job}</td>
                <td>
                    <button className="btn btn-primary mr-2" onClick={() => props.editCharacter(index)}>Edit</button>
                    <button className="btn btn-danger" onClick={()=>props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    }) 
    return <tbody>{rows}</tbody>
}

export default class Table extends Component {    
    render () {        
        const { characterData, removeCharacter, editCharacter } = this.props
        return (
            <div>
                <table>
                    <TableHeader />
                    <TableBody characterData={characterData} removeCharacter={removeCharacter} editCharacter={editCharacter}/>                    
                </table>
            </div>
        )
    }
}

