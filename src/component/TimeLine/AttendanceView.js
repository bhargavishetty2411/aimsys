
import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Card, Form } from 'native-base';

class AttendancesView extends Component {

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
    }
  }

  render() {
    console.log('HNumber');
    console.log(this.props.navigation.state.params);
    const { ChildName, gender, Dob, Regdate } = this.props.navigation.state.params.attendance;
    // eslint-disable-next-line no-undef
    handleOnPress = () => this.setState({ 'show': 1 });
    return (
      <Container style={styles.back} >
        <Content padder>

          <Form>
            {/********************** Children****************************/}
            <Card>
              <Text>{'\n'}</Text>
              <Text style={styles.contentview}>Child Name :{'\t'}{ChildName} </Text>

              <Text style={styles.contentview}>Gender :{'\t'}{gender} </Text>

              <Text style={styles.contentview} >Date Of Birth :{'\t'}{Dob} </Text>

              <Text style={styles.contentview} >Registered Date :{'\t'}{Regdate} </Text>


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

export default AttendancesView;
