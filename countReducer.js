
import *as types from './countTypes'

const defaultState = { count: 0 }

const countReducer = (state = defaultState, action) => {

    switch (action.type) {

        case types.INC:
            return {
                ...state,
                count: state.count + 1
            }
        case types.RED:
            return {
                ...state,
                count: state.count - 1
            }
        case types.RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }

}


export {
    countReducer
}