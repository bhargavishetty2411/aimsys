/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { anganwadiDetails } from '../actions';

class Workerdashboard extends Component {
    static navigationOptions = {
        title: 'Home',       
    };

    componentWillMount() {
        this.props.anganwadiDetails();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Swiper autoplay={true} style={styles.wrapper} >
                        <View style={styles.slide}>
                            <Image style={styles.iconswipe} source={require('../images/timeline.png')} />
                            <Text style={styles.text}>Timeline section allows you to add information about daily resource usage at the Anganwadi Centres</Text>
                        </View>

                        <View style={styles.slide}>
                            <Image style={styles.iconswipe} source={require('../images/demographics.png')} />
                            <Text style={styles.text}>Demographics section allows you to add information about the number of beneficiaries covered under ICDS</Text>
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.iconswipe} source={require('../images/malchild.png')} />
                            <Text style={styles.text}>Maternal and Child nutrition section allows you to add information about the Maternal and child nutrition beneficiaries </Text>
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.iconswipe} source={require('../images/infra.png')} />
                            <Text style={styles.text}>Infrastructure section allows you to add information about the infrastructure facilities available at the Anganwadi Centres</Text>
                        </View>
                    </Swiper>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('Timeline')} >
                            <View>
                                <Image style={styles.icon} source={require('../images/timeline.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('DemographyDash')}  >
                            <View>
                                <Image style={styles.icon} source={require('../images/demographics.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('MaternalDash')} >
                            <View>
                                <Image style={styles.icon} source={require('../images/malchild.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('infrastructure')} >
                            <View>
                                <Image style={styles.icon} source={require('../images/infra.png')} />
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
    top: {
        margin: 3,
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff',
    },
    profilepic: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#fff',
        backgroundColor: '#fff',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        backgroundColor: '#203546',
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
    iconswipe: {
        width: 130,
        height: 130,
    },
    info: {
        fontSize: 22,
        color: '#696969',
    },
    wrapper: {
        backgroundColor: 'transparent',
        padding: 200
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#275DAD',
        height: 300
    },
    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default connect(null, { anganwadiDetails })(Workerdashboard);
