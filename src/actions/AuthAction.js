import { StackActions, NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import {
    EMAIL_CHANGED, PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, FETCH_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password, navigate }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user, navigate))
            .catch((error) => {
                console.log(error);
                loginUserFail(dispatch);
            });
    };
};

export const fetchUser = () => dispatch => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: FETCH_USER,
                payload: true
            });
        } else {
            dispatch({
                type: FETCH_USER,
                payload: false
            });
        }
    });
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user, navigate) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    navigate.dispatch(resetAction);
};
