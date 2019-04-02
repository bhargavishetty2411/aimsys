import firebase from 'firebase';
import { Alert } from 'react-native';
import { NUTRITIONUPDATE, NUTRITION_CREATE, NUTRITIONFETCH, NUTRITION_SAVE, FETCH_USER, NUTRITION_FETCH_LOAD_START, NUTRITION_FETCH_LOAD_END } from './types';
import ListNutrition from '../component/Maternal/ListNutrition';

export const NutritionUpdate = ({ name, value }) => {
    return {
        type: NUTRITIONUPDATE,
        payload: { name, value }
    };
};

export const NutritionCreate = ({ HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        console.log(firebase.auth());
        firebase.database().ref(`/users/${currentUser.uid}/Maternal/Nutrition`)
            .push({ HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli })
            .then(() => {
                dispatch({
                    type: NUTRITION_CREATE
                });
                // ActionSheet.childList({ type: reset });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const NutritionFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        fetchLoad(dispatch);
        firebase.database().ref(`/users/${currentUser.uid}/Maternal/Nutrition`)
            .on('value', snapshot => {
                dispatch({ type: NUTRITIONFETCH, payload: snapshot.val() });
                dispatch({ type: NUTRITION_FETCH_LOAD_END, payload: false });

            });
    };
};

export const NutritionSave = ({ HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Maternal/Nutrition/${uid}`)
            .set({ HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli })
            .then(() => {
                dispatch({
                    type: NUTRITION_SAVE
                });
            });
    };
};

export const NutritionDelete = ({ uid }, navigate) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        Alert.alert(
            'Need Attention',
            'Do you Want to Delete..',
            [
                {
                    text: 'Cancel', onPress: () =>
                        dispatch({
                            type: ListNutrition
                        }),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () =>
                        firebase.database().ref(`/users/${currentUser.uid}/Maternal/Nutrition/${uid}`)
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
    };
};

const fetchLoad = (dispatch) => {
    dispatch({ type: NUTRITION_FETCH_LOAD_START, payload: true });
};