export function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TASK': {
            const newTask = action.payload
            return {...state, list: [...state.list, newTask]}
        }

        case 'MARK_TASK': {
            return {...state, list: state.list.map((el) => {
                if (el.id === action.payload.id) {
                    return {...el, status: !el.status}
                } else {
                    return el
                }
            })}
        }

        case 'DELETE_TASK': {
            return {...state, list: state.list.filter((el) => el.id !== action.payload.id)}
        }

        case 'INVERT_TASK': {
            return {...state, list: [...state.list]}
        }

        default: {
            return state
        }
    }
}