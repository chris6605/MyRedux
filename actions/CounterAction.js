import *as types from '../countTypes'


function increase() {
    return { type: types.INC }
}

function reduce() {
    return { type: types.RED }
}

function reset() {
    return { type: types.RESET }
}


export {
    increase,
    reduce,
    reset
}
