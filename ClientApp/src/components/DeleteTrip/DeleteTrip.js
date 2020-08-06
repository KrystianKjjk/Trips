import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const DeleteTrip = (props) => {
    const [tripData, setTripData] = useState({})
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get("api/Trips/" + id).then(trip => {
            const response = trip.data;

            setTripData(response)
        })
    }, []);

    const onCancel = (e) => {
        history.push('/trips');
    }

    const onConfirmation = (e) => {
        console.log("ID", id);
        axios.delete(`api/Trips/${id}`).then(result => {
            history.push('/trips');
        })
    }
    return (
        <div style={{ marginTop: 10 }}>
            <h2>Delete trip confirmation</h2>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title"> {tripData.name} </h4>
                    <p className="card-text"> {tripData.description} </p>
                    <button onClick={onCancel} className="btn btn-default">
                        Cancel
                    </button>
                    <button onClick={onConfirmation} className="btn btn-danger">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )

}

export default DeleteTrip;