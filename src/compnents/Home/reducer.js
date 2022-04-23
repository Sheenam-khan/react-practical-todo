
const initialState = {
    todos: [
        {
            text: "hello dear"
        }
    ],
    field: { value: '', add: true, index: '' },
    selectedValues: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, field: { add: action.payload.add, value: action.payload.value, index: action.payload.index } }

        case 'RESET_TEXT':
            return { ...state, field: { add: true, value: '', index: '' } }
        case 'GET':
            return { ...state, todos: [...action.payload] }
        case 'ADD':
            return { ...state, todos: [...state.todos, action.payload] }
        case 'UPDATE': {
            console.log("action", action.payload)
            const { text } = action.payload
            return {
                ...state, todos: state.todos.map((x, index) =>
                    index == action.payload.index ? { text } : x
                ),
            }
        }
        case 'DELETE':
            return { ...state, todos: state.todos.filter((x, index) => index != action.payload) }
        case 'SELECT':
            return { ...state, selectedValues: [...state.selectedValues, action.payload] }
        case 'UNSELECT':
            return { ...state, selectedValues: state.selectedValues.filter((x, index) => index != action.payload) }
        case 'DELETE_MULTIPLE':
            return { ...state, todos: state.todos.filter((x, index) => state.selectedValues.indexOf(index) == -1), selectedValues: state.todos.length > 1 ? state.selectedValues : [] }

        default: return state;
    }
}

export { reducer, initialState }
