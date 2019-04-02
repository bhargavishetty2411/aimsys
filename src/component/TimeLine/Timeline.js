import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Timeline extends Component {
    static navigationOptions = {
        title: 'Timeline',
        headerStyle: {
            backgroundColor: '#355870',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            
            <View style={styles.container}>
            
                <View style={styles.bottom}>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner}
                        onPress={() => this.props.navigation.navigate('Food')}
                        >
                            <View style={styles.bottomitemInner}>
                                <Text style={styles.bottomitemInnerContent}>Food Supplies</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} 
                        onPress={() => this.props.navigation.navigate('Health')}
                        >
                            <View style={styles.bottomitemInner}>
                                <Text style={styles.bottomitemInnerContent}>Healthcare Supplies</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} 
                        onPress={() => this.props.navigation.navigate('Attendance')}
                        >
                            <View style={styles.bottomitemInner}>
                                <Text style={styles.bottomitemInnerContent}>Attendance</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    bottom: {
        height: '50%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 3,
    },
    bottomitem: {
        width: '50%',
        height: '50%',
        padding: 3,
    },
    bottomitemInner: {
        flex: 1,
        backgroundColor: '#395870',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bottomitemInnerContent: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        padding: 5,
    }

});