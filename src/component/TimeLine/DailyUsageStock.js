import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Container,
  Content,
  ListItem,
  InputGroup,
  Button,
  CheckBox,
  Text,
  List,
  Body,
  Icon,
  Card,
  Form,
  Input,
  Label
} from 'native-base';
import {
  dailyUsageStockUpdate,
  dailyUsageStockCreate
} from '../../actions/DailyUsageStockAction';
import DatePicker from 'react-native-datepicker';

export const firebaseLooper = snapshot => {
  let data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      anganwadicode: childSnapshot.key
    });
  });
  return data;
};

export const firebaseLooper1 = snapshot => {
  let data = [];

  
  snapshot.forEach(childSnapshot => {
    console.log(childSnapshot,"childSnapshot")
  });
  // snapshot.forEach(childSnapshot => {
  //   data.push({
  //     ...childSnapshot,
  //     //stockdate: childSnapshot.key
  //   });
  //});
  return data;
};

class DailyUsageStock extends Component {
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
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

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
          .once('value', snapshot2 => {
            if (snapshot2.val()) {
              const data = firebaseLooper(snapshot2);

              for (let i = 0; i < data.length; i++) {
                if ((parseInt(data[i].anganwadicode)) === (parseInt(awcid))) {
                  if (data[i].Timeline) {
                    const data2 = data[i].Timeline.DailyUsageStock;
                    console.log(data2.key);
                    for (const obj in data[i].Timeline.DailyUsageStock) {
                      
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

                           if (!(data[i].Timeline.DailyUsageStock[obj].DPickdobStock==yesterdaydate)){

                              console.log("Do nothing",daybeforeyesterdaydate);
                              if(data[i].Timeline.DailyUsageStock[obj].DPickdobStock==daybeforeyesterdaydate)
                              {
                                console.log(data[i].Timeline.DailyUsageStock[obj]);
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
    const {
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
    } = this.props;
    // console.log(this.props.navigation);
    console.log('inside onButtonPress');
    // const navigate = this.props.navigation;
    const navigate = this.props.navigation;

    this.props.dailyUsageStockCreate({
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
    });
  }

  render() {
    return (
      <Container style={styles.back}>
        <Content padder>
          <Text>{'\n'}</Text>
          <Label>Fill the food item quantity when stock is being received</Label>
          <Text>{'\n'}</Text>
          <Form>
            {/* Card one */}
            <Card style={styles.cardtop}>
              <Label style={styles.cardtitle}>Add Stock Details</Label>
             
            </Card>
            <Text>{'\n'}</Text>
            {/* Card Three */}
            <Card>
              {/**********************Nutritious****************************/}
              <Text>{'\n'}</Text>
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
    Nutritious food{'\n'}<Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
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
                    Protien Food {'\n'} <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
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
                  <Label style={styles.block_row_left_element}>Oil {'\n'} <Text style={styles.cardtop}> (Enter in litre&quot;s)</Text></Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({ name: 'oil', value })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Jaggery****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>Jaggery {'\n'} <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text></Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
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
                  <Label style={styles.block_row_left_element}>Chilli {'\n'}<Text style={styles.cardtop}> (Enter in kg&quot;s)</Text></Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
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
                  <Label style={styles.block_row_left_element}>Egg {'\n'} <Text style={styles.cardtop}> (Enter in unit&quot;s)</Text></Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({ name: 'egg', value })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Salt****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>Salt {'\n'} <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text></Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({ name: 'salt', value })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Grams****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>Grams {'\n'} <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text></Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({ name: 'grams', value })
                    }
                  />
                </InputGroup>
              </ListItem>

              {/**********************Mustard Seeds****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Mustard Seeds {'\n'} <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholderTextColor='#FFFFFF'
                    placeholder='Enter here'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
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
                  <Label style={styles.block_row_left_element}>Rice {'\n'} <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text></Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseInt(this.props.rice)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
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
                  <Label style={styles.block_row_left_element}>wheat {'\n'} <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text></Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseInt(this.props.wheat)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
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
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
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
                    Green gram {'\n'} <Text style={styles.cardtop}> (Enter in kg&quot;s)</Text>
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter here'
                    value={parseInt(this.props.food_remaining)}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'green_gram',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
              <Text>{'\n'}</Text>
            </Card>

            {/* Card Four */}
            <Card>
              <Text>{'\n'}</Text>
              <Label style={styles.dateblockalign}>
                Select the date for the above data
              </Label>
              <ListItem style={styles.dateblockalign}>
                <DatePicker
                  mode='date'
                  placeholder='select date'
                  format='YYYY-MM-DD'
                  onDateChange={value =>
                    this.props.dailyUsageStockUpdate({
                      name: 'DPickdobStock',
                      value
                    })
                  }
                  date={this.props.DPickdobStock}
                  animationType={'fade'}
                  // androidMode={'default'}
                  placeHolderText='Click here to select date'
                  textStyle={{ color: 'green' }}
                  placeHolderTextStyle={{ color: '#275DAD' }}
                />
              </ListItem>
              <Text>{'\n'}</Text>
            </Card>

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
  // main block container
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
  },
  cardtitle: {
    textAlign: 'center',
    borderWidth: 1,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
  },
  dateblockalign: {
    textAlign: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  console.log(state);
  const {
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
  } = state.DailyUsageStockKey;
  return {
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
  };
};

export default connect(
  mapStateToProps,
  { dailyUsageStockUpdate, dailyUsageStockCreate }
)(DailyUsageStock);
