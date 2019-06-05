
import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, ListItem, Segment, DatePicker, Button, CheckBox, Title, Text, Body, Form, Input, Label } from 'native-base';


export default class HealthSupplyOption2 extends Component {
  constructor(props) {
    super(props)
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Form>
        <View>
          <Input placeholder="Enter in Quantity" />
        </View>
        <Text>{"\n"}</Text>
        <Label>Enter the date by which you need the supplies</Label>
        <ListItem>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
          />
          <Text>
            Date: {this.state.chosenDate.toString().substr(4, 12)}
          </Text>
        </ListItem>
        <Text>{"\n"}</Text>
        <Button block success>
          <Text>PROCEED</Text>
        </Button>
        <Text>{"\n"}</Text>
      </Form>
    );
  }
}