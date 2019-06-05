import React, { Component } from 'React';
import { Text, TouchableWithoutFeedback, View, StyleSheet, ScrollView } from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';


class HouseHoldListItem extends Component {
    // state = {
    //     a: [],
    //     Nodata: '',
    // }
    
    render() {
        const { HHNumber, HHName } = this.props.HouseHold;

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
                
                <View style={styles.projectRow} >
                    <View style={styles.projectText} >
                        <View style={styles.projectTextchild1}>
                            <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('HouseView', { HouseHold: this.props.HouseHold }) }}>
                                <View>
                                    <Text style={styles.itemName}>{"\t"} {HHNumber}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                    <View style={styles.projectTextchild1}>
                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('HouseHoldMemberName', { HouseHold: this.props.HouseHold }) }}>
                            <View>
                                <Icon
                                    name="eye"
                                    size={30}
                                    style={styles.moreIcon}
                                />
                                <Text style={styles.moreIcon}  >View</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.projectTextchild2}>
                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('HouseHold', { HouseHold: this.props.HouseHold }) }}>
                            <View>
                                <Icon
                                    name="edit"
                                    size={30}
                                    style={styles.moreIcon}
                                />
                                <Text style={styles.moreIcon} >Add</Text>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>

                </View>
               
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

export default withNavigation(HouseHoldListItem);