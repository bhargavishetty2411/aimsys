import firebase from 'firebase';
import { Alert } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import {
    BPICTURE_FRORM, BPICTURE_CREATE,
    BPICTURE_FETCH, BPICTURE_REMOVE, BPFETCH_LOADING_START, BPFETCH_LOADING_END
} from './types';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;


export const bPictureForm = ({ name, value }) => {
    return {
        type: BPICTURE_FRORM,
        payload: { name, value }
    };
};

export const bPictureCreate = ({ BPicture }) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        const imageFile = RNFetchBlob.wrap(BPicture);
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
                            database.ref(`/users/${awcid}/Infrastructure/`)
                                .once('value', snapshot1 => {
                                    if (snapshot1.hasChild('buildingImage')) {
                                        Alert.alert(
                                            'Oops...!',
                                            'Data Already Exists...',
                                            [
                                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                                            ],
                                            { cancelable: true }
                                        );
                                    } else {
                                        database.ref(`/users/${awcid}/Infrastructure/buildingImage`)
                                            .push({ BPicture: url })
                                            .then(() => {
                                                dispatch({
                                                    type: BPICTURE_CREATE,
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
                                    }
                                });
                        })
                        .catch((error) => { console.log(error); });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const bPictureFetch = () => {
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
                    firebase.database().ref(`/users/${awcid}/Infrastructure/buildingImage`)
                        .on('value', snapshot1 => {
                            dispatch({
                                type: BPICTURE_FETCH,
                                payload: snapshot1.val() || ''
                            });
                            dispatch({
                                type: BPFETCH_LOADING_END,
                                payload: false
                            });
                        });
                } else {
                    console.log('no user data');
                }
            });
    };
};

export const bPictureRemove = (key) => {
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
                                    firebase.database().ref(`/users/${awcid}/Infrastructure/buildingImage/${key}`)
                                        .remove()
                                        .then(() => {
                                            dispatch({
                                                type: BPICTURE_REMOVE,
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

export const bPictureUpdate = ({ BPicture }, key, navigate) => {
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        const imageFile = RNFetchBlob.wrap(BPicture);
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
                            console.log(url);
                            firebase.database().ref(`/users/${awcid}/Infrastructure/buildingImage/${key}`)
                                .set({ BPicture: url })
                                .then(() => {
                                    dispatch({
                                        type: BPICTURE_CREATE,
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
                    navigate.navigate('buildingPicture');
                } else {
                    console.log('no user data');
                }
            });


    };
};

const fetchLoad = (dispatch) => {
    dispatch({ type: BPFETCH_LOADING_START, payload: true });
};

