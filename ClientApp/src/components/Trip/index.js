import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { getAllTrips } from '../../Actions/TripActions'

const Trip = ({ trips, getAllTrips }) => {
    console.log(trips);
    const history = useHistory();
    // const [trips, setTrips] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [errorText, setErrorText] = useState('')
    // const [failed, setFailed] = useState(false)

    // const setError = (errorMessage) => {
    //     setFailed(true);
    //     setErrorText(errorMessage);
    // }
    // const resetError = () => {
    //     setFailed(false);
    //     setErrorText('');
    // }
    useEffect(() => {
        (async () => {
            getAllTrips();
            // try {
            //     const response = await axios.get("api/Trips")
            //     console.log(response);
            //     setTrips(response.data);
            //     setLoading(false);
            //     resetError();

            // } catch (err) {
            //     setError("Data could not be loaded")
            //     setLoading(false)
            // }
        })()
    }, [])
    const handleTripUpdate = (id) => {
        history.push(`/update/${id}`)
    }
    const handleTripDelete = (id) => {
        history.push(`/delete/${id}`)
    }
    const renderAllTripsTable = () => {
        return (
            <table className="table able-stripped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Started</th>
                        <th>Date completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.data.map(trip => (
                            <tr key={trip.id}>
                                <td>{trip.name}</td>
                                <td>{trip.description}</td>
                                <td>{new Date(trip.dateStarted).toISOString().slice(0, 10)}</td>
                                <td>{trip.dateCompleted == null ? "-" : new Date(trip.dateCompleted).toISOString().slice(0, 10)}</td>
                                <td>
                                    <div className="form-group">
                                        <i onClick={() => handleTripUpdate(trip.id)} className="glyphicon glyphicon-edit"></i>
                                        <i onClick={() => handleTripDelete(trip.id)} className="glyphicon glyphicon-trash" ></i>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
    const content = trips.loading
        ? (<p><em>Loading...</em></p>)
        : (
            trips.hasError
                ? (<div className="text-danger">
                    <em>{trips.error}</em>
                </div>)
                : (renderAllTripsTable())
        )

    return (
        <div>
            <h1>All trips</h1>
            <p>here u can see all trips</p>
            {content}
        </div>);
}

const mapStateProps = ({ trips }) => ({
    trips
})
const mapDispatchToProps = (dispatch) => ({
    getAllTrips: () => dispatch(getAllTrips())
})
export default connect(mapStateProps, mapDispatchToProps)(Trip);