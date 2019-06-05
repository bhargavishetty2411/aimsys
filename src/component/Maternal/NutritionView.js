
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase';
import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Card, Form } from 'native-base';

class NutritionView extends Component {

  static navigationOptions = {
    title: 'Child Nutrition Details',
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
    };
  }

  state = {
    a: []
}

componentWillMount() {
    const { CName } = this.props.navigation.state.params.nutrition;
    if (CName !== 'No Record Found') {
        let awcid = 0;
        const database = firebase.database();
        const { currentUser } = firebase.auth();
        database.ref('/assignedworkerstocenters')
            .orderByChild('anganwadiworkerid').equalTo(currentUser.uid)
            .once('value', snapshot => {
                if (snapshot.val()) {
                    const value = snapshot.val();
                    const keys = Object.keys(value);
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        awcid = value[k].anganwadicenter_code;
                    }
                    database.ref(`/users/${awcid}/Maternal/ChildRegistration/${CName}`)
                        .once('value', snapshot1 => {
                            console.log('child view', snapshot1.val());
                            if (snapshot1.val()) {
                                console.log('i prnnn', snapshot1.val().CName);
                                this.setState({ a: snapshot1.val().CName });
                            }
                        });
                } else {
                    console.log('no user data');
                }
            });
    }
}

  render() {
     console.log(this.props.navigation.state.params);
   const { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli } = this.props.navigation.state.params.nutrition;
   // eslint-disable-next-line no-undef
   handleOnPress = () => this.setState({ show: 1 });
    return (
      <Container style={styles.back} >
        <Content padder>
         
          <Form>
            {/********************** Children****************************/}
            <Card>
            <Text>{'\n'}</Text>
            <Text style={styles.contentview}>Household Number :{'\t'}{HNumber} </Text>

              <Text style={styles.contentview}>Child Name :{'\t'}{this.state.a} </Text>

              <Text style={styles.contentview}>Weight:{'\t'}{weight} </Text>

              <Text style={styles.contentview}>Underweight? :{'\t'}{under} </Text>

              <Text style={styles.contentview}>Wasting? :{'\t'}{wast} </Text>
              <Text style={styles.contentview}>Stunting? :{'\t'}{stunt} </Text>
              <Text style={styles.contentview}>New born with low birth weight less then 2500 grams? :{'\t'}{ lowbirth} </Text>
              <Text style={styles.contentview}>Early iniation of Breastfeeding? :{'\t'}{breastfeed} </Text>
              <Text style={styles.contentview}>Exclusive Breastfeeding? :{'\t'}{ exfeed} </Text>
              <Text style={styles.contentview}>Children inititaed appropriate complementary feeding? :{'\t'}{cfeed} </Text>
              <Text style={styles.contentview}>Institutional deliveries? :{'\t'}{ideli} </Text>

              <Text>{'\n'}</Text>
             
            </Card>

            {(this.state.show) ? <Card style={styles.develop}><Text> Currently under development!!</Text></Card> : null

            }

            <Text>{'\n'}</Text>
           
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

  contentview: {
    marginLeft: 10,
  },
  develop: {
    backgroundColor: '#FFFF33',
  },
  cardtitle: {
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },

});

export default NutritionView;
