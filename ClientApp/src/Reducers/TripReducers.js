import {
    GET_ALL_TRIPS_REQUEST,
    GET_ALL_TRIPS_SUCCESS,
    GET_ALL_TRIPS_ERROR
} from '../Actions/TripActions'

const initialState = {
    loading: false,
    error: null,
    hasError: false,
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TRIPS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_TRIPS_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false,
                data: action.payload
            }
        case GET_ALL_TRIPS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                hasError: true
            }

        default:
            return state;
    }
}