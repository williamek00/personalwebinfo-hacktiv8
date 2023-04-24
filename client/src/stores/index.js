import { applyMiddleware , legacy_createStore as createStore } from 'redux'

const SUCCESS_FETCH = 'SUCCESS_FETCH'

const initialState = {
    data : 
    [
        {
            id : 1,
            name: "William Enos Komansilan",
            age : 21  ,
            liveIn : "Jakarta Utara"
        }   
    ]
}

function rootReducer(state=initialState,{type , payload}){
    switch (type) {
        case SUCCESS_FETCH:
        return {
            ...state,
            data : payload
        }
        default:
        return state
    }
}

const store = createStore(rootReducer)

export default store