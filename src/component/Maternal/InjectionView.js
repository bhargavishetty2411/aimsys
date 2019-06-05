import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Card, Form } from 'native-base';

class InjectionView extends Component {

  static navigationOptions = {
    title: 'Immunization details',
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

  render() {
    console.log('HNumber');
     console.log(this.props.navigation.state.params);
   const { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete } = this.props.navigation.state.params.injection;
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

              <Text style={styles.contentview}>Child Name :{'\t'}{ CName} </Text>

              <Text style={styles.contentview} >Date Of Birth :{'\t'}{DPickdob} </Text>

              <Text style={styles.contentview} >polio After Birth :{'\t'}{poliodate} </Text>

              <Text style={styles.contentview}>Hepatitis B0 Dose:{'\t'}{ hepa} </Text>

              <Text style={styles.contentview}>BCG :{'\t'}{BCG} </Text>
              <Text style={styles.contentview}>DPT1 :{'\t'}{DPT1} </Text>
              <Text style={styles.contentview}>Hepatitis B1 :{'\t'}{hepa1} </Text>
              <Text style={styles.contentview}>OPV1 :{'\t'}{OPV1} </Text>
              <Text style={styles.contentview}>DPT2 :{'\t'}{DPT2} </Text>
              <Text style={styles.contentview}>Hepatitis B2 :{'\t'}{hepa2} </Text>
              <Text style={styles.contentview}>OPV2 :{'\t'}{OPV2} </Text>
              <Text style={styles.contentview}>DPT3 :{'\t'}{DPT3} </Text>
              <Text style={styles.contentview}>Hepatitis B3 :{'\t'}{hepa3} </Text>
              <Text style={styles.contentview}>OPV3 :{'\t'}{OPV3} </Text>
              <Text style={styles.contentview}>Dadara1 :{'\t'}{dadara1} </Text>
              <Text style={styles.contentview}>Nutriton 1st Dose :{'\t'}{nutri1} </Text>
              <Text style={styles.contentview}>DPT Booster :{'\t'}{dptbooster} </Text>
              <Text style={styles.contentview}>Dadara2 :{'\t'}{dadara2} </Text>
              <Text style={styles.contentview}>First year injection has completed or not? :{'\t'}{complete} </Text>

              <Text>{'\n'}</Text>
             
            </Card>

            {(this.state.show) ? <Card style={styles.develop}><Text> Currently under development!!</Text></Card>:null

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

export default InjectionView;
