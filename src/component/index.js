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
      //Timeline
      apiKey:"AIzaSyAM41SBy8oD2QwG3QsD61DIIguAVwSlYik",
      authDomain:"timelinedemo-d0193.firebaseapp.com",
      databaseURL:"https://timelinedemo-d0193.firebaseio.com",
      projectId:"timelinedemo-d0193",
      storageBucket:"timelinedemo-d0193.appspot.com",
      messagingSenderId:"962657185492"
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
