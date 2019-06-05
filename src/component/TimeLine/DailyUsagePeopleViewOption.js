import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, ListItem, Icon, InputGroup, Button, CheckBox, Text, List, Body, Card, Form, Input, Label } from 'native-base';
import { dailyUsageUpdate,dailyUsageSaveChanges } from '../../actions';
import DatePicker from 'react-native-datepicker';

class DailyUsagePeopleViewOption extends Component {

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
  constructor(props) {
    super(props);
    this.state={
      show: '',
    }
  }





  render() {
    console.log("six_months_to_one_year")
     console.log(this.props.navigation.state.params)
    //console.log(this.props.navigation.state.params)
   const { six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal, nutritious_food,
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
    green_gram } = this.props.navigation.state.params.child;
   handleOnPress = () => this.setState({ "show": 1 })
    return (
      <Container style={styles.back} >
        <Content padder>
         
          <Form>
            {/********************** Children****************************/}
            <Card>
            <Text>{"\n"}</Text>
            <Text style={styles.contentview}>Date :{"\t"}{DPickdob} </Text>
              <Label style={styles.cardtitle}>Children</Label>

              <Text style={styles.contentview}> Children (6 months to 1 year) :{"\t"}{six_months_to_one_year} </Text>

              <Text style={styles.contentview} >Children (1 year to 3 year):{"\t"}{one_year_to_three_year} </Text>

              <Text style={styles.contentview} >Children (3year to 6 year) :{"\t"}{three_year_to_six_year} </Text>

              <Text style={styles.contentview}>Total Children :{"\t"}{total1} </Text>


              <Label style={styles.cardtitle}>Pregnent women</Label>
              <Text style={styles.contentview}>women (Pre-natal) :{"\t"}{pw_prenatal} </Text>

              <Text style={styles.contentview} >women (Post-natal) :{"\t"}{pw_postnatal} </Text>

              <Text style={styles.contentview} >women (3rd-Grade):{"\t"}{pw_3rdgrade} </Text>

              <Text style={styles.contentview}>women (4th-Grade):{"\t"}{pw_4thgrade} </Text>

              <Text style={styles.contentview}>Total Women:{"\t"}{total2} </Text>



              <Text style={styles.contentview} >Total Beneficiaries :{"\t"}{totalfinal} </Text>

              <Text>{"\n"}</Text>
              <Label style={styles.cardtitle}>Food Consumption Details</Label>

              <Text style={styles.contentview}>
                Nutritious Food :{'\t'}
                {nutritious_food}{' '}{'kg\'s'}
              </Text>

              <Text style={styles.contentview}>
                Protien Food :{'\t'}
                {protien_food}{' '}{'kg\'s'}
              </Text>

              <Text style={styles.contentview}>
                Oil :{'\t'}
                {oil}{' '}{'Litre\'s'}
              </Text>

              <Text style={styles.contentview}>
                Jaggery :{'\t'}
                {jaggery}{' '}{'kg\'s'}
              </Text>

              <Text style={styles.contentview}>
                Chilli :{'\t'}
                {chilli}{' '}{'kg\'s'}
              </Text>

              <Text style={styles.contentview}>
                Egg :{'\t'}
                {egg}{' '}{'unit\'s'}
              </Text>

              <Text style={styles.contentview}>
                Salt :{'\t'}
                {salt}{' '}{'kg\'s'}
              </Text>

              <Text style={styles.contentview}>
                Grams :{'\t'}
                {grams}{' '}{'kg\'s'}
              </Text>

              <Text style={styles.contentview}>
                Mustard Seeds :{'\t'}
                {mustard_seeds}{' '}{'kg\'s'}
              </Text>
              <Text style={styles.contentview}>
                Rice :{'\t'}
                {rice}{' '}{'kg\'s'}
              </Text>
              <Text style={styles.contentview}>
                Wheat :{'\t'}
                {wheat}{' '}{'kg\'s'}
              </Text>
              <Text style={styles.contentview}>
                Amalice Rich :{'\t'}
                {amalice_rich}{' '}{'kg\'s'}
              </Text>
              <Text style={styles.contentview}>
                Green gram :{'\t'}
                {green_gram}{' '}{'kg\'s'}
              </Text>

              <Text>{'\n'}</Text>
            </Card>
            <Text>{'\n'}</Text>
            {/* <Button block danger onPress={this.handleOnPress} >
            <Icon name="md-save" />
              <Text>EXPORT TO PDF</Text>
            </Button> */}
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  // main block container

  contentview:{
    marginLeft:10,
  },
  develop:{
    backgroundColor:"#FFFF33",
  },
  cardtitle: {
    textAlign: "left",
    marginLeft:10,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },

});

export default DailyUsagePeopleViewOption;


