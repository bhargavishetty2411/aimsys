import firebase from 'firebase';
import { Alert } from 'react-native';
import {
    BSTATUS_UPDATE, BSTATUS_CREATE, BSTATUS_CHECK,
    BSTATUS_FETCH, BSTATUS_REMOVE, BSFETCH_LOADING_START, BSFETCH_LOADING_END
} from './types';

export const bStatusUpdate = ({ name, value }) => ({
    type: BSTATUS_UPDATE,
    payload: { name, value }
});

export const bStatusCreate = ({ option }) => {
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
                            if (snapshot1.hasChild('buildingstatus')) {
                                Alert.alert(
                                    'Oops...!',
                                    'Data Already Exists...',
                                    [
                                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                                    ],
                                    { cancelable: true }
                                );
                            } else {
                                database.ref(`/users/${awcid}/Infrastructure/buildingstatus`)
                                    .push({ option })
                                    .then(() => {
                                        Alert.alert(
                                            'Successfull...!',
                                            'Record Inserted Successfully...',
                                            [
                                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                                            ],
                                            { cancelable: true }
                                        );
                                        dispatch({
                                            type: BSTATUS_CREATE
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

export const bStatusFetch = () => {
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
                    firebase.database().ref(`/users/${awcid}/Infrastructure/buildingstatus`)
                        .on('value', snapshot1 => {
                            dispatch({
                                type: BSTATUS_FETCH,
                                payload: snapshot1.val() || ''
                            });
                            dispatch({
                                type: BSFETCH_LOADING_END,
                                payload: false
                            });
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const bStatusDelete = (key) => {
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
                                    database.ref(`/users/${awcid}/Infrastructure/buildingstatus/${key}`)
                                        .remove()
                                        .then(() => {
                                            dispatch({
                                                type: BSTATUS_REMOVE,
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

export const bStatusSave = ({ option }, key, navigate) => {
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
                    database.ref(`/users/${awcid}/Infrastructure/buildingstatus/${key}`)
                        .set({ option })
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
                                type: BSTATUS_CREATE,
                                payload: ''
                            });
                            navigate.navigate('buildingStatus');
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

const fetchLoad = (dispatch) => {
    dispatch({ type: BSFETCH_LOADING_START, payload: true });
};
