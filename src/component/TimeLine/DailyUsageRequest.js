import React, { Component } from 'react';
import { connect } from 'react-redux';
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
} from '../../actions/DailyUsageRequestAction';
import DatePicker from 'react-native-datepicker';

class DailyUsageRequest extends Component {
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
      amalice_rich,
      green_gram,
      food_provided_today,
    Oralrehydrationsalts,
    Chloroquine,
    Iron_and_folic_acid,
    Co_trimoxazole_tablet,
    Co_trimoxazole_syrup,
    Mebendazole,
    Benzyl_benzoate,
    Vitamin_A_solution,
    Aspirin,
    Sulphadimidine,
    Paracetamol,
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
      amalice_rich,
      green_gram,
      food_provided_today,
    Oralrehydrationsalts,
    Chloroquine,
    Iron_and_folic_acid,
    Co_trimoxazole_tablet,
    Co_trimoxazole_syrup,
    Mebendazole,
    Benzyl_benzoate,
    Vitamin_A_solution,
    Aspirin,
    Sulphadimidine,
    Paracetamol,
      DPickdobStock,
      navigate
    });
  }

  render() {
    return (
      <Container style={styles.back}>
        <Content padder>
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Label>Fill the form for requesting resources</Label>
          <Text>{'\n'}</Text>
          <Form>
            {/* Card one */}
            <Card>
              <Label style={styles.cardtitle}>REQUEST FORM</Label>
            </Card>

            {/* Card Three */}
            <Card>
              {/**********************Nutritious****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Nutritious{' '}
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Nutritious Food'
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
                    Protien Food
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Protien Food'
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
                  <Label style={styles.block_row_left_element}>Oil</Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Oil'
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
                  <Label style={styles.block_row_left_element}>Jaggery</Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Jaggery'
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
                  <Label style={styles.block_row_left_element}>Chilli</Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Chilli'
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
                  <Label style={styles.block_row_left_element}>Egg</Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Egg'
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
                  <Label style={styles.block_row_left_element}>Salt</Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Salt'
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
                  <Label style={styles.block_row_left_element}>Grams</Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Grams'
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
                    Mustard Seeds
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholderTextColor='#FFFFFF'
                    placeholder='Mustard Seeds'
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

              {/**********************Amalice Rich****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Amalice Rich
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Amalice Rich'
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
                    Green gram
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Green gram'
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

              {/**********************Food provided today****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Food provided today
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Food provided today'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'food_provided_today',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
              {/* Oralrehydrationsalts */}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                  Oralrehydrationsalts
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter in units'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'Oralrehydrationsalts',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>

      {/* Chloroquine */}
      <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                  Chloroquine
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter in units'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'Chloroquine',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
      {/* Iron and folic acid */}
      <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                  Iron and folic acid
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter in units'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'Iron_and_folic_acid',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
      {/* Co-trimoxazole tablet */}
      <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                  Co-trimoxazole tablet
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter in units'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'Co_trimoxazole_tablet',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
      {/* Co-trimoxazole syrup */}
      <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                  Co-trimoxazole syrup
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter in units'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'Co_trimoxazole_syrup',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
      {/* Mebendazole */}
      <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                  Mebendazole
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter in units'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'Mebendazole',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
      {/* Benzyl benzoate */}
      <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                  Benzyl benzoate
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter in units'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'Benzyl_benzoate',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
      {/* Vitamin A solution */}
      <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                  Vitamin A solution
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter in units'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'Vitamin_A_solution',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
      {/* Aspirin */}
      <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                  Aspirin
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter in units'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'Aspirin',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
      {/* Sulphadimidine */}
      <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                  Sulphadimidine
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter in units'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'Sulphadimidine',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
      {/* Paracetamol */}
      <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                  Paracetamol
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Enter in units'
                    placeholderTextColor='#FFFFFF'
                    value={parseInt(this.props.food_remaining)}
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'Paracetamol',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
   
            </Card>

            {/* Card Four */}
            <Card>
              <Text>{'\n'}</Text>
              <Label style={styles.dateblockalign}>
                By what time you need the resources
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
    textAlignVertical: 'center',
    height: 50
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
    borderColor: '#275DAD',
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
    amalice_rich,
    green_gram,
    food_provided_today,
    Oralrehydrationsalts,
      Chloroquine,
      Iron_and_folic_acid,
      Co_trimoxazole_tablet,
      Co_trimoxazole_syrup,
      Mebendazole,
      Benzyl_benzoate,
      Vitamin_A_solution,
      Aspirin,
      Sulphadimidine,
      Paracetamol,
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
    amalice_rich,
    green_gram,
    food_provided_today,
    Oralrehydrationsalts,
      Chloroquine,
      Iron_and_folic_acid,
      Co_trimoxazole_tablet,
      Co_trimoxazole_syrup,
      Mebendazole,
      Benzyl_benzoate,
      Vitamin_A_solution,
      Aspirin,
      Sulphadimidine,
      Paracetamol,
    DPickdobStock
  };
};

export default connect(
  mapStateToProps,
  { dailyUsageStockUpdate, dailyUsageStockCreate }
)(DailyUsageRequest);
