import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import { Container, Content, ListItem, InputGroup, Button, CheckBox, Text, List, Body, Card, Form, Input, Label } from 'native-base';
import { dailyUsageUpdate,dailyUsageSaveChanges,dailyUsageDelete } from '../../actions';
import {Confirm } from '../Common';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
class DailyUsagePeopleView extends Component {

  state = { showModal: false };
  componentWillMount() {
    _.each(this.props.navigation.state.params.child, (value, name) => {
      console.log(name);
      console.log(value);
      this.props.dailyUsageUpdate({ name, value });
    });    
  }

  onButtonPress() {
    const { six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal } = this.props;
    // console.log(this.props.navigation);
    console.log('inside onButtonPress Viewpage');

    console.log(six_months_to_one_year);
      const navigate = this.props.navigation;
    // const navigate = this.props.navigation;

    this.props.dailyUsageSaveChanges({
      six_months_to_one_year: six_months_to_one_year ,
      one_year_to_three_year: one_year_to_three_year,
      three_year_to_six_year: three_year_to_six_year,
      pw_prenatal: pw_prenatal ,
      pw_postnatal: pw_postnatal,
      pw_3rdgrade: pw_3rdgrade ,
      pw_4thgrade: pw_4thgrade ,
      DPickdob: DPickdob ,
      total1: total1 ,
      total2: total2,
      totalfinal: totalfinal ,
      uid:this.props.navigation.state.params.child.uid,
      navigate
    });

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
  constructor(props) {
    super(props);
  }

  onAccept() {
    const navigate = this.props.navigation;
    this.props.dailyUsageDelete({uid: this.props.navigation.state.params.child.uid},navigate);
    this.setState({ showModal: false });
}

onDecline() {
    this.setState({ showModal: false });
}



  render() {
    console.log("six_months_to_one_year")
    console.log(this.props.navigation.state.params.child.six_months_to_one_year)
  
    const { six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal } = this.props.navigation.state.params.child;
   
 







    this.props.six_months_to_one_year != six_months_to_one_year|| this.props.one_year_to_three_year != one_year_to_three_year || this.props.three_year_to_six_year != three_year_to_six_year ?
      this.props.dailyUsageUpdate({ name: 'total1', value: parseInt(this.props.six_months_to_one_year) + parseInt(this.props.one_year_to_three_year) + parseInt(this.props.three_year_to_six_year) }) :  this.props.dailyUsageUpdate({ name: 'total1', value: total1});

    this.props.pw_prenatal != pw_prenatal || this.props.pw_postnatal != pw_postnatal||this.props.pw_3rdgrade != pw_3rdgrade || this.props.pw_4thgrade != pw_4thgrade ?
      this.props.dailyUsageUpdate({ name: 'total2', value: parseInt(this.props.pw_prenatal) + parseInt(this.props.pw_postnatal) + parseInt(this.props.pw_3rdgrade) + parseInt(this.props.pw_4thgrade) }) : this.props.dailyUsageUpdate({ name: 'total2', value: total2});

 this.props.total1 != total1 || this.props.total2 != total2 ?
    this.props.dailyUsageUpdate({ name: 'totalfinal', value: parseInt(this.props.total1) + parseInt(this.props.total2) }) :  this.props.dailyUsageUpdate({ name: 'totalfinal', value: totalfinal});;






    // nw console.log(this.props.child);
    // nw console.log("state");
    //  nw console.log(this.props.navigation.state);
    //  nw console.log("child");
    // nw  console.log(this.props.navigation.state.child);
    // const { childresponse } = this.props.navigation.state.params.child;
    return (
      <Container style={styles.back} >
        <Content padder>
          <Text>{"\n"}</Text>
          <Label>Fill the form for number of people who used the resources</Label>
          <Text>{"\n"}</Text>
          <Form>
            {/********************** Children****************************/}
            <Card>

              <Label style={styles.cardtitle}>Children</Label>

              {/**********************Food Quantity 1****************************/}
              <ListItem>
                <InputGroup >
                  <Label>Food Quantity 1 </Label>
                  <Input
                   // keyboardType='numeric'
                    //onChangeText= {(text) => this.setState({f1:parseInt(text)})} 
                    placeholderTextColor="#FFFFFF" 
                    style={styles.input} placeholder="6 Months to 1 Year"
                   // value={this.props.six_months_to_one_year}
                  onChangeText={value => this.props.dailyUsageUpdate({ name: 'six_months_to_one_year', value })}

                    >{this.props.six_months_to_one_year}</Input>
                </InputGroup>
              </ListItem>

              {/**********************Food Quantity 1****************************/}
              <ListItem>
                <InputGroup >
                  <Label >Food Quantity 1 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor="#FFFFFF" 
                    // onChangeText={(text) => this.setState({ f2: parseInt(text) })}
                    style={styles.input} placeholder="1 Year to 3 Year"
                   // value={parseInt(this.props.one_year_to_three_year)}
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'one_year_to_three_year', value })}
                  >{this.props.one_year_to_three_year}</Input>

