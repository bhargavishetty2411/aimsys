import { Alert } from 'react-native';
import firebase from 'firebase';
import {
  DAILY_USAGE_UPDATE,
  DAILY_USAGE_CREATE_SUCCESS,
  DAILY_USAGE_FETCH_SUCCESS,
  DAILY_USAGE_SAVECHANGES_SUCCESS
} from './types';

export const dailyUsageUpdate = ({ name, value }) => ({
  type: DAILY_USAGE_UPDATE,
  payload: { name, value }
});

export const dailyUsageCreate = ({
  six_months_to_one_year,
  one_year_to_three_year,
  three_year_to_six_year,
  pw_prenatal,
  pw_postnatal,
  pw_3rdgrade,
  pw_4thgrade,
  DPickdob,
  total1,
  total2,
  totalfinal,
  nutritious_food,
  protien_food,
  oil,
  jaggery,
  chilli,
  egg,
  salt,
  grams,
  mustard_seeds,
  rice,
  amalice_rich,
  green_gram,
  navigate
}) => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();

  return dispatch => {
    database
      .ref('/assignedworkerstocenters')
      .orderByChild('anganwadiworkerid')
      .equalTo(currentUser.uid)
      .once('value', snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }
          if (
           ( six_months_to_one_year === ' ' ||
            six_months_to_one_year === undefined) ||
            (one_year_to_three_year === ' ' ||
              one_year_to_three_year === undefined) ||
            (three_year_to_six_year === ' ' ||
              three_year_to_six_year === undefined) ||
            (pw_prenatal === ' ' || pw_prenatal === undefined) ||
            (pw_postnatal === ' ' || pw_postnatal === undefined) ||
            (pw_3rdgrade === ' ' || pw_3rdgrade === undefined) ||
            (pw_4thgrade === ' ' || pw_4thgrade === undefined) ||
            (DPickdob === ' ' || DPickdob === undefined) ||
            (total1 === ' ' || total1 === undefined) ||
            (total2 === ' ' || total2 === undefined) ||
            (totalfinal === 0 || totalfinal === undefined) ||
            (nutritious_food=== 0 ||nutritious_food=== undefined) ||
            (protien_food=== 0 ||protien_food=== undefined) ||
            (oil=== 0 ||oil=== undefined) ||
            (jaggery=== 0 ||jaggery=== undefined) ||
            (chilli=== 0 ||chilli=== undefined) ||
            (egg=== 0 ||egg=== undefined) ||
            ( salt=== 0 ||salt=== undefined) ||
            (grams=== 0 ||grams=== undefined) ||
            (mustard_seeds=== 0 ||mustard_seeds=== undefined) ||
            ( rice=== 0 ||rice=== undefined) ||
            ( amalice_rich=== 0 ||amalice_rich=== undefined) ||
            ( green_gram=== 0 ||green_gram=== undefined)
          ) {
            Alert.alert('Please enter all the details');
          } else {
            database
              .ref(`/users/${awcid}/Timeline/DailyUsagePeople/${DPickdob}`)
              .set({
                six_months_to_one_year,
                one_year_to_three_year,
                three_year_to_six_year,
                pw_prenatal,
                pw_postnatal,
                pw_3rdgrade,
                pw_4thgrade,
                DPickdob,
                total1,
                total2,
                totalfinal,
                nutritious_food,
                protien_food,
                oil,
                jaggery,
                chilli,
                egg,
                salt,
                grams,
                mustard_seeds,
                rice,
                amalice_rich,
                green_gram,
              })
              .then(() => {
                dispatch({
                  type: DAILY_USAGE_CREATE_SUCCESS
                });
                dailyUsageCreateSuccess(dispatch, navigate);
              })
              .catch(error => {
                console.log(error);
              });
          }
        } else {
          console.log('no user data');
        }
      });
  };
};

export const dailyUsageCreateSuccess = (dispatch, navigate) => {
  dispatch({
    type: DAILY_USAGE_CREATE_SUCCESS,
    payload: ''
  });
  navigate.navigate('ResultMessage', { paramName: 'dailyUsageCreateSuccess' });
};

export const dailyUsageFetch = () => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref('/assignedworkerstocenters')
      .orderByChild('anganwadiworkerid')
      .equalTo(currentUser.uid)
      .once('value', snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }

          database
            .ref(`/users/${awcid}/Timeline/DailyUsagePeople`)
            .on('value', snapshot1 => {
              dispatch({
                type: DAILY_USAGE_FETCH_SUCCESS,
                payload: snapshot1.val()
              });
            });
        } else {
          console.log('no user data');
        }
      });
  };
};

export const dailyUsageSaveChangeseSuccess = (dispatch, navigate) => {
  dispatch({
    type: DAILY_USAGE_SAVECHANGES_SUCCESS,
    payload: ''
  });
  navigate.navigate('ResultMessage', {
    paramName: 'dailyUsagesavechangesSuccess'
  });
};

export const dailyUsageSaveChanges = ({
  six_months_to_one_year,
  one_year_to_three_year,
  three_year_to_six_year,
  pw_prenatal,
  pw_postnatal,
  pw_3rdgrade,
  pw_4thgrade,
  DPickdob,
  total1,
  total2,
  totalfinal,
  uid,
  navigate
}) => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref('/assignedworkerstocenters')
      .orderByChild('anganwadiworkerid')
      .equalTo(currentUser.uid)
      .once('value', snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }
          database
            .ref(`/users/${awcid}/Timeline/DailyUsagePeople/${uid}`)
            .set({
              six_months_to_one_year,
              one_year_to_three_year,
              three_year_to_six_year,
              pw_prenatal,
              pw_postnatal,
              pw_3rdgrade,
              pw_4thgrade,
              DPickdob,
              total1,
              total2,
              totalfinal
            })
            .then(() => {
              dailyUsageCreateSuccess(dispatch, navigate);
            });
        } else {
          console.log('no user data');
        }
      });
  };
};

export const dailyUsageDelete = ({ uid }, navigate) => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref('/assignedworkerstocenters')
      .orderByChild('anganwadiworkerid')
      .equalTo(currentUser.uid)
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
                    type: DAILY_USAGE_FETCH_SUCCESS
                  }),
                style: 'cancel'
              },
              {
                text: 'OK',
                onPress: () =>
                  database
                    .ref(`/users/${awcid}/Timeline/DailyUsagePeople/${uid}`)
                    .remove()
                    .then(() => {
                      dispatch({
                        type: DAILY_USAGE_FETCH_SUCCESS
                      });
                      navigate.navigate('DailyUsagePeopleTab');
                    })
              }
            ],
            { cancelable: false }
          );
        } else {
          console.log('no user data');
        }
      });
  };
};
