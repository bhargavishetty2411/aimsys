/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

console.disableYellowBox = true;
class AuthLoading extends Component {
    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        this.props.fetchUser();
    }

    renderPage() {
        if (this.props.authentcated === true) {            
            this.props.navigation.navigate('Home');
        } else if (this.props.authentcated === false) {          
            this.props.navigation.navigate('Login');
        }
    }
    render() {
        this.renderPage();
        return (<View style={{ backgroundColor: 'rgb(32, 53, 70)', flex: 1 }} />);
    }
}
const mapStateToProps = (state) => {
    return ({ authentcated: state.auth.loggedIn });
};

export default connect(mapStateToProps, { fetchUser })(AuthLoading);
