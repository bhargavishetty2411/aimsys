import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet, CheckBox } from 'react-native';
import { CardSection } from '../Common';
import { withNavigation } from 'react-navigation';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';


class ListAttendance extends Component {
    state = {
        checked: false,

    }
    callattd()
    {
        console.log('datta',!this.state.checked);
        this.setState({ checked: !this.state.checked });
      
    }
    render() {

        const { ChildName } = this.props.attendance;
        return (
            ChildName === 'No Record Found' ?
                <View style={styles.projectRow} >
                    <View style={styles.projectText} >
                        <Text style={styles.itemName}>
                            {ChildName}
                        </Text>
                    </View>
                </View> :
                <View style={styles.projectRow} >

                    <View style={styles.projectText} >



                        <Text style={styles.itemName}>Report of {"\t"} {ChildName}
                        </Text>

                        <Text style={styles.itemDetails}>Last edited {"\t"}
                            {`${Moment(this.props.attendance).fromNow()}`}
                        </Text>
                    </View>

                    <View style={styles.projectTextchild1}>
                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('AttendanceView', { attendance: this.props.attendance }) }}>
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

                    <View style={styles.projectTextchild2}>
                        <CheckBox
                            value={this.state.checked}
                            onValueChange={this.callattd.bind(this)}
                        />

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


export default withNavigation(ListAttendance);
