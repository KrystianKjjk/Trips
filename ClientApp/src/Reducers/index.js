import { combineReducers } from 'redux'

import TripReducers from './TripReducers'

const rootReducer = combineReducers({
    trips: TripReducers
})

export default rootReducer;