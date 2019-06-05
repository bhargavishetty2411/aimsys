/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { statusCheck } from '../../actions';

class InfrastructureDash extends Component {
    static navigationOptions = {
        title: 'Infrastructure'
    };

    componentWillMount() {
        this.props.statusCheck();
    }

    navi() {
        this.props.navigation.navigate('loc');
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.bottom}>
                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('buildingPicture')} >
                            <View>
                                <Image style={styles.icon} source={require('../../images/infra_buildingimage.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('buildingStatus')}  >
                            <View>
                                <Image style={styles.icon} source={require('../../images/infra_buildingstatus.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('Facility')} >
                            <View>
                                <Image style={styles.icon} source={require('../../images/infra_facilities.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('AnganwadiLocation')} >
                            <View>
                            <Image style={styles.icon} source={require('../../images/infra_Location.png')} />
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

export default connect(null, { statusCheck })(InfrastructureDash);
