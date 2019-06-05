import firebase from "firebase";
import { Alert } from "react-native";
import {
  DAILY_USAGE_STOCK_UPDATE,
  DAILY_USAGE_STOCK_CREATE,
  DAILY_USAGE_STOCK_CREATE_SUCCESS,
  DAILY_USAGE_STOCK_FETCH_SUCCESS
} from "./types";
import DailyUsagePeopleListItem from "../component/TimeLine/DailyUsagePeopleListItem";

export const dailyUsageStockUpdate = ({ name, value }) => {
  return {
    type: DAILY_USAGE_STOCK_UPDATE,
    payload: { name, value }
  };
};
export const firebaseLooper = snapshot => {
  let data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      date: childSnapshot.key
    });
  });
  return data;
};
export const dailyUsageStockCreate = ({
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
  wheat,
  amalice_rich,
  green_gram,
  DPickdobStock,
  navigate
}) => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref("/assignedworkerstocenters")
      .orderByChild("anganwadiworkerid")
      .equalTo(currentUser.uid)
      .once("value", snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }
          if (
            (nutritious_food === " " || nutritious_food === undefined) ||
            (protien_food === " " || protien_food === undefined) ||
            (oil === " " || oil === undefined) ||
            (jaggery === " " || jaggery === undefined) ||
            (chilli === " " || chilli === undefined) ||
            (egg === " " || egg === undefined) ||
            (salt === " " || salt === undefined) ||
            (grams === " " || grams === undefined) ||
            (mustard_seeds === " " || mustard_seeds === undefined) ||
            (rice === " " || rice === undefined) ||
            (wheat === " " || wheat === undefined) ||
            (amalice_rich === " " || amalice_rich === undefined) ||
            (green_gram === " " || green_gram === undefined) || 
            (DPickdobStock === " " || DPickdobStock === undefined)
          ) {
            Alert.alert("Please enter all the details");
          } else {

            database.ref(`/users/${awcid}/Timeline/DailyUsageStock/`)
             .orderByChild('DPickdobStock')
             .limitToLast(1)
             .once('value', snapshot4 => {
               const data4 = firebaseLooper(snapshot4);
               let previous_DPickdobStock='';
               let previous_amalice_rich='';
               let previous_chilli='';
               let previous_date='';
               let previous_egg='';
               let previous_grams='';
               let previous_green_gram='';
               let previous_jaggery='';
               let previous_mustard_seeds='';
               let previous_nutritious_food='';
               let previous_oil='';
               let previous_protien_food='';
               let previous_rice='';
               let previous_salt='';
               let previous_wheat='';
              if(snapshot4.val()){
               for (let j = 0; j < data4.length; j++)
               {
                console.log("this is last record", data4[j]);
               previous_DPickdobStock=data4[j].DPickdobStock;
               previous_amalice_rich= data4[j].amalice_rich;
               previous_chilli= data4[j].chilli;
               previous_date= data4[j].date;
               previous_egg= data4[j].egg;
               previous_grams=data4[j].grams;
               previous_green_gram= data4[j].green_gram;
               previous_jaggery= data4[j].jaggery;
               previous_mustard_seeds= data4[j].mustard_seeds;
               previous_nutritious_food= data4[j].nutritious_food;
               previous_oil= data4[j].oil;
               previous_protien_food= data4[j].protien_food;
               previous_rice= data4[j].rice;
               previous_salt=data4[j].salt;
               previous_wheat=data4[j].wheat;
               }
               const newstock_nutritious_food = parseFloat(nutritious_food) + parseFloat(previous_nutritious_food);
               //const previous_DPickdobStock;
               const newstock_amalice_rich=parseFloat(amalice_rich) + parseFloat(previous_amalice_rich);
               const newstock_chilli=parseFloat(chilli) + parseFloat(previous_chilli);
              // previous_date;
              const newstock_egg=parseInt(egg) + parseInt(previous_egg);
              const newstock_grams=parseFloat(grams) + parseFloat(previous_grams);
              const newstock_green_gram=parseFloat(green_gram) + parseFloat(previous_green_gram);
              const newstock_jaggery=parseFloat(jaggery) + parseFloat(previous_jaggery);
              const newstock_mustard_seeds=parseFloat(mustard_seeds) + parseFloat(previous_mustard_seeds);
              const newstock_oil=parseFloat(oil) + parseFloat(previous_oil);
              const newstock_protien_food=parseFloat(protien_food) + parseFloat(previous_protien_food);
              const newstock_rice=parseFloat(rice) + parseFloat(previous_rice);
              const newstock_salt=parseFloat(salt) + parseFloat(previous_salt);
              const newstock_wheat=parseFloat(wheat) + parseFloat(previous_wheat);

               var obj2 = {
                nutritious_food: newstock_nutritious_food,
                protien_food: newstock_protien_food,
                oil: newstock_oil,
                jaggery: newstock_jaggery,
                chilli: newstock_chilli,
                egg: newstock_egg,
                salt: newstock_salt,
                grams: newstock_grams,
                mustard_seeds: newstock_mustard_seeds,
                rice: newstock_rice,
                wheat: newstock_wheat,
                amalice_rich: newstock_amalice_rich,
                green_gram: newstock_green_gram,
                DPickdobStock: DPickdobStock
              };
              database.ref(`/users/${awcid}/Timeline/DailyUsageStock/${DPickdobStock}`)
              .set(obj2)
               .then(() => {
                 dispatch({
                   type: DAILY_USAGE_STOCK_CREATE
                 });
                 dailyUsageStockCreateSuccess(dispatch, navigate);
               })
  
                .catch(error => {
                  console.log(error);
                  // dailyUsageCreateFail(dispatch,navigate);
                });
              } else {
                var obj2 = {
                  nutritious_food: nutritious_food,
                  protien_food: protien_food,
                  oil: oil,
                  jaggery: jaggery,
                  chilli: chilli,
                  egg: egg,
                  salt: salt,
                  grams: grams,
                  mustard_seeds: mustard_seeds,
                  rice: rice,
                  wheat: wheat,
                  amalice_rich: amalice_rich,
                  green_gram: green_gram,
                  DPickdobStock: DPickdobStock
                };
                database.ref(`/users/${awcid}/Timeline/DailyUsageStock/${DPickdobStock}`)
                .set(obj2)
                 .then(() => {
                   dispatch({
                     type: DAILY_USAGE_STOCK_CREATE
                   });
                   dailyUsageStockCreateSuccess(dispatch, navigate);
                 })
    
                  .catch(error => {
                    console.log(error);
                    // dailyUsageCreateFail(dispatch,navigate);
                  });



              }
             });    
          }
        } else {
          console.log("no user data");
        }
      });
  };
};

