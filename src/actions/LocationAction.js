import firebase from 'firebase';
import { Alert } from 'react-native';
import {
    LOCATION_FORM, LOCATION_CREATE, LOCATION_FETCH, LOCATION_LOADING_START, LOCATION_LOADING_END, LOCATION_REMOVE
} from './types';

export const LocationForm = ({ name, value }) => {
    return {
        type: LOCATION_FORM,
        payload: { name, value }
    };
};

export const LocationCreate = ({ latitude, longitude }) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    database.ref(`/users/${awcid}/Infrastructure/`)
                        .once('value', snapshot1 => {
                            if (snapshot1.hasChild('Location')) {
                                Alert.alert(
                                    'Oops...!',
                                    'Data Already Exists...',
                                    [
                                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                                    ],
                                    { cancelable: true }
                                );
                            } else {
                                database.ref(`/users/${awcid}/Infrastructure/Location`)
                                    .push({ latitude, longitude })
                                    .then(() => {
                                        Alert.alert(
                                            'Successfull...!',
                                            'Record Inserted Successfully...',
                                            [
                                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                                            ],
                                            { cancelable: false },
                                        );
                                        dispatch({
                                            type: LOCATION_CREATE
                                        });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};


export const LocationFetch = () => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    fetchLoad(dispatch);
                    firebase.database().ref(`/users/${awcid}/Infrastructure/Location`)
                        .on('value', snapshot1 => {
                            dispatch({
                                type: LOCATION_FETCH,
                                payload: snapshot1.val() || ''
                            });
                            dispatch({
                                type: LOCATION_LOADING_END,
                                payload: false
                            });
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const LocationDelete = (key) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    Alert.alert(
                        'Need Attention...!',
                        'Do you want delete this record?',
                        [
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            {
                                text: 'OK',
                                onPress: () =>
                                    firebase.database().ref(`/users/${awcid}/Infrastructure/Location/${key}`)
                                        .remove()
                                        .then(() => {
                                            dispatch({
                                                type: LOCATION_REMOVE,
                                                payload: ''
                                            });
                                        })
                            },
                        ],
                        { cancelable: false },
                    );
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const LocationUpdate = ({ latitude, longitude }, key, navigate) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    firebase.database().ref(`/users/${awcid}/Infrastructure/Location/${key}`)
                        .set({ latitude, longitude })
                        .then(() => {
                            Alert.alert(
                                'Successfull...!',
                                'Record Updated Successfully...',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                                ],
                                { cancelable: true }
                            );
                            dispatch({
                                type: LOCATION_CREATE,
                                payload: ''
                            });
                            navigate.navigate('AnganwadiLocation');
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

const fetchLoad = (dispatch) => {
    dispatch({ type: LOCATION_LOADING_START, payload: true });
};
