/* eslint-disable no-shadow */
import firebase from 'firebase';
import { Alert } from 'react-native';
import {
    INJECTIONUPDATE, INJECTION_CREATE, INJECTIONFETCH, INJECTION_SAVE, NOTIFICATIONFETCH, NUTRITION_FETCH_LOAD_START, INJECTION_FETCH_LOAD_END
} from './types';
import ListInjection from '../component/Maternal/ListInjection';


export const InjectionUpdate = ({ name, value }) => {
    return {
        type: INJECTIONUPDATE,
        payload: { name, value }
    };
};

// let awcid = 0;
//     const database = firebase.database();
//     const { currentUser } = firebase.auth();
//     return (dispatch) => {
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
//     };


export const InjectionCreate = ({ HNumber, CName }, update, vari) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();

    
    console.log('varidata here', update);
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
                    const db = database.ref(`/users/${awcid}/Maternal/ChildRegistration/${CName}`);
                    if (update === 'polio') {
                        const poliodate = vari;
                        db.child('poliodate').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                console.log('poloio');
                                db.update({ poliodate })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'hepatitis') {
                        const hepa = vari;
                        db.child('hepa').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                console.log('hepatitis');
                                db.update({ hepa })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'bcg') {
                        const BCG = vari;
                        db.child('BCG').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ BCG })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'dpt1') {
                        const DPT1 = vari;
                        db.child('DPT1').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ DPT1 })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'hepatitis1') {
                        const hepa1 = vari;
                        db.child('hepa1').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ hepa1 })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'opv1') {
                        const OPV1 = vari;
                        db.child('OPV1').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ OPV1 })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'dpt2') {
                        const DPT2 = vari;
                        db.child('DPT2').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ DPT2 })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'hepatitis2') {
                        const hepa2 = vari;
                        db.child('hepa2').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ hepa2 })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'opv2') {
                        const OPV2 = vari;
                        db.child('OPV2').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ OPV2 })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'dpt3') {
                        const DPT3 = vari;
                        db.child('DPT3').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ DPT3 })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'hepatitis3') {
                        const hepa3 = vari;
                        db.child('hepa3').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ hepa3 })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'opv3') {
                        const OPV3 = vari;
                        db.child('OPV3').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ OPV3 })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'dadara1') {
                        const dadara1 = vari;
                        db.child('dadara1').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ dadara1 })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'nutrition1') {
                        const nutri1 = vari;
                        db.child('nutri1').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ nutri1 })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'dptbooster') {
                        const dptbooster = vari;
                        db.child('dptbooster').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ dptbooster })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    } else if (update === 'dadara2') {
                        const dadara2 = vari;
                        db.child('dadara2').once('value', snapshot => {
                            if (snapshot.val()) {
                                console.log('data exists here');
                            } else {
                                db.update({ dadara2 })
                                    .then(() => {
                                        dispatch({
                                            type: INJECTION_CREATE
                                        });
                                        // ActionSheet.childList({ type: reset });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }
                        });
                    }
                } else {
                    console.log('no user data');
                }
            });
    };
};


export const InjectionFetch = () => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    //  const { currentUser } = firebase.auth();
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
                    firebase.database().ref(`/users/${awcid}/Maternal/ChildRegistration`)
                        // eslint-disable-next-line no-shadow
                        .on('value', snapshot => {
                            console.log('sanp', snapshot.val());
                            dispatch({ type: INJECTIONFETCH, payload: snapshot.val() });
                            dispatch({ type: INJECTION_FETCH_LOAD_END, payload: false });
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

// let awcid = 0;
//     const database = firebase.database();
//     const { currentUser } = firebase.auth();
//     return (dispatch) => {
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
//     };


export const InjectionSave = ({ HNumber, uid }, update, vari) => {

    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    if (update === 'bcg') {
        const BCG = vari;
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, BCG })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'polio') {
        const poliodate = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, poliodate })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'hepatitis') {
        const hepa = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, hepa })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'dpt1') {
        const DPT1 = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, DPT1 })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'hepatitis1') {
        const hepa1 = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, hepa1 })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'opv1') {
        const OPV1 = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, OPV1 })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'dpt2') {
        const DPT2 = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, DPT2 })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'hepatitis2') {
        const hepa2 = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, hepa2 })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'opv2') {
        const OPV2 = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, OPV2 })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'dpt3') {
        const DPT3 = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, DPT3 })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'hepatitis3') {
        const hepa3 = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, hepa3 })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'opv3') {
        const OPV3 = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, OPV3 })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'dadara1') {
        const dadara1 = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, dadara1 })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'nutrition1') {
        const nutri1 = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, nutri1 })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'dptbooster') {
        const dptbooster = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, dptbooster })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    } else if (update === 'dadara2') {
        const dadara2 = vari;
        console.log('inisde injevtion', HNumber, uid, update, vari);
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
                        database.ref(`/users/${awcid}/Maternal/ChildRegistration/${uid}`)
                            .update({ HNumber, dadara2 })
                            .then(() => {
                                dispatch({
                                    type: INJECTION_SAVE
                                });
                            });
                    } else {
                        console.log('no user data');
                    }
                });
        };
    }
};

export const InjectionDelete = ({ uid }, navigate) => {
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
                        'Confirm',
                        
                        [
                            // {
                            //     text: 'Cancel',
                            //     onPress: () =>
                            //         dispatch({
                            //             type: ListInjection
                            //         }),
                            //     style: 'cancel',
                            // },
                            {
                                text: 'OK',
                                onPress: () =>
                                    firebase.database().ref(`/users/${awcid}/Maternal/Injection/${uid}`)
                                        .remove()
                                        .then(() => {
                                            dispatch({
                                                type: ListInjection
                                            });
                                            navigate.navigate('InjectionTab');
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
    dispatch({ type: NUTRITION_FETCH_LOAD_START, payload: true });
};

export const NotificationFetch = () => {
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
                const query = database.ref(`/users/${awcid}/Maternal/ChildRegistration`);
                query.on('value', snapshot => {
                    dispatch({ type: NOTIFICATIONFETCH, payload: snapshot.val()
                     });
                });
            } else {
                console.log('no user data');
            }
        });
    };
};
