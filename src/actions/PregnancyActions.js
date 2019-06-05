import { Alert } from 'react-native';
import firebase from 'firebase';
import {
    PREGNANCY_UPDATE, PREGNANCY_CREATE,
    PREGNANCYS_FETCH_SUCCESS,
    PREGNENT_SAVE,
    PREGNANCY_FETCH_LOAD_START,
    PREGNANCY_FETCH_LOAD_END,
} from './types';
export const pregnancyUpdate = ({ prop, value }) => {
    return {
        type: PREGNANCY_UPDATE,
        payload: { prop, value }
    };
};


// let awcid = 0;
//     const database = firebase.database();
//     const { currentUser } = firebase.auth();



//         database.ref('/assignedworkerstocenters')
//             .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
//             .once('value', snapshot => {
//                 if (snapshot.val()) {
//                     const value = snapshot.val();
//                     const keys = Object.keys(value);
//                     for (let i = 0; i < keys.length; i++) {
//                         const k = keys[i];
//                         awcid = value[k].anganwadicenter_code;
//                     }

//                     //Put your existing code here database insertion part check another file for reference

//                 } else {
//                     console.log('no user data');
//                 }
//             });



export const PregnancyCreate = ({ HHNumber, PregnantName, NPregnant, LPerioddate, DeliveryDate }) => {
    let awcid = 0;
    var Pregnant = '';
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    var Delivery = 'No';
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
                    database.ref(`/users/${awcid}/Demographic/HouseholdMember/${HHNumber}/${PregnantName}`)
                        .once('value', snap1 => {
                            if (snap1) {
                                Pregnant = snap1.val().HHName;
                                database.ref(`/users/${awcid}/Demographic/Pregnancy`)
                                    .push({ HHNumber, PregnantName, Pregnant, NPregnant, LPerioddate, DeliveryDate, Delivery })
                                    .then(() => {
                                        dispatch({ type: PREGNANCY_CREATE });
                                    });
                                    Alert.alert(
                                        'Sucessfully',
                                        'Record Inserted ');
                            }
                        });


                } else {
                    console.log('no user data');
                }
            });
    };
};

export const pregnancyFetch = () => {
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
                    database.ref(`/users/${awcid}/Demographic/Pregnancy`).orderByChild('Delivery').equalTo('No')
                        .on('value', snapshot1 => {
                            dispatch({ type: PREGNANCYS_FETCH_SUCCESS, payload: snapshot1.val() });
                            dispatch({ type: PREGNANCY_FETCH_LOAD_END, payload: false });
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const PregnancySave = ({ HHNumber, PregnantName, NPregnant, LPerioddate, FirstDose, SecondDose, uid }) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    var Delivery = 'No';
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
                    if (FirstDose !== undefined) {
                        database.ref(`/users/${awcid}/Demographic/Pregnancy/${uid}`)
                            .update({ HHNumber, PregnantName, NPregnant, LPerioddate, FirstDose, Delivery })
                            .then(() => {
                                dispatch({ type: PREGNENT_SAVE });
                            });
                    }
                    if (SecondDose !== undefined) {
                        if (FirstDose === undefined)
                        {
                            Alert.alert('FirstDose is Not Given');
                        }
                        else
                        {
                        database.ref(`/users/${awcid}/Demographic/Pregnancy/${uid}`)
                            .update({ HHNumber, PregnantName, NPregnant, LPerioddate, SecondDose, Delivery })
                            .then(() => {
                                dispatch({ type: PREGNENT_SAVE });
                            });
                           
                        }
                }
                    else {
                        database.ref(`/users/${awcid}/Demographic/Pregnancy/${uid}`)
                            .update({ HHNumber, PregnantName, NPregnant, LPerioddate, Delivery })
                            .then(() => {
                                dispatch({ type: PREGNENT_SAVE });
                            });
                    }
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const PregnancyDelete = ({ uid }, navigate) => {

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
                        'Need Attention',
                        'Do you Want to Delete..',
                        [
                            {
                                text: 'Cancel',
                                onPress: () =>
                                navigate.navigate('PregnancyEdit'),
                                style: 'cancel',
                            },
                            {
                                text: 'OK',
                                onPress: () =>
                                    database.ref(`/users/${awcid}/Demographic/Pregnancy/${uid}`)
                                        .remove()
                                        .then(() => {
                                            Alert.alert('Record',
                                            'Deleted Successfull '
                                            );
                                            navigate.navigate('PregnancyTab');
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
    console.log('inside action');
    dispatch({ type: PREGNANCY_FETCH_LOAD_START, payload: true });
};
