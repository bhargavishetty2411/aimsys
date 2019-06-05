import firebase from 'firebase';
import { Alert } from 'react-native';
// eslint-disable-next-line max-len
import { NUTRITIONUPDATE, NUTRITION_CREATE, NUTRITIONFETCH, NUTRITION_SAVE, FETCH_USER, NUTRITION_FETCH_LOAD_START, NUTRITION_FETCH_LOAD_END } from './types';
import ListNutrition from '../component/Maternal/ListNutrition';

export const NutritionUpdate = ({ name, value }) => {
    return {
        type: NUTRITIONUPDATE,
        payload: { name, value }
    };
};

// eslint-disable-next-line max-len
export const NutritionCreate = ({ HNumber, CName, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli }) => {
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
                    console.log(firebase.auth());
                    database.ref(`/users/${awcid}/Maternal/Nutrition`)
                        .push({ HNumber, CName, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli })
                        .then(() => {
                            dispatch({
                                type: NUTRITION_CREATE
                            });
                            Alert.alert('Inserted Successfully');
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

export const NutritionFetch = () => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    //const { currentUser } = firebase.auth();

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
                    database.ref(`/users/${awcid}/Maternal/Nutrition`)
                        // eslint-disable-next-line no-shadow
                        .on('value', snapshot => {
                            dispatch({ type: NUTRITIONFETCH, payload: snapshot.val() });
                            dispatch({ type: NUTRITION_FETCH_LOAD_END, payload: false });
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

// eslint-disable-next-line max-len
export const NutritionSave = ({ HNumber, CName, Age, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli, uid }) => {
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
                    database.ref(`/users/${awcid}/Maternal/Nutrition/${uid}`)
                        .set({ HNumber, CName, Age, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli })
                        .then(() => {
                            dispatch({
                                type: NUTRITION_SAVE
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

export const NutritionDelete = ({ uid }, navigate) => {
    // const { currentUser } = firebase.auth();
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
                        'Confirm',
                       
                        [
                            // {
                            //     text: 'Cancel',
                            //     onPress: () =>
                            //         dispatch({
                            //             type: ListNutrition
                            //         }),
                            //     style: 'cancel',
                            // },
                            {
                                text: 'OK',
                                onPress: () =>
                                    database.ref(`/users/${awcid}/Maternal/Nutrition/${uid}`)
                                        .remove()
                                        .then(() => {
                                            dispatch({
                                                type: ListNutrition
                                            });
                                            navigate.navigate('NutritionTab');
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