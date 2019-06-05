import firebase from 'firebase';
import { Alert } from 'react-native';
import {
    FACILTY_FORM, FACILITY_FETCH, FACILITY_CREATE,
    FACILITY_REMOVE, FACILITY_LOADING_START, FACILITY_LOADING_END
} from './types';

export const facilityForm = ({ name, value }) => {
    return {
        type: FACILTY_FORM,
        payload: { name, value }
    };
};

export const facilityCreate = ({ Water, well, Panchayath, Borewell, Btype, Power, Medicine, Mother, Infant, Play, Toilet }) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        if (well === undefined) {
            // eslint-disable-next-line no-param-reassign
            well = false;
        } 
         if (Panchayath === undefined) {
            // eslint-disable-next-line no-param-reassign
            Panchayath = false;
        } 
        if (Borewell === undefined) {
            // eslint-disable-next-line no-param-reassign
            Borewell = false;
        }
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
                            if (snapshot1.hasChild('facilities')) {
                                Alert.alert(
                                    'Oops...!',
                                    'Data Already Exists...',
                                    [
                                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                                    ],
                                    { cancelable: true }
                                );
                            } else {
                                database.ref(`/users/${awcid}/Infrastructure/facilities`)
                                    .push({ Water, well, Panchayath, Borewell, Btype, Power, Medicine, Mother, Infant, Play, Toilet })
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
                                            type: FACILITY_CREATE
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


export const facilityFetch = () => {
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
                    firebase.database().ref(`/users/${awcid}/Infrastructure/facilities`)
                        .on('value', snapshot1 => {
                            dispatch({
                                type: FACILITY_FETCH,
                                payload: snapshot1.val() || ''
                            });
                            dispatch({
                                type: FACILITY_LOADING_END,
                                payload: false
                            });
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const facilityDelete = (key) => {
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
                                    firebase.database().ref(`/users/${awcid}/Infrastructure/facilities/${key}`)
                                        .remove()
                                        .then(() => {
                                            dispatch({
                                                type: FACILITY_REMOVE,
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

export const facilityUpdate = ({ Water, well, Panchayath, Borewell, Btype, Power, Medicine, Mother, Infant, Play, Toilet }, key, navigate) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    if (well === undefined) {
        // eslint-disable-next-line no-param-reassign
        well = false;
    } 
     if (Panchayath === undefined) {
        // eslint-disable-next-line no-param-reassign
        Panchayath = false;
    } 
    if (Borewell === undefined) {
        // eslint-disable-next-line no-param-reassign
        Borewell = false;
    }
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
                    database.ref(`/users/${awcid}/Infrastructure/facilities/${key}`)
                        .set({ Water, well, Panchayath, Borewell, Btype, Power, Medicine, Mother, Infant, Play, Toilet })
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
                                type: FACILITY_CREATE,
                                payload: ''
                            });
                            navigate.navigate('Facility');
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

const fetchLoad = (dispatch) => {
    dispatch({ type: FACILITY_LOADING_START, payload: true });
};
