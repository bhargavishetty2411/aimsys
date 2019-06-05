import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { CardSection } from '../Common';
import { withNavigation } from 'react-navigation';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

class ListChild extends Component {
    render() {
        const { date } = this.props.img;
        return (
            date === 'No Record Found' ?
                <View style={styles.projectRow} >
                    <View style={styles.projectText} >
                        <Text style={styles.itemName}>
                            {date}
                        </Text>
                    </View>
                </View> :

                <View style={styles.projectRow} >
                    <View style={styles.projectText} >
                    <ScrollView>
                        <Text style={styles.itemName}>
                           {date}
                        </Text>
                        </ScrollView>
                        <Text style={styles.itemDetails}>Last edited {"\t"}
                            {`${Moment(this.props.child).fromNow()}`}
                        </Text>
                    </View>
                    <View style={styles.projectTextchild1}>
                        <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('ImageView', { img: this.props.img }); }}>
                            <View>
                                <Icon
                                    name="eye"
                                    size={30}
                                    style={styles.moreIcon}
                                />
                                <Text style={styles.moreIcon}>View</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                  
                </View>
        );
    }
}

const styles = StyleSheet.create({
        projectText: {
            flex: 0.7,
            flexDirection: 'column'
        },
        projectTextchild1: {
            flex: 0.3,
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
            color: '#275DAD',
           // textAlign:'center'
        },
        itemDetails: {
            fontSize: 12,
            color: '#275DAD',
        },
        moreContainer: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        moreIcon: {
            color: '#275DAD'
        }
    });

export default withNavigation(ListChild);
