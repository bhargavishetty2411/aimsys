/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Navigator from './Navigator';
import { fetchUser } from '../actions';

class MainApp extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAPb6cbba3ui5juo7XyRZk742FS9jdT56s",
      authDomain: "aimsys-67e99.firebaseapp.com",
      databaseURL: "https://aimsys-67e99.firebaseio.com",
      projectId: "aimsys-67e99",
      storageBucket: "aimsys-67e99.appspot.com",
      messagingSenderId: "524773124768"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.props.fetchUser();
  }

  render() {
    return (
      <Navigator />
    );
  }
}
export default connect(null, { fetchUser })(MainApp);
