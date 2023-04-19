import { applyMiddleware , legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'

function rootReducer(state=initialState,{type , payload}){
    switch (type) {
        case value:
        return {
            ...state
        }
        default:
        return state
    }
}

const creator = createStore(applyMiddleware(thunk))