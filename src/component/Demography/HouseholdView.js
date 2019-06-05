import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, ListItem, Icon, InputGroup, Button, CheckBox, Text, List, Body, Card, Form, Input, Label } from 'native-base';
class HouseholdView extends Component {
  static navigationOptions = {
    title: 'Household Information',
    headerStyle: {
      backgroundColor: '#355870',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      show: '',
    }
  }

  render() {
    const { HHNumber, LiteracyRate, HHName, DOB, sex, Status, Disability, Designation, Phonenumber, Caste,Disease1,Disease2,Disease3 } = this.props.navigation.state.params.HouseHold;
    var today = new Date();
    var Brday = new Date(DOB);
    var totalMonths = (today.getFullYear() - Brday.getFullYear()) * 12 + today.getMonth() - Brday.getMonth();
    totalMonths += today.getDay() < Brday.getDay() ? -1 : 0;
    var years = today.getFullYear() - Brday.getFullYear();
    if (Brday.getMonth() > today.getMonth())
      years = years - 1;
    else if (Brday.getMonth() === today.getMonth())
      if (Brday.getDate() > today.getDate())
        years = years - 1;

    var days;
    var months;

    if (Brday.getDate() > today.getDate()) {
      months = (totalMonths % 12);
      if (months == 0)
        months = 11;
      var x = today.getMonth();
      switch (x) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
          var a = Brday.getDate() - today.getDate();
          days = 31 - a;
          break;
        }
        default: {
          var a = Brday.getDate() - today.getDate();
          days = 30 - a;
          break;
        }
      }

    }
    else {
      days = today.getDate() - Brday.getDate();
      if (Brday.getMonth() === today.getMonth())
        months = (totalMonths % 12);
      else
        months = (totalMonths % 12) + 1;
    }
    var age = '';
    var cage = years + ' years ' + months + ' months ' + days + ' days';
    console.log('caaaa', cage);
    if (years <= 0) {
      age = months + 'Months';
      console.log('age', age);
    }
    else {
      age = years;
    }

    handleOnPress = () => this.setState({ "show": 1 })
    return (
      <Container style={styles.back} >
        <Content padder>
          <Form>
            <Card>
              <Text style={{ marginLeft: 95, fontSize: 24 }}>HouseHold Report </Text>
            </Card>
            <Card>
              <Text>{"\n"}</Text>
              <Text style={styles.contentview}>Household Number :{"\t"}{HHNumber} </Text>
              <Text style={styles.contentview}>Member Name :{"\t"}{HHName} </Text>
              <Text style={styles.contentview} >Gender :{"\t"}{sex} </Text>
              <Text style={styles.contentview} >DOB :{"\t"}{DOB} </Text>
              <Text style={styles.contentview} >Age :{"\t"}{age} </Text>
              <Text style={styles.contentview} >Qualification :{"\t"}{LiteracyRate} </Text>
              <Text style={styles.contentview}>Status:{"\t"}{Status} </Text>
              <Text style={styles.contentview} >PhysicalyDisabled:{"\t"}{Disability} </Text>
              <Text style={styles.contentview}>Ocupation :{"\t"}{Designation} </Text>
              <Text style={styles.contentview} >Phonenumber:{"\t"}{Phonenumber} </Text>
              <Text style={styles.contentview}>Caste:{"\t"}{Caste} </Text>
              <Text style={styles.contentview}>Disease1 :{"\t"}{Disease1} </Text>
              <Text style={styles.contentview} >Disease2:{"\t"}{Disease2} </Text>
              <Text style={styles.contentview}>Disease3:{"\t"}{Disease3} </Text>
              <Text>{"\n"}</Text>
            </Card>
            {(this.state.show) ? <Card style={styles.develop}><Text> Currently under development!!</Text></Card> : null
            }
            <Text>{"\n"}</Text>
            {/* <Button block danger onPress={this.handleOnPress} >
              <Icon name="md-save" />
              <Text>EXPORT TO PDF</Text>
            </Button>
            <Text>{"\n"}</Text> */}
            <Text>{"\n"}</Text>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  contentview: {
    marginLeft: 10,
    fontSize: 18
  },
  develop: {
    backgroundColor: "#FFFF33",
  },
  cardtitle: {
    textAlign: "left",
    marginLeft: 10,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },

});

export default HouseholdView;
