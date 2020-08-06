import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers'

const configureStore = () => applyMiddleware(thunk)(createStore)(rootReducer)

export default configureStore;