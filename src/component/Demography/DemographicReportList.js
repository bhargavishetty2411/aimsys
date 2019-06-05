import React, { Component } from 'React';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';


class DemographicReportList extends Component {
    static navigationOptions = {
        title: 'Member Infomation',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    state = {
        a: [],
        aa: '',
        PhoneNumber: '',
        Nodata: '',
    }


    render() {
        const { HHName } = this.props.HouseHold;
        return (
            HHName === 'No Record Found' ?
            
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
                        <Text style={styles.itemName}>  {HHName}
                        </Text>
                    </View>

                    <View style={styles.projectTextchild1}>
                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('HouseholdView', { HouseHold: this.props.HouseHold }); }}>
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
        );
    }
}

const
    styles = StyleSheet.create({
        projectText: {
            flex: 0.9,
            flexDirection: 'column'
        },
        projectTextchild1: {
            flex: 0.2,
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
            color: '#f7c744'

        }
    });

export default withNavigation(DemographicReportList);
