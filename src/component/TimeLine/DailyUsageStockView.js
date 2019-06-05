import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import {
  Container,
  Content,
  ListItem,
  InputGroup,
  Button,
  Text,
  Card,
  Form,
  Input,
  Label
} from 'native-base';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  dailyUsageStockUpdate,
  dailyUsageStockSaveChanges,
  dailyUsageStockDelete
} from '../../actions';
import { Confirm } from '../Common';

class DailyUsageStockView extends Component {
  state = { showModal: false };
  componentWillMount() {
    _.each(this.props.navigation.state.params.child, (value, name) => {
      console.log(name);
      console.log(value);
      this.props.dailyUsageStockUpdate({ name, value });
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
      amalice_rich,
      green_gram,
      DPickdobStock
    } = this.props;
    // console.log(this.props.navigation);
    console.log('inside onButtonPress Viewpage');

    //console.log(six_months_to_one_year);
    const navigate = this.props.navigation;
    // const navigate = this.props.navigation;

    this.props.dailyUsageStockSaveChanges({
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
      DPickdobStock,
      uid: this.props.navigation.state.params.child.uid,
      navigate
    });
  }

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
  }

  onAccept() {
    const navigate = this.props.navigation;
    this.props.dailyUsageStockDelete(
      { uid: this.props.navigation.state.params.child.uid },
      navigate
    );
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    console.log('six_months_to_one_year');
    console.log(this.props.navigation.state.params.child);

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
      amalice_rich,
      green_gram,
      DPickdobStock
    } = this.props.navigation.state.params.child;

    console.log(this.props.navigation.state.params.child.food_received);

    return (
      <Container style={styles.back}>
        <Content padder>
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Label>
            Fill the form for number of people who used the resources
          </Label>
          <Text>{'\n'}</Text>
          <Form>
            {/* Card one */}
            <Card style={styles.cardtop}>
              <Label style={styles.cardtitle}>Update Stock Details</Label>
            </Card>

            {/* Card Three */}
            <Card>
              {/**********************Nutritious****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>
                    Nutritious Food{' '}
                  </Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Nutritious Food'
                    value={this.props.nutritious_food}
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
                    value={this.props.protien_food}
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
                    value={this.props.oil}
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
                    value={this.props.jaggery}
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
                    value={this.props.chilli}
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
                    value={this.props.egg}
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
                    value={this.props.salt}
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
                    value={this.props.grams}
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
                    placeholder='Mustard Seeds'
                    value={this.props.mustard_seeds}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({
                        name: 'mustard_seeds',
                        value
                      })
                    }
                  />
                </InputGroup>
              </ListItem>
              rice, ,{/********************** Rice****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>Rice</Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Rice'
                    value={this.props.rice}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({ name: 'rice', value })
                    }
                  />
                </InputGroup>
              </ListItem>
              {/********************** Wheat ****************************/}
              <ListItem style={styles.block_row}>
                <InputGroup>
                  <Label style={styles.block_row_left_element}>Wheat</Label>
                  <Input
                    style={styles.block_row_right_element}
                    placeholder='Wheat'
                    value={this.props.wheat}
                    placeholderTextColor='#FFFFFF'
                    onChangeText={value =>
                      this.props.dailyUsageStockUpdate({ name: 'wheat', value })
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
                    value={this.props.amalice_rich}
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
                    value={this.props.green_gram}
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
              <Icon name='save' style={styles.iconstyle} />
              <Text>SAVE CHANGES</Text>
            </Button>
            <Text>{'\n'}</Text>
            <Button
              block
              danger
              onPress={() =>
                this.setState({ showModal: !this.state.showModal })
              }
            >
              <Icon name='trash' style={styles.iconstyle} />
              <Text>Delete</Text>
            </Button>
            <Confirm
              visible={this.state.showModal}
              onAccept={this.onAccept.bind(this)}
              onDecline={this.onDecline.bind(this)}
            >
              <Text>Are you sure you want to delete this?</Text>
            </Confirm>

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
    textAlignVertical: 'center',
    height: 50
  },
  block_row_right_element: {
    textAlign: 'center',
    flex: 0.5,
    height: 50,
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
  },
  iconstyle: {
    color: '#ffff',
    height: 30,
    marginTop: 15
  }
});
const mapStateToProps = state => {
  const {
    food_received,
    food_provided,
    food_remaining,
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
    food_provided_today,
    Extra,
    DPickdobStock
  } = state.DailyUsageStockKey;
  return {
    food_received,
    food_provided,
    food_remaining,
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
    food_provided_today,
    Extra,
    DPickdobStock
  };
};
export default connect(
  mapStateToProps,
  { dailyUsageStockUpdate, dailyUsageStockSaveChanges, dailyUsageStockDelete }
)(DailyUsageStockView);
