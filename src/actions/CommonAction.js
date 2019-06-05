import firebase from 'firebase';
import {
    FACILITY_CHECK, BSTATUS_CHECK, BPICTURE_CHECK, LOCATION_CHECK, AWCDetails
} from './types';

export function statusCheck() {
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
                            if (snapshot1.hasChild('facilities')) {
                                dispatch({
                                    type: FACILITY_CHECK,
                                    payload: true
                                });
                            } else {
                                dispatch({
                                    type: FACILITY_CHECK,
                                    payload: false
                                });
                            }
                            if (snapshot1.hasChild('buildingstatus')) {
                                dispatch({
                                    type: BSTATUS_CHECK,
                                    payload: true
                                });
                            } else {
                                dispatch({
                                    type: BSTATUS_CHECK,
                                    payload: false
                                });
                            }
                            if (snapshot1.hasChild('buildingImage')) {
                                dispatch({
                                    type: BPICTURE_CHECK,
                                    payload: true
                                });
                            } else {
                                dispatch({
                                    type: BPICTURE_CHECK,
                                    payload: false
                                });
                            }
                            if (snapshot1.hasChild('Location')) {
                                dispatch({
                                    type: LOCATION_CHECK,
                                    payload: true
                                });
                            } else {
                                dispatch({
                                    type: LOCATION_CHECK,
                                    payload: false
                                });
                            }
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
}

export function anganwadiDetails() {
    const database = firebase.database();
    let awcid = 0;
    let supervisorid = 0;
    let cdpoAcdpo = 0;
    let awcplace = '';
    let talukname = '';
    let villagename = '';
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
                        cdpoAcdpo = value[k].cdpoid;
                        supervisorid = value[k].supervisorid;
                        awcplace = value[k].awcplace;
                        villagename = value[k].villagename;
                        talukname = value[k].talukname;
                        database.ref(`/users/${awcid}/anganwadidetails`)
                            .update({ supervisorid, cdpoAcdpo, talukname, villagename, awcplace })
                            .then(() => {
                                dispatch({
                                    type: AWCDetails
                                });
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                } else {
                    console.log('no user data');
                }
            });
    };
}
