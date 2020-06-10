import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../store/actions';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonRemoved(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { persons: state.persons}
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: () => dispatch({type: actions.ADD_PERSON}),
        onPersonRemoved: (personId) => dispatch({type: actions.REMOVE_PERSON, personId: personId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);