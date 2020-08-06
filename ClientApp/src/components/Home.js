import React, { Component } from 'react';
import LoginButton from '../Wrapper/LoginButton';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Welcome to trips manager!</h1>
        <p>Use this manager to manage ur trips by:</p>
        <ul>
          <li>Add a new trip</li>
          <li>Update  trip</li>
          <li>Delete a trip</li>
          <li>Show all trips</li>
        </ul>
        <LoginButton />
      </div>
    );
  }
}
