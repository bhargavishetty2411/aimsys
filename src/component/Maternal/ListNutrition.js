import firebase from 'firebase';
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListNutrition extends Component {
    state = {
        a: []
    }

    componentWillMount() {
        const { CName } = this.props.nutrition;
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
        const { CName } = this.props.nutrition;
        return (
            CName === 'No Record Found' ?
                <View style={styles.projectRow} >
                    <View style={styles.projectText} >
                        <Text style={styles.itemName}>
                            {CName}
                        </Text>
                    </View>
                </View> :

                <View style={styles.projectRow} >
                    <View style={styles.projectText} >
                        <Text style={styles.itemName}>
                            {this.state.a}
                        </Text>
                        <Text style={styles.itemDetails}>Last edited {"\t"}
                            {`${Moment(this.props.child).fromNow()}`}
                        </Text>
                    </View>

                    <View style={styles.projectTextchild1}>
                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('NutritionView', { nutrition: this.props.nutrition }) }}>
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
                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('NutritionEditForm', { nutrition: this.props.nutrition }) }}>
                            <View>
                                <Icon
                                    name="edit"
                                    size={30}
                                    style={styles.moreIcon}
                                />
                                <Text style={styles.moreIcon} >Edit</Text>
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
            flexDirection: 'column',
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

export default withNavigation(ListNutrition);