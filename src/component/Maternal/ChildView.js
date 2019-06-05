
import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Container, Content, Text, Card, Form } from 'native-base';

class ChildView extends Component {
  state = {
    a: []
  }
  static navigationOptions = {
    title: 'Child Registration',
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
  componentWillMount() {
    console.log('cmotherid', this.props.navigation.state.params.child.CMotherId);
    this.search(this.props.navigation.state.params.child.CMotherId);
  }
  search(h) {
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
          const db = database.ref(`/users/${awcid}/Demographic/Pregnancy/${h}`);
          db.on('value', snapshot1 => {
            const pname = snapshot1.val().PregnantName;
            const hnumber = snapshot1.val().HHNumber;
            const hb = database.ref(`/users/${awcid}/Demographic/HouseholdMember/${hnumber}/${pname}`);
            hb.on('value', snap => {
              this.setState({ a: snap.val().HHName });
            });
          });
        } else {
          console.log('no user data');
        }
      });
  }

  render() {
    console.log('inside render', this.state.a);
    console.log(this.props.navigation.state.params);
    const { HNumber, CName, CMotherId, option, DPickdob, DPickregdate } = this.props.navigation.state.params.child;
    // eslint-disable-next-line no-undef
    //console.log('CMotherIDd',CMotherId);


    handleOnPress = () => this.setState({ 'show': 1 });
    return (
      <Container style={styles.back} >
        <Content padder>

          <Form>
            {/********************** Children****************************/}
            <Card>
              <Text>{'\n'}</Text>
              <Text style={styles.contentview}>Household Number :{'\t'}{HNumber} </Text>

              <Text style={styles.contentview}>Child Name :{'\t'}{CName} </Text>

              <Text style={styles.contentview} >Child Mothername :{'\t'}{this.state.a} </Text>

              <Text style={styles.contentview} >Gender :{'\t'}{option} </Text>

              <Text style={styles.contentview}>Date of Birth:{'\t'}{DPickdob} </Text>

              <Text style={styles.contentview}>Registered Date :{'\t'}{DPickregdate} </Text>

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

export default ChildView;