                </InputGroup>
              </ListItem>

              {/**********************Food Quantity 1****************************/}
              <ListItem>
                <InputGroup >
                  <Label >Food Quantity 1 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor="#FFFFFF" 
                    // onChangeText={(text) => this.setState({ f3: parseInt(text) })}
                    style={styles.input} placeholder="3 Year to 6 Year"
                   // value={parseInt(this.props.three_year_to_six_year)}
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'three_year_to_six_year', value })}
                  >{ this.props.three_year_to_six_year }</Input>
                </InputGroup>
              </ListItem>

              {/**********************Total****************************/}
               <ListItem>
                  <InputGroup >
                    <Label >Total(1)<Text>{"\t\t\t\t\t\t\t\t\t\t\t\t"}</Text> </Label>
                    <Input style={styles.input}
                    placeholderTextColor="#FFFFFF" 
                       editable={false} selectTextOnFocus={false}
                      // onChangeText={(value) => parseInt(this.props.total1)}
                    // selectTextOnFocus={false}
                    >{this.props.total1}</Input>
                   
                  </InputGroup>
                </ListItem> 

            </Card>




            {/**********************pregnant woman****************************/}
            <Card>

              <Label style={styles.cardtitle}>Pregnant Woman</Label>
              {/**********************Food Quantity 2****************************/}

              <ListItem>
                <InputGroup >
                  <Label>Food Quantity 2 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor="#FFFFFF" 
                   // value={parseInt(this.props.pw_prenatal)}
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'pw_prenatal', value })}
                    style={styles.input} placeholder="Pregnant Woman (Prenatal)" >{
                      this.props.pw_prenatal
                    }</Input>
                </InputGroup>
              </ListItem>
              {/* pw_prenatal,pw_postnatal,pw_3rdgrade,pw_4thgrade  */}
              {/**********************Food Quantity 2****************************/}
              <ListItem>
                <InputGroup >
                  <Label >Food Quantity 2 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor="#FFFFFF" 
                   // value={parseInt(this.props.pw_postnatal)}
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'pw_postnatal', value })}
                    style={styles.input} placeholder="Pregnant Woman (Postnatal)" >
                    {this.props.pw_postnatal}
                    </Input>
                </InputGroup>
              </ListItem>

              {/**********************Food Quantity 2****************************/}
              <ListItem>
                <InputGroup >
                  <Label >Food Quantity 2 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor="#FFFFFF" 
                   // value={parseInt(this.props.pw_3rdgrade)}
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'pw_3rdgrade', value })}
                    style={styles.input} placeholder="3rd Grade" >{
                      this.props.pw_3rdgrade
                    }</Input>
                </InputGroup>
              </ListItem>

              {/**********************Food Quantity 2****************************/}
              <ListItem>
                <InputGroup >
                  <Label >Food Quantity 2 </Label>
                  <Input
                    keyboardType='numeric'
                    placeholderTextColor="#FFFFFF" 
                    //value={parseInt(this.props.pw_4thgrade)}
                    onChangeText={value => this.props.dailyUsageUpdate({ name: 'pw_4thgrade', value })}
                    style={styles.input} placeholder="4th Grade" > {
                      this.props.pw_4thgrade
                    }</Input>
                </InputGroup>
              </ListItem>
              {/**********************Total 2****************************/}

               <ListItem>
                  <InputGroup >
                    <Label >Total(2)<Text>{"\t\t\t\t\t\t\t\t\t\t\t\t"}</Text> </Label>
                    <Input style={styles.input}
                    placeholderTextColor="#FFFFFF" 
                      // onChangeText={(value) => parseInt(this.props.total1)}
                      editable={false} selectTextOnFocus={false}
                    >{this.props.total2}</Input>
                    {/* <Label ><Text style={styles.input}>{ result }</Text></Label> */}

                  </InputGroup>
                </ListItem> 

            </Card>
            {/* 1.not displaying in textbox 2.conversion error  */}
            <Card>


              {/**********************Total****************************/}
              {this.props.total1 != '' && this.props.total2 != '' ?
                <ListItem>
                  <InputGroup >
                    <Label >Total(Final)<Text>{"\t\t\t\t\t\t\t\t\t\t\t\t"}</Text> </Label>
                    <Input style={styles.input}
                    placeholderTextColor="#FFFFFF" 
                      // onChangeText={(value) => parseInt(this.props.total1)}
                      editable={false} selectTextOnFocus={false}
                    >{this.props.totalfinal}</Input>
                    {/* <Label ><Text style={styles.input}>{ result }</Text></Label> */}

                  </InputGroup>
                </ListItem> : null}


            </Card>

            <Card>
              <Text>{"\n"}</Text>
              <Label style={styles.dateblockalign}>Select the date for the above data</Label>
              <ListItem style={styles.dateblockalign}>
                {/* <Icon name="md-calendar" color="#4F8EF7" /> */}
                <DatePicker
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  onDateChange={value => this.props.dailyUsageUpdate({ name: 'DPickdob', value })}
                  date={this.props.DPickdob}
                  // defaultDate={new Date()}
                  // defaultDate={new Date()}
                  // minimumDate={new Date(2018, 1, 1)}
                  // // maximumDate={new Date(2050, 12, 31)}
                  // locale={"en"}
                  // timeZoneOffsetInMinutes={undefined}
                  // modalTransparent={false}
                  animationType={"fade"}
                  // androidMode={"default"}
                  placeHolderText="Click here to select date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#275DAD" }}
                // //onDateChange={this.setDate}
                // onDateChange={value => this.props.dailyUsageUpdate({ name: 'DPickdob', value })}
                // date={this.props.DPickdob}
                // disabled={false}
                />

              </ListItem>
              <Text>{"\n"}</Text>
            </Card>



            <Text>{"\n"}</Text>
            <Button block success onPress={this.onButtonPress.bind(this)}  >
            <Icon name="save"  style={styles.iconstyle} />
              <Text>SAVE CHANGES</Text>
            </Button>
            <Text>{"\n"}</Text>
             <Button block danger onPress={() => this.setState({ showModal: !this.state.showModal })}><Icon name="trash"  style={styles.iconstyle}  /><Text>Delete</Text></Button>
                <Confirm visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                ><Text>Are you sure you want to delete this?</Text> 
                </Confirm>

            <Text>{"\n"}</Text>
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
    justifyContent: 'center',

  },
  block_row: {
    flexDirection: 'row',
  },
  block_row_left_element: {
    textAlign: 'center',
    justifyContent: 'center',
    flex: 0.5,
    textAlignVertical: "center",
    height: 50,
  },
  block_row_right_element: {
    textAlign: 'center',
    flex: 0.5,
    height: 50,
    backgroundColor: '#275DAD'

  },
  cardtitle: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: '#275DAD',
    paddingTop: 10,
    paddingBottom: 10,
  },
  dateblockalign: {
    textAlign: 'center',
    justifyContent: 'center',

  },
 iconstyle:{
     color:'#ffff',
     height:30,
     marginTop:15,
  } 
});
const mapStateToProps = (state) => {
  const { six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal } = state.DailyUsagePeopleKey;
  return { six_months_to_one_year, one_year_to_three_year, three_year_to_six_year, pw_prenatal, pw_postnatal, pw_3rdgrade, pw_4thgrade, DPickdob, total1, total2, totalfinal };
};
export default connect(mapStateToProps, { dailyUsageUpdate,dailyUsageSaveChanges,dailyUsageDelete })(DailyUsagePeopleView);


