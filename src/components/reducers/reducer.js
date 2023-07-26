export function reducer(state, action) {
    switch(action.type) {

        case 'ADD_TASK': {
            const newTask = action.payload
            return [newTask, ...state]
        }

        case 'MARK_TASK': {
            return state?.map((el) => {
                if (el.id === action.payload.id) {
                    return {...el, status: !el.status}
                } else {
                    return el
                }
            })
        }

        case 'DELETE_TASK': {
            return state.filter((el) => el.id !== action.payload.id)
        }

        case 'EDITED_TASK': {
            return state.map((el) => {
                if (el.id === action.payload.id) {
                    return {...el, text: action.payload.text}
                } else {
                    return el
                }
            })
        }

        default: {
            return state
        }
    }
}