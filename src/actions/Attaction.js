import firebase from 'firebase';
import {
    ATTUPDATE, ATTENDANCE_CREATE,
} from './types';

export const AttendanceUpdate = ({ name, value }) => {
    return {
        type: ATTUPDATE,
        payload: { name, value }
    };
};
// copy this whole thing inside your exsisting function
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
// eslint-disable-next-line max-len
export const AttendanceCreate = ({ date, daycount }) => {
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
                    firebase.database().ref(`/users/${awcid}/Attendance/Count`)
                        .push({ date, daycount })
                        .then(() => {
                            dispatch({
                                type: ATTENDANCE_CREATE
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
