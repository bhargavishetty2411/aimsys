/* eslint-disable no-shadow */
import firebase from 'firebase';
import { Alert } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import {
    IMAGECREATE, IMAGEUPDATE, IMAGE_FETCH_LOAD_END, IMAGEREMOVE, IMAGE_FETCH_LOAD_START, IMAGEFETCH
} from './types';
import ListInjection from '../component/Maternal/ListInjection';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

export const imageUpdate = ({ name, value }) => {
    return {
        type: IMAGEUPDATE,
        payload: { name, value }
    };
};


export const imageCreate = ({ UPicture, comment, imagetype }) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    const today = new Date();
    var date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    return (dispatch) => {
        const imageFile = RNFetchBlob.wrap(UPicture);
        let uploadBlob = null;
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
                    const imageRef = firebase.storage().ref(`${awcid}`);
                    Blob.build(imageFile, { type: 'image/jpg' })
                        .then((imageBlob) => {
                            uploadBlob = imageBlob;
                            return imageRef.put(imageBlob, { contentType: 'image/jpg' });
                        })
                        .then(() => {
                            uploadBlob.close();
                            return imageRef.getDownloadURL();
                        })
                        .then((url) => {
                            database.ref(`/users/${awcid}/Timeline/image`)
                                .push({ UPicture: url, date, comment, imagetype })
                                .then(() => {
                                    dispatch({
                                        type: IMAGECREATE,
                                        payload: ''
                                    });
                                    Alert.alert(
                                        'Successfull....!',
                                        'Image Uploaded Successfully..',
                                        [
                                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                                        ],
                                        { cancelable: false },
                                    );
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        })
                        .catch((error) => { console.log(error); });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const imageDelete = ({ uid }, navigate) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    console.log('check uid and navigate', uid, navigate);

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
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            {
                                text: 'OK',
                                onPress: () =>
                                    firebase.database().ref(`/users/${awcid}/Timeline/image/${uid}`)
                                        .remove()
                                        .then(() => {
                                            dispatch({
                                                type: IMAGEREMOVE
                                            });
                                            navigate.navigate('DailyUsageRequestTab1');
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

export const imageFetch = () => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                fetchLoad(dispatch);
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    const query = database.ref(`/users/${awcid}/Timeline/image`);
                    query.on('value', snapshot => {
                        dispatch({
                            type: IMAGEFETCH, payload: snapshot.val()
                        });
                        dispatch({ type: IMAGE_FETCH_LOAD_END, payload: false });
                    });
                } else {
                    console.log('no user data');
                }
            });
    };
};

const fetchLoad = (dispatch) => {
    dispatch({ type: IMAGE_FETCH_LOAD_START, payload: true });
};