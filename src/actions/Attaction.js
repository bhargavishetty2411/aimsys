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

// eslint-disable-next-line max-len
export const AttendanceCreate = ({ date, daycount }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        console.log(firebase.auth());
        firebase.database().ref(`/users/${currentUser.uid}/Attendance/Count`)
            .push({date, daycount })
            .then(() => {
                dispatch({
                    type: ATTENDANCE_CREATE
                });
                // ActionSheet.childList({ type: reset });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
