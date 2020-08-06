import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import './custom.css'
import Trip from './components/Trip';
import CreateTrip from './components/CreateTrip';
import UpdateTrip from './components/UpdateTrips';
import DeleteTrip from './components/DeleteTrip/DeleteTrip.js';
import Profile from './Wrapper/Profile';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/trips' component={Trip} />
        <Route path='/create' component={CreateTrip} />
        <Route path='/profile' component={Profile} />
        <Route path='/update/:id' component={UpdateTrip} />
        <Route path='/delete/:id' component={DeleteTrip} />

      </Layout>
    );
  }
}
