import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import {
    Container,
    Content,
    InputGroup,
    Button,
    CheckBox,
    List,
    Body,
    Card,
    Form,
    Input,
    Label,
    ActionSheet
} from 'native-base';
import { withNavigation } from 'react-navigation';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

class DailyUsageRequestListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            Request_Status,
            nutritious_food,
            protien_food,
            oil,
            jaggery,
            chilli,
            egg,
            salt,
            grams,
            mustard_seeds,
            amalice_rich,
            green_gram,
            food_provided_today,
            DPickdobStock
        } = this.props.child;

        return (
            <View>
                {DPickdobStock !== 'No Records Found' ? (
                    <View style={styles.projectRow}>
                        <View style={styles.projectText}>
                            <Text style={styles.itemName}>
                                Request of {'\t'}
                                {DPickdobStock}
                            </Text>
                            <Text style={styles.itemDetails}>
                                Last edited {'\t'}
                                {`${Moment(this.props.child).fromNow()}`}
                            </Text>
                        </View>

                        <View style={styles.projectTextchild1}>
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    this.props.navigation.navigate(
                                        'DailyUsageRequestViewOption',
                                        { child: this.props.child }
                                    );
                                }}
                            >
                                <View>
                                    <Icon name='eye' size={30} style={styles.moreIcon} />
                                    <Text style={styles.moreIcon}>View</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={styles.projectTextchild2}>
                        {(Request_Status===0)?
                            <View style={styles.projectTextchild2element2}>
                                <Text style={styles.projectTextchild2subelement}>PENDING</Text>
                            </View>:
                             <View style={styles.projectTextchild2element1}>
                             <Text style={styles.projectTextchild2subelement}>APPROVED</Text>
                         </View>
                        }
                        </View>
                    </View>
                ) : (
                        <View style={styles.pt}>
                            <Text style={styles.moreContainer}>
                                No records found please try again
            </Text>
                        </View>
                    )}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    projectTextchild2element1: {
        height: 40,
        width: 120,
        marginTop: 10,
        backgroundColor: 'green',
        borderRadius: 100/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    projectTextchild2element2: {
        height: 40,
        width: 120,
        marginTop: 10,
        backgroundColor: 'red',
        borderRadius: 100/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    projectTextchild2subelement:{
        color: 'white'
    },
    pt: {
        flex: 1
    },
    projectText: {
        flex: 0.5,
        flexDirection: 'column'
    },
    projectTextchild1: {
        flex: 0.2,
        flexDirection: 'column'
    },
    projectTextchild2: {
        flex: 0.3,
        flexDirection: 'column'
    },

    projectRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 15
    },

    itemName: {
        fontSize: 18,
        color: '#4A90E2'
    },

    itemDetails: {
        fontSize: 12,
        color: '#BBBBBB'
    },

    moreContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    moreIcon: {
        color: '#275DAD'
    }
});

export default withNavigation(DailyUsageRequestListItem);
