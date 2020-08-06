import React, { useState } from 'react';
import './style.css'
import { useHistory } from 'react-router-dom';

const TripDetails = (props) => {
    console.log("XD", props);
    const [name, setName] = useState(props.name || '');
    const [description, setDescription] = useState(props.description || '');
    const [dateStarted, setDateStarted] = useState(props.dateStarted || new Date());
    const [dateCompleted, setDateCompleted] = useState(props.dateCompleted || undefined);

    // onSubmit = { async(e) => await onSubmit(e, { name, description, dateStarted, dateCompleted })}
    return (
        <form >
            <div className="form-group">
                <label>Trip name:  </label>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Trip description: </label>
                <textarea
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div className="row">
                <div className="col col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                        <label>Date of start:  </label>
                        <input
                            type="date"
                            className="form-control"
                            value={dateStarted}
                            onChange={e => setDateStarted(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                        <label>Date of completion:  </label>
                        <input
                            type="date"
                            className="form-control"
                            value={dateCompleted}
                            onChange={e => setDateCompleted(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <button onClick={async (e) => await props.onSubmit(e, { name, description, dateStarted, dateCompleted })} className="btn btn-success" >{props.type}</button>
                {props.onCancel != undefined ? <button onClick={props.onCancel} className="btn btn-default" >Cancel</button> : null}
            </div>
        </form>
    );
}


export default TripDetails;