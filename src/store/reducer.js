import * as actions from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actions.ADD_PERSON):
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.name,
                age: action.age
            }

            return {...state, persons: state.persons.concat(newPerson)};
        case (actions.REMOVE_PERSON):
            return {...state, persons: state.persons.filter(person => person.id !== action.personId)}
    }
    return state;
}

export default reducer;