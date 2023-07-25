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

        default: {
            return state
        }
    }
}