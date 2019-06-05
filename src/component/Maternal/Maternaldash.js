/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class MaternalDash extends Component {
    static navigationOptions = {
        title: 'Maternal',
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
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('ChildTab')} >
                            <View>
                                <Image style={styles.icon} source={require('../../images/mal_childregistration.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('InjectionTab')}  >
                            <View>
                                <Image style={styles.icon} source={require('../../images/mal_injectionrecords.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('NutritionTab')} >
                            <View>
                                <Image style={styles.icon} source={require('../../images/mal_childnutrition.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('InjectionNotification')} >
                            <View>
                                <Image style={styles.icon} source={require('../../images/mal_notification.png')} />
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
        height: '55%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 3,
    },
    bottomitem: {
        width: '50%',
        height: '50%',
        padding: 8
        ,
    },
    bottomitemInner: {
        flex: 1,
        backgroundColor: '#275DAD',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bottomitemInnerContent: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        padding: 5,
    },

    menuBox: {
        backgroundColor: '#275DAD',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12
    },
    icon: {
        width: 200,
        height: 200,
    },
    info: {
        fontSize: 22,
        color: '#696969',
    },

});
export { MaternalDash };
