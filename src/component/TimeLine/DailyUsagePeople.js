import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Alert } from 'react-native';
import {
  Container,
  Content,
  ListItem,
  Icon,
  InputGroup,
  Button,
  CheckBox,
  Text,
  List,
  Body,
  Card,
  Form,
  Input,
  Label
} from 'native-base';
import { dailyUsageUpdate, dailyUsageCreate } from '../../actions';
import DatePicker from 'react-native-datepicker';

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
export const firebaseLooper2 = snapshot => {
  let data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      anganwadicode: childSnapshot.key
    });
  });
  return data;
};
class DailyUsagePeople extends Component {
  static navigationOptions = {
    title: 'Timeline',
    headerStyle: {
      backgroundColor: '#355870'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
  componentDidMount() {
    let awcid = 0;
    console.log("hello this is componentDidMount");
    const database = firebase.database();
    const { currentUser } = firebase.auth();
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
          console.log(awcid);

          database
          .ref('/users')
          .once('value', snapshot7 => {
            console.log("hello-------------- 1 ");
            if (snapshot7.val()) {
              const data = firebaseLooper2(snapshot7);
              console.log("snapshot7snapshot7snapshot7snapshot7 ");
             // console.log(snapshot7.val());
              for (let i = 0; i < data.length; i++) {
                console.log(data[i].anganwadicode,awcid,"herehereherehereherehereherehere");
                if ((parseInt(data[i].anganwadicode)) === (parseInt(awcid))) {
                 console.log(data[i]);
                  if (data[i].Timeline) {
                    const data2 = data[i].Timeline.DailyUsageStock;
                    console.log(data2.key);
                    console.log("hello-------------- 1 ");
                    for (const obj in data[i].Timeline.DailyUsageStock) {
                      console.log("hello-------------- 2");
                      var d = new Date(),
                      month = '' + (d.getMonth() + 1),
                      day = '' + d.getDate(),
                      year = d.getFullYear();
                      var d2 = new Date(),
                      month1 = '' + (d2.getMonth() + 1),
                      dayminus1 = '' + (d2.getDate() - 1),
                      year1 = d2.getFullYear();
                      var d3 = new Date(),
                      month3 = '' + (d3.getMonth() + 1),
                      dayminus2 = '' + (d3.getDate() - 2),
                      year3 = d3.getFullYear();

                  if (month.length < 2) month = '0' + month;
                  if (month1.length < 2) month1 = '0' + month1;
                  if (month3.length < 2) month3 = '0' + month3;
                  console.log("hello-------------- 3");
                  if (day.length < 2) day = '0' + day;     
                  if (dayminus1.length < 2) dayminus1 = '0' + dayminus1;         
                  if (dayminus2.length < 2) dayminus2 = '0' + dayminus2;  

                  const todaysdate = [year, month, day].join('-');
                  const yesterdaydate = [year1, month1, dayminus1].join('-');  
                  const daybeforeyesterdaydate = [year3, month3, dayminus2].join('-'); 
                  console.log("hello-------------- 4");
                           if (!(data[i].Timeline.DailyUsageStock[obj].DPickdobStock==yesterdaydate)){
                            console.log("hello-------------- 5 if ");
                              console.log("Do nothing",daybeforeyesterdaydate);
                              if(data[i].Timeline.DailyUsageStock[obj].DPickdobStock==daybeforeyesterdaydate)
                              {
                                console.log("hello-------------- 5 if if");
                               // console.log(data[i].Timeline.DailyUsageStock[obj]);
                                const nutritious_food=data[i].Timeline.DailyUsageStock[obj].nutritious_food;
                                const protien_food=data[i].Timeline.DailyUsageStock[obj].protien_food;
                                 const oil=data[i].Timeline.DailyUsageStock[obj].oil;
                                const jaggery=data[i].Timeline.DailyUsageStock[obj].jaggery;
                                const chilli=data[i].Timeline.DailyUsageStock[obj].chilli;
                                const egg=data[i].Timeline.DailyUsageStock[obj].egg;
                                const salt=data[i].Timeline.DailyUsageStock[obj].salt;
                                const grams=data[i].Timeline.DailyUsageStock[obj].grams;
                                const mustard_seeds=data[i].Timeline.DailyUsageStock[obj].mustard_seeds;
                                const rice=data[i].Timeline.DailyUsageStock[obj].rice;
                                const wheat=data[i].Timeline.DailyUsageStock[obj].wheat;
                                const amalice_rich=data[i].Timeline.DailyUsageStock[obj].amalice_rich;
                                const green_gram=data[i].Timeline.DailyUsageStock[obj].green_gram;
                                const DPickdobStock=yesterdaydate;
                               
                                var obj1 = {
                                  nutritious_food : nutritious_food,
                                  protien_food: protien_food,
                                  oil: oil,
                                  jaggery: jaggery,
                                  chilli: chilli,
                                  egg: egg,
                                  salt: salt,
                                  grams: grams,
                                  mustard_seeds: mustard_seeds,
                                  rice: rice,
                                  wheat:wheat,
                                  amalice_rich: amalice_rich,
                                  green_gram: green_gram,
                                  DPickdobStock: yesterdaydate
                                };
                                database.ref(`/users/${awcid}/Timeline/DailyUsageStock/${DPickdobStock}`)
                                .set(obj1);
                                console.log("hello-------------- 6 if if end");
                               // console.log(obj);
                                //can use push but it creates new tokens
                                //ref.set(obj);
                              
                               

                              }
                           } else {

                            console.log("Do nothing");

                           }
                
                

                    };
                          
                         
                  }
                }
              }

            }
          });


        }
      });
    }
   onButtonPress() {
     
       
   console.log( this.props);
    const {
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
          wheat,
          amalice_rich,
          green_gram,
    } = this.props;
    let awcid = 0;
    const database = firebase.database();
    const { currentUser } = firebase.auth();
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
        console.log(this.props);
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
          (nutritious_food=== 0 || nutritious_food=== undefined) ||
          (protien_food=== 0 ||protien_food=== undefined) ||
          (oil=== 0 ||oil=== undefined) ||
          (jaggery=== 0 ||jaggery=== undefined) ||
          (chilli=== 0 ||chilli=== undefined) ||
          (egg=== 0 ||egg=== undefined) ||
          ( salt=== 0 ||salt=== undefined) ||
          (grams=== 0 ||grams=== undefined) ||
          (mustard_seeds=== 0 ||mustard_seeds=== undefined) ||
          ( rice=== 0 ||rice=== undefined) ||
          (wheat=== 0||wheat=== undefined)||
          ( amalice_rich=== 0 ||amalice_rich=== undefined) ||
          ( green_gram=== 0 ||green_gram=== undefined)
        ) {
          Alert.alert('Please enter all the details');
        } else {


          var d = new Date(),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
          var d2 = new Date(),
          month1 = '' + (d2.getMonth() + 1),
          dayminus1 = '' + (d2.getDate() - 1),
          year1 = d2.getFullYear();
          var d3 = new Date(),
          month3 = '' + (d3.getMonth() + 1),
          dayminus2 = '' + (d3.getDate() - 2),
          year3 = d3.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (month1.length < 2) month1 = '0' + month1;
      if (month3.length < 2) month3 = '0' + month3;

      if (day.length < 2) day = '0' + day;     
      if (dayminus1.length < 2) dayminus1 = '0' + dayminus1;         
      if (dayminus2.length < 2) dayminus2 = '0' + dayminus2;  

      const todaysdate = [year, month, day].join('-');
      const yesterdaydate = [year1, month1, dayminus1].join('-');  
      const daybeforeyesterdaydate = [year3, month3, dayminus2].join('-'); 

//console.log(todaysdate, yesterdaydate, daybeforeyesterdaydate);

           database
          .ref(`/users/${awcid}/Timeline/DailyUsageStock`)
          .once('value', snapshot4 => {
                 console.log(snapshot4.val());
                 if (snapshot4.val())
                 {
                   const data3=firebaseLooper(snapshot4);
                  for (let i = 0; i < data3.length; i++) {
//console.log(todaysdate, yesterdaydate, daybeforeyesterdaydate);
                    if(data3[i].date==yesterdaydate)
                    {
                     // console.log(data3[i]);
                      const nutritious_food_fromstock= data3[i].nutritious_food;
                      const protien_food_fromstock= data3[i].protien_food;
                      const oil_fromstock= data3[i].oil;
                      const jaggery_fromstock= data3[i].jaggery;
                      const chilli_fromstock= data3[i].chilli;
                      const egg_fromstock= data3[i].egg;
                      const salt_fromstock= data3[i].salt;
                      const grams_fromstock= data3[i].grams;
                      const mustard_seeds_fromstock= data3[i].mustard_seeds;
                      const rice_fromstock= data3[i].rice;
                      const wheat_fromstock= data3[i].wheat;
                      const amalice_rich_fromstock= data3[i].amalice_rich;
                      const green_gram_fromstock= data3[i].green_gram;

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
          wheat,
          amalice_rich,
          green_gram
            })

           const  DPickdobStock=DPickdob;
            const newstock_nutritious_food=(parseFloat(nutritious_food_fromstock) - parseFloat(nutritious_food));
            const newstock_protien_food=(parseFloat(protien_food_fromstock) - parseFloat(protien_food));

            const newstock_oil=(parseFloat(oil_fromstock) - parseFloat(oil));
            const newstock_jaggery=(parseFloat(jaggery_fromstock) - parseFloat(jaggery));

            const newstock_chilli=(parseFloat(chilli_fromstock) - parseFloat(chilli));
            const newstock_egg=(parseFloat(egg_fromstock) - parseFloat(egg));

            const newstock_salt=(parseFloat(salt_fromstock) - parseFloat(salt));
            const newstock_grams=(parseFloat(grams_fromstock) - parseFloat(grams));

            const newstock_mustard_seeds=(parseFloat(mustard_seeds_fromstock) - parseFloat(mustard_seeds));
            const newstock_rice=(parseFloat(rice_fromstock) - parseFloat(rice));

            const newstock_wheat=(parseFloat(wheat_fromstock) - parseFloat(wheat));
            const newstock_amalice_rich=(parseFloat(amalice_rich_fromstock) - parseFloat(amalice_rich));

            const newstock_green_gram=(parseFloat(green_gram_fromstock) - parseFloat(green_gram));
          
   
            var obj = {
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
            .set(obj)
            .then(() => {
              console.log('DAILY USAGE CREATE SUCCESS');
              // dispatch({
              //   type: DAILY_USAGE_CREATE_SUCCESS
              // });
              // dailyUsageCreateSuccess(dispatch, navigate);
            })
            .catch(error => {
              console.log(error);
            });
                    }
                    



                 }
                }
            });

       
        }
      } else {
        console.log('no user data');
      }
    });
    // const {
    //   six_months_to_one_year,
    //   one_year_to_three_year,
    //   three_year_to_six_year,
    //   pw_prenatal,
    //   pw_postnatal,
    //   pw_3rdgrade,
    //   pw_4thgrade,
    //   DPickdob,
    //   total1,
    //   total2,
    //   totalfinal,
    //   nutritious_food,
    //   protien_food,
    //   oil,
    //   jaggery,
    //   chilli,
    //   egg,
    //   salt,
    //   grams,
    //   mustard_seeds,
    //   rice,
    //   amalice_rich,
    //   green_gram
    // } = this.props;
    // // console.log(this.props.navigation);
    // console.log('inside onButtonPress');
    // // const navigate = this.props.navigation;
    // const navigate = this.props.navigation;

    // this.props.dailyUsageCreate({
    //   six_months_to_one_year,
    //   one_year_to_three_year,
    //   three_year_to_six_year,
    //   pw_prenatal,
    //   pw_postnatal,
    //   pw_3rdgrade,
    //   pw_4thgrade,
    //   DPickdob,
    //   total1,
    //   total2,
    //   totalfinal,
    //   nutritious_food,
    //   protien_food,
    //   oil,
    //   jaggery,
    //   chilli,
    //   egg,
    //   salt,
    //   grams,
    //   mustard_seeds,
    //   rice,
    //   amalice_rich,
    //   green_gram,
    //   navigate
    // });
  }

  constructor(props) {
    super(props);
    this.state = {
      f1: '',
      f2: '',
      f3: '',
      f4: '',
      f5: '',
      f6: '',
      f7: '',
      result1: '',
      result2: '',
      result3: ''
    };
    this.state = { chosenDate: new Date() };
    // this.onRowPress = this.onRowPress.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  onRowPress() {
    console.log('inside rowpress');
    // console.log(this.props.navigation);
    //this.props.navigation;
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    //Dailyusage after insertion
    // console.log('Darshan-------------------------->');
    // console.log(this.props.child);
    // console.log('Darshan-------------------------->');

    var f1 = this.state.f1;
    var f2 = this.state.f2;
    var f3 = this.state.f3;
    var f4 = this.state.f4;
    var f5 = this.state.f5;
    var f6 = this.state.f6;
    var f7 = this.state.f7;
    //var total1 = this.state.total1;

    //  var total2 = this.state.total2;

    //  var totalfinal = this.state.totalfinal;

    const result1 = f1 && f2 && f3 ? f3 + f2 + f1 : null;
    const result2 = f4 && f5 && f6 && f7 ? f7 + f6 + f5 + f4 : null;
    const result3 = result1 && result2 ? result1 + result2 : null;

    console.log(this.props.one_year_to_three_year);
    this.props.six_months_to_one_year != '' &&
    this.props.one_year_to_three_year != '' &&
    this.props.three_year_to_six_year != ''
      ? this.props.dailyUsageUpdate({
          name: 'total1',
          value:
            parseInt(this.props.six_months_to_one_year, 10) +
            parseInt(this.props.one_year_to_three_year, 10) +
            parseInt(this.props.three_year_to_six_year, 10)
        })
      : null;

    this.props.pw_prenatal != '' &&
    this.props.pw_postnatal != '' &&
    this.props.pw_3rdgrade != '' &&
    this.props.pw_4thgrade != ''
      ? this.props.dailyUsageUpdate({
          name: 'total2',
          value:
          parseInt(this.props.pw_prenatal, 10) +
          parseInt(this.props.pw_postnatal, 10) +
          parseInt(this.props.pw_3rdgrade, 10) +
          parseInt(this.props.pw_4thgrade, 10)
        })
      : null;

    this.props.total1 != '' && this.props.total2 != ''
      ? this.props.dailyUsageUpdate({
          name: 'totalfinal',
          value: parseInt(this.props.total1, 10) + parseInt(this.props.total2, 10)
        })
      : null;

    return (
      <Container style={styles.back}>
        <Content padder>
          <Text>{'\n'}</Text>
          <Label>
            Fill the form for number of people who used the resources
          </Label>
          <Text>{'\n'}</Text>
          <Form>
            {/********************** Children****************************/}
            <Card style={styles.cardtop}>
              <Label style={styles.cardtitle}>Enter Number of Children</Label>
</Card>
<Card>
              {/**********************Food Quantity 1****************************/}
              <ListItem>
                <InputGroup>
                  <Label>Food Quantity 1 </Label>
                  <Input
                    // keyboardType='numeric'
                    //onChangeText= {(text) => this.setState({f1:parseFloat(text)})}
                    style={styles.input}
                    placeholder='6 Months to 1 Year'
                    value={parseInt(this.props.six_months_to_one_year,10)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'six_months_to_one_year',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Food Quantity 1****************************/}
              <ListItem>
                <InputGroup>
                  <Label>Food Quantity 1 </Label>
                  <Input
                    //   keyboardType='numeric'
                    // onChangeText={(text) => this.setState({ f2: parseFloat(text) })}
                    style={styles.input}
                    placeholder='1 Year to 3 Year'
                    value={parseInt(this.props.one_year_to_three_year,10)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'one_year_to_three_year',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Food Quantity 1****************************/}
              <ListItem>
                <InputGroup>
                  <Label>Food Quantity 1 </Label>
                  <Input
                    //  keyboardType='numeric'
                    // onChangeText={(text) => this.setState({ f3: parseFloat(text) })}
                    style={styles.input}
                    placeholder='3 Year to 6 Year'
                    value={parseInt(this.props.three_year_to_six_year,10)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'three_year_to_six_year',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Total****************************/}
              {this.props.six_months_to_one_year != '' &&
              this.props.one_year_to_three_year != '' &&
              this.props.three_year_to_six_year != '' ? (
                <ListItem>
                  <InputGroup>
                    <Label>
                      Total number of children<Text>{'\t\t\t\t\t\t\t\t\t\t\t\t'}</Text>{' '}
                    </Label>
                    <Input
                      style={styles.input}
                      placeholderTextColor='#FFFFFF'
                      // onChangeText={(value) => parseFloat(this.props.total1)}
                      editable={false}
                      selectTextOnFocus={false}
                    >
                      {this.props.total1}
                    </Input>
                    {/* <Label ><Text style={styles.input}>{ result }</Text></Label> */}
                  </InputGroup>
                </ListItem>
              ) : null}
            </Card>

            {/**********************pregnant woman****************************/}
            <Card style={styles.cardtop}>
              <Label style={styles.cardtitle}>Enter Number of Pregnant Women</Label>
              {/**********************Food Quantity 2****************************/}
</Card>
<Card>
              <ListItem>
                <InputGroup>
                  <Label>Food Quantity 2 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.pw_prenatal,10)}
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'pw_prenatal',
                        value
                      })
                    }
                    style={styles.input}
                    placeholder='Pregnant Woman (Prenatal)'
                  />
                </InputGroup>
              </ListItem>
              {/* pw_prenatal,pw_postnatal,pw_3rdgrade,pw_4thgrade  */}
              {/**********************Food Quantity 2****************************/}
              <ListItem>
                <InputGroup>
                  <Label>Food Quantity 2 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.pw_postnatal,10)}
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'pw_postnatal',
                        value
                      })
                    }
                    style={styles.input}
                    placeholder='Pregnant Woman (Postnatal)'
                  />
                </InputGroup>
              </ListItem>

              {/**********************Food Quantity 2****************************/}
              <ListItem>
                <InputGroup>
                  <Label>Food Quantity 2 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.pw_3rdgrade,10)}
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'pw_3rdgrade',
                        value
                      })
                    }
                    style={styles.input}
                    placeholder='3rd Grade'
                  />
                </InputGroup>
              </ListItem>

              {/**********************Food Quantity 2****************************/}
              <ListItem>
                <InputGroup>
                  <Label >Food Quantity 2 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor='#FFFFFF'
                    value={parseFloat(this.props.pw_4thgrade)}
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'pw_4thgrade',
                        value
                      })
                    }
                    style={styles.input}
                    placeholder='4th Grade'
                  />
                </InputGroup>
              </ListItem>
              {/**********************Total 2****************************/}

              {this.props.six_months_to_one_year != '' &&
              this.props.one_year_to_three_year != '' &&
              this.props.three_year_to_six_year != '' ? (
                <ListItem>
                  <InputGroup>
                    <Label>
                      Total number of<Text>{'\n'}</Text>{' '} Pregnant Women<Text>{'\t\t\t\t\t\t\t\t\t\t\t\t'}</Text>{' '}
                    </Label>
                    <Input
                      style={styles.input}
                      placeholderTextColor='#FFFFFF'
                      // onChangeText={(value) => parseFloat(this.props.total1)}
                      editable={false}
                      selectTextOnFocus={false}
                    >
                      {this.props.total2}
                    </Input>
                    {/* <Label ><Text style={styles.input}>{ result }</Text></Label> */}
                  </InputGroup>
                </ListItem>
              ) : null}
            </Card>
            {/* 1.not displaying in textbox 2.conversion error  */}
            <Card>
              {/**********************Total****************************/}
              {this.props.total1 != '' && this.props.total2 != '' ? (
                <ListItem>
                  <InputGroup>
                    <Label>
                      Total number of<Text>{'\n'}</Text> beneficiaries<Text>{'\t\t\t\t\t\t\t\t\t\t\t\t'}</Text>{' '}
                    </Label>
                    <Input
                      style={styles.input}
                      placeholderTextColor='#FFFFFF'
                      // onChangeText={(value) => parseFloat(this.props.total1)}
                      editable={false}
                      selectTextOnFocus={false}
                    >
                      {this.props.totalfinal}
                    </Input>
                    {/* <Label ><Text style={styles.input}>{ result }</Text></Label> */}
                  </InputGroup>
                </ListItem>
              ) : null}
            </Card>

            {/* Card one */}
            <Card style={styles.cardtop}>
              <Label style={styles.cardtitle}>Add Daily Stock Details</Label>
            </Card>
            {/* Card Three */}
            <Card>
              {/**********************Nutritious****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Nutritious food{'\n'}
                    <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseFloat(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'nutritious_food',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Nutritious Food****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Protien Food {'\n'}{' '}
                    <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseFloat(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'protien_food',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Oil****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Oil {'\n'}{' '}
                    <Text style={styles.cardtop}> (Enter in litre&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseFloat(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({ name: 'oil', value })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Jaggery****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Jaggery {'\n'}{' '}
                    <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseFloat(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'jaggery',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Chilli****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Chilli {'\n'}
                    <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseFloat(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'chilli',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Egg****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Egg {'\n'}{' '}
                    <Text style={styles.cardtop}> (Enter in unit&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseFloat(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({ name: 'egg', value })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Salt****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Salt {'\n'}{' '}
                    <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseFloat(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({ name: 'salt', value })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Grams****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Grams {'\n'}{' '}
                    <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseFloat(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({ name: 'grams', value })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Mustard Seeds****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Mustard Seeds {'\n'}{' '}
                    <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholderTextColor='#FFFFFF'
                    placeholder='Enter here'
                    value={parseFloat(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'mustard_seeds',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Rice****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Rice {'\n'}{' '}
                    <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseFloat(this.props.rice)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'rice',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
              {/**********************wheat****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    wheat {'\n'}{' '}
                    <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseFloat(this.props.wheat)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'wheat',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
              {/**********************Amalice Rich****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element1}>
                    Amalice Rich(Milk Powder) {'\n'}
                    <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseFloat(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'amalice_rich',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Green gram****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Green gram {'\n'}{' '}
                    <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseFloat(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageUpdate({
                        name: 'green_gram',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
              <Text>{'\n'}</Text>
            </Card>
            <Card>
              <Text>{'\n'}</Text>
              <Label style={styles.dateblockalign}>
                Select the date for the above data
              </Label>
              <ListItem style={styles.dateblockalign}>
                {/* <Icon name='md-calendar' color='#4F8EF7' /> */}
                <DatePicker
                  mode='date'
                  placeholder='select date'
                  format='YYYY-MM-DD'
                  onDateChange={value =>
                    this.props.dailyUsageUpdate({ name: 'DPickdob', value })
                  }
                  date={this.props.DPickdob}
                  animationType={'fade'}
                  placeHolderText='Click here to select date'
                  textStyle={{ color: 'green' }}
                  placeHolderTextStyle={{ color: '#275DAD' }}
                />
              </ListItem>
              <Text>{'\n'}</Text>
            </Card>
         

            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
            <Button block success onPress={this.onButtonPress.bind(this)}>
              <Text>PROCEED</Text>
            </Button>
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#275DAD',
    opacity: 1,
    borderWidth: 1,
    color: '#FFFFFF',
    borderColor: 'white',
    textAlign: 'center',
    margin: 10
  },
  back: {
    borderWidth: 1,
    borderColor: '#275DAD'
    //backgroundColor:'#203546',
  },

  cardtitle: {
    textAlign: 'center',
    borderWidth: 1,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
    //backgroundColor:'#203546',
  },
  dateblockalign: {
    textAlign: 'center',
    justifyContent: 'center'
  },
  cardtop: {
    color: '#000000',
    backgroundColor: '#FFFF00'
  },
  block: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  block_row: {
    flexDirection: 'row'
  },
  block_row_left_element: {
    textAlign: 'center',
    justifyContent: 'center',
    flex: 0.5,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    height: 50
  },
  block_row_left_element1: {
    textAlign: 'center',
    justifyContent: 'center',
    flex: 0.5,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    height: 70
  },
  block_row_right_element: {
    textAlign: 'center',
    flex: 0.5,
    height: 50,
    color: '#FFFFFF',
    backgroundColor: '#275DAD'
  }
});

const mapStateToProps = state => {
  console.log(state);
  const {
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
    wheat,
    amalice_rich,
    green_gram,
   // DPickdobStock
  } = state.DailyUsagePeopleKey;
  return {
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
    wheat,
    amalice_rich,
    green_gram,
  //  DPickdobStock
  };
};
export default connect(
  mapStateToProps,
  { dailyUsageUpdate, dailyUsageCreate }
)(DailyUsagePeople);
