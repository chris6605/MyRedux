

function creatStore(reducer) {

    let state = { count: 0 }
    let listeners = []

    // 定义几个输出的方法
    const subscribe = listener => {
        listeners.push(listener)
    }

    const getState = () => state

    const dispatch = action => {
        state = reducer(state, action)
        listeners.forEach(lis => lis())
    }

    return { subscribe, getState, dispatch }
}


export {
    creatStore
}