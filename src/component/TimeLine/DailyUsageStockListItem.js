import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Container, Content, InputGroup, Button, CheckBox, List, Body, Card, Form, Input, Label, ActionSheet } from 'native-base';
import { withNavigation } from 'react-navigation';
import Moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome';

class DailyUsageStockListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    const { food_received,
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
      DPickdobStock } = this.props.child;

    return (
      <View>{DPickdobStock !== 'No Records Found' ?
        <View style={styles.projectRow} >
          <View style={styles.projectText} >

            <Text style={styles.itemName}  >Report of {"\t"}
              {DPickdobStock}
            </Text>
            <Text style={styles.itemDetails}>Last edited  {"\t"}
              {`${Moment(this.props.child).fromNow()}`}
            </Text>
          </View>


          <View style={styles.projectTextchild1}>

            <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('DailyUsageStockViewOption', { child: this.props.child }) }}>
              <View>
                <Icon name="eye" size={30} style={styles.moreIcon} />
                <Text style={styles.moreIcon} >View</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          {/* <View style={styles.projectTextchild2}>

            <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('DailyUsageStockView', { child: this.props.child }) }}>
              <View>
                <Icon name="edit" size={30} style={styles.moreIcon} />
                <Text style={styles.moreIcon} >Edit</Text>
              </View>
            </TouchableWithoutFeedback>
          </View> */}
        </View>
        : <View style={styles.pt}><Text style={styles.moreContainer}>No records found please try again</Text></View>
      }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  pt: {
    flex: 1,
  },
  projectText: {
    flex: 0.8,
    flexDirection: 'column'
  },
  projectTextchild1: {
    flex: 0.2,
    flexDirection: 'column'
  },
  // projectTextchild2: {
  //   flex: 0.1,
  //   flexDirection: 'column'
  // },

  projectRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 7,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#4A90E2'
  },

  itemName: {
    fontSize: 18,
    color: '#4A90E2',
  },

  itemDetails: {
    fontSize: 12,
    color: '#BBBBBB',
  },

  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  moreIcon: {
    color: '#275DAD'
  }

});


export default withNavigation(DailyUsageStockListItem);