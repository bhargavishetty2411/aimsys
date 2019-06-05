import firebase from 'firebase';
import { Alert } from 'react-native';
import { ATTENDANCEUPDATE, ATTENDANCECREATE, ATTENDANCEFETCH, ATTENDANCESAVE, ATTENDANCE_FETCH_LOAD_START, ATTENDANCE_FETCH_LOAD_END } from './types';
import ListAttendance from '../component/TimeLine/ListAttendance';

export const AttendanceUpdate = ({ name, value }) => {
    return {
        type: ATTENDANCEUPDATE,
        payload: { name, value }
    };
};



export const AttendanceCreate = ({ ChildName, gender, Dob, Regdate }) => {
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
                    console.log(firebase.auth());
                    database.ref(`/users/${awcid}/Timeline/Attendance`)
                        .push({ ChildName, gender, Dob, Regdate })
                        .then(() => {
                            dispatch({
                                type: ATTENDANCECREATE
                            });
                            // ActionSheet.childList({ type: reset });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const AttendanceFetch = () => {
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
                    firebase.database().ref(`/users/${awcid}/Timeline/Attendance`)
                        // eslint-disable-next-line no-shadow
                        .on('value', snapshot => {
                            dispatch({ type: ATTENDANCEFETCH, payload: snapshot.val() });
                            dispatch({ type: ATTENDANCE_FETCH_LOAD_END, payload: false });
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const AttendanceSave = ({ ChildName, gender, Dob, Regdate, uid }) => {
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
                    firebase.database().ref(`/users/${awcid}/Timeline/Attendance/${uid}`)
                        .set({ ChildName, gender, Dob, Regdate })
                        .then(() => {
                            dispatch({
                                type: ATTENDANCESAVE
                            });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const AttendanceDelete = ({ uid }, navigate) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    // const { currentUser } = firebase.auth();
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
                        'Need Attention',
                        'Do you Want to Delete..',
                        [
                            {
                                text: 'Cancel',
                                onPress: () =>
                                    dispatch({
                                        type: ListAttendance
                                    }),
                                style: 'cancel',
                            },
                            {
                                text: 'OK',
                                onPress: () =>
                                    firebase.database().ref(`/users/${awcid}/Timeline/Attendance/${uid}`)
                                        .remove()
                                        .then(() => {
                                            dispatch({
                                                type: ListAttendance
                                            });
                                            navigate.navigate('AttendanceTab');
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


const fetchLoad = (dispatch) => {
    dispatch({ type: ATTENDANCE_FETCH_LOAD_START, payload: true });
};
