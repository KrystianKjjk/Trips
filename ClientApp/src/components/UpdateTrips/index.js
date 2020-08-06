import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Axios from 'axios';
import TripDetails from '../TripDetails';

const UpdateTrip = (props) => {
    const history = useHistory();
    const { id } = useParams();
    console.log("ID:", id);
    const [tripObject, setTripObject] = useState({})
    useEffect(() => {
        (async () => {
            try {
                const response = await Axios.get(`api/trips/${id}`);

                setTripObject(response.data);
                console.log(response.data)
            } catch (err) {
                console.log(err);
            }
        })()
    }, []);

    const handleSubmit = async (e, trip) => {
        e.preventDefault();
        try {
            await Axios.put(`api/Trips/${id}`, trip)
            history.push('/trips')
        } catch (err) {
            console.log(err);
        }
    }
    const handleCancel = e => {
        e.preventDefault();
        history.push('/trips')
    }
    console.log("TR:", tripObject);
    const dateToISO = (date) => new Date(date).toISOString().slice(0, 10);
    return (
        <div className="trip-form" >
            <h3>Update trip</h3>
            {!tripObject.hasOwnProperty("name") ? null
                : <TripDetails
                    name={tripObject.name}
                    description={tripObject.description}
                    dateStarted={dateToISO(tripObject.dateStarted)}
                    dateCompleted={tripObject.dateCompleted ? dateToISO(tripObject.dateCompleted) : null}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                    type="Update" />
            }
        </div>
    );
}

export default UpdateTrip;