import React from 'react';

import axios from 'axios';
import { useHistory } from "react-router-dom";
import TripDetails from '../TripDetails';

const CreateTrip = () => {
    const history = useHistory();
    const handleSubmit = async (e, tripObject) => {
        e.preventDefault();
        try {
            await axios.post("api/Trips", tripObject)
            history.push('/trips')
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="trip-form" >
            <h3>Add new trip</h3>
            <TripDetails onSubmit={handleSubmit} type={"Add"} />
        </div>
    );
}

export default CreateTrip;

// export default class CreateTrip extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             description: '',
//             dateStarted: new Date(),
//             dateCompleted: new Date()
//         }
//     }
//     setName(e) {
//         this.setState({ name: e })
//     }
//     setDescription(e) {
//         this.setState({ description: e })
//     }
//     setDateStarted(e) {
//         this.setState({ dateStarted: e })
//     }
//     setDateCompleted(e) {
//         this.setState({ dateCompleted: e })
//     }
//     onSubmit(e) {
//         e.preventDefault()
//         console.log(this.state);
//         const { name,
//             description,
//             dateStarted,
//             dateCompleted } = this.state;

//         let tripObject = {
//             name,
//             description,
//             dateStarted,
//             dateCompleted
//         }
//         axios.post("api/Trips", tripObject).then((res) => {
//             this.props.history.push('/trips');
//         })
//     }
//     render() {
//         return (
//             <div className="trip-form" >
//                 <h3>Add new trip</h3>
//                 <form onSubmit={e => this.onSubmit(e)}>
//                     <div className="form-group">
//                         <label>Trip name:  </label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={this.state.name}
//                             onChange={e => this.setName(e.target.value)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Trip description: </label>
//                         <textarea
//                             type="text"
//                             className="form-control"
//                             value={this.state.description}
//                             onChange={e => this.setDescription(e.target.value)}
//                         />
//                     </div>
//                     <div className="row">
//                         <div className="col col-md-6 col-sm-6 col-xs-12">
//                             <div className="form-group">
//                                 <label>Date of start:  </label>
//                                 <input
//                                     type="date"
//                                     className="form-control"
//                                     value={this.state.dateStarted}
//                                     onChange={e => this.setDateStarted(e.target.value)}
//                                 />
//                             </div>
//                         </div>
//                         <div className="col col-md-6 col-sm-6 col-xs-12">
//                             <div className="form-group">
//                                 <label>Date of completion:  </label>
//                                 <input
//                                     type="date"
//                                     className="form-control"
//                                     value={this.state.dateCompleted}
//                                     onChange={e => this.setDateCompleted(e.target.value)}
//                                 />
//                             </div>
//                         </div>
//                     </div>


//                     <div className="form-group">
//                         <input type="submit" value="Add trip" className="btn btn-primary" />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }