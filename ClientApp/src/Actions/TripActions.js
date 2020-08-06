import Axios from "axios"


export const GET_ALL_TRIPS_REQUEST = 'GET_ALL_TRIPS_REQUEST'
export const GET_ALL_TRIPS_SUCCESS = 'GET_ALL_TRIPS_SUCCESS'
export const GET_ALL_TRIPS_ERROR = 'GET_ALL_TRIPS_ERROR'

const getTripsSuccess = payload => ({
    type: GET_ALL_TRIPS_SUCCESS,
    payload
})
const getTripsError = payload => ({
    type: GET_ALL_TRIPS_ERROR,
    payload
})

export const getAllTrips = () => async dispatch => {
    dispatch({ type: GET_ALL_TRIPS_REQUEST })
    try {
        const res = await Axios.get('/api/Trips')
        const response = res.data
        dispatch(getTripsSuccess(response))
    }
    catch (err) {
        dispatch(getTripsError('Something went wrong'))
        return new Promise({})
    }
}