/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, ListItem, Segment, DatePicker, Button, CheckBox, Title, Text, Body, Form, Input, Label } from 'native-base';
import HealthSupplyOption1 from './HealthSupplyOption1';
import HealthSupplyOption2 from './HealthSupplyOption2';
class MedicineLog extends Component {

  constructor(props) {
    super(props)
    this.state = { item_Oral_rehydration_salts: false, item_Chloroquine: false, item_Sulphadimidine: false, item_Aspirin: false, item_Iron_and_folic_acid: false, item_Vitamin_A_solution: false, item_Co_trimoxazole_tablet: false, item_Benzyl_benzoate: false, item_Co_trimoxazole_syrup: false, item_Mebendazole: false }
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }


  static navigationOptions = {
    title: 'Timeline',
    headerStyle: {
      backgroundColor: '#355870',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  state = {
    activePage: 1,
  }


  selectComponent = (activePage) => () => this.setState({ activePage })

  _renderComponent = () => {
    if (this.state.activePage === 1)
      return <HealthSupplyOption1 /> //... Your Component 1 to display
    else
      return <HealthSupplyOption2 /> //... Your Component 2 to display
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  // Rice Moong daal Jagarry Cooking oil Onion Mysore daal Mutter Potato Arrar Daal Turmeric cumin seed red chilly mustard seed salt Whole moong Detergent Rajma Egg Others
  render() {
    return (

      <Container>
        <View hasSegment></View>
        <Segment style={{ backgroundColor: '#355870' }}>
          <Button style={{
            backgroundColor: this.state.seg === 1 ? "#f7c744" : undefined,
            borderColor: "#ffff",
          }} active={this.state.activePage === 1}
            onPress={this.selectComponent(1)}><Text style={{ color: this.state.seg === 1 ? "#ffff" : "#f7c744" }}>Single Item</Text></Button>
          <Button style={{
            backgroundColor: this.state.seg === 2 ? "#f7c744" : undefined,
            borderColor: "#ffff",
          }} active={this.state.activePage === 2}
            onPress={this.selectComponent(2)}><Text style={{ color: this.state.seg === 2 ? "#ffff" : "#f7c744" }}>Medicine Kit</Text></Button>
        </Segment>

        <Text>{"\n"}</Text>
        <Label>Fill the form for required goods for immediate supplies</Label>
        <Text>{"\n"}</Text>
        <View>

        </View>
        <Content padder>
          {this._renderComponent()}
        </Content>
      </Container>
    );
  }
}

export default MedicineLog;