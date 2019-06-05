import React, { Component } from 'React';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
//import console = require('console');

class HouseHoldMemberList extends Component {
    state={
        a:[],
        Nodata: '',
    }

    render() {
        const { HHName, HHNumber, uid } = this.props.HouseHoldName;
       
         return (
            HHNumber === 'No Record Found' ?
            <View style={styles.projectRow} >
                <View style={styles.projectText} >
                <Text style={styles.itemName}>
                            {/* {this.state.Nodata} */}
                            No Record Found
                        </Text>
                </View>
            </View>
            :
            <ScrollView>
            <View style={styles.projectRow} >
                <View style={styles.projectText} >
                    <Text style={styles.itemName}>{"\t"} {HHName}</Text>  
                </View>

                <View style={styles.projectTextchild1}>
                    <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('HouseHoldEdit', { Houseno: this.props.HouseHoldName }) }}>
                        <View>
                            <Icon
                                name="edit"
                                size={30}
                                style={styles.moreIcon}
                            />
                            <Text style={styles.moreIcon}  >Edit</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.projectTextchild2}>
                    <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('HouseholdView', { HouseHold: this.props.HouseHoldName }) }}>
                        <View>
                            <Icon
                                name="eye"
                                size={30}
                                style={styles.moreIcon}
                            />
                            <Text style={styles.moreIcon} >View</Text>
                        </View>
                    </TouchableWithoutFeedback>

                </View>

            </View>
            </ScrollView>
        );
    }
}

const
    styles = StyleSheet.create({
        projectText: {
            flex: 0.7,
            flexDirection: 'column'
        },
        projectTextchild1: {
            flex: 0.2,
            flexDirection: 'column'
        },
        projectTextchild2: {
            flex: 0.1,
            flexDirection: 'column'
        },
        projectRow: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: 15,
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
            color: "#f7c744"
        }
    });

export default withNavigation(HouseHoldMemberList);