export const dailyUsageStockCreateSuccess = (dispatch, navigate) => {
  dispatch({
    type: DAILY_USAGE_STOCK_CREATE_SUCCESS,
    payload: ""
  });
  navigate.navigate("ResultMessage", { paramName: "dailyUsageCreateSuccess" });
};

export const dailyUsageStockFetch = () => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref("/assignedworkerstocenters")
      .orderByChild("anganwadiworkerid")
      .equalTo(currentUser.uid)
      .once("value", snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }
          database
            .ref(`/users/${awcid}/Timeline/DailyUsageStock`)
            .on("value", snapshot1 => {
              dispatch({
                type: DAILY_USAGE_STOCK_FETCH_SUCCESS,
                payload: snapshot1.val()
              });
            });
        } else {
          console.log("no user data");
        }
      });
  };
};

export const dailyUsageStockSaveChanges = ({
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
  wheat,
  amalice_rich,
  green_gram,
  DPickdobStock,
  uid,
  navigate
}) => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref("/assignedworkerstocenters")
      .orderByChild("anganwadiworkerid")
      .equalTo(currentUser.uid)
      .once("value", snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }
          database
            .ref(`/users/${awcid}/Timeline/DailyUsageStock/${uid}`)
            .set({
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
              wheat,
              amalice_rich,
              green_gram,
              DPickdobStock
            })
            .then(() => {
              dailyUsageStockCreateSuccess(dispatch, navigate);
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          console.log("no user data");
        }
      });
  };
};

export const dailyUsageStockDelete = ({ uid }, navigate) => {
  let awcid = 0;
  const database = firebase.database();
  const { currentUser } = firebase.auth();
  return dispatch => {
    database
      .ref("/assignedworkerstocenters")
      .orderByChild("anganwadiworkerid")
      .equalTo(currentUser.uid)
      .once("value", snapshot => {
        if (snapshot.val()) {
          const value = snapshot.val();
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            awcid = value[k].anganwadicenter_code;
          }
          Alert.alert(
            "Need Attention",
            "Deleted successfully",
            [
              {
                text: "Cancel",
                onPress: () =>
                  dispatch({
                    type: DailyUsagePeopleListItem
                  }),
                style: "cancel"
              },
              {
                text: "OK",
                onPress: () =>
                  database
                    .ref(`/users/${awcid}/Timeline/DailyUsageStock/${uid}`)
                    .remove()
                    .then(() => {
                      dispatch({
                        type: DailyUsagePeopleListItem
                      });
                      navigate.navigate("DailyUsageStockTab");
                    })
              }
            ],
            { cancelable: false }
          );
        } else {
          console.log("no user data");
        }
      });
  };
};
