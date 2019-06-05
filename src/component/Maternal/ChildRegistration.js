
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardItem, Button } from 'native-base';
import { Card } from '../Common';
import { connect } from 'react-redux';
import ChildRegistrationForm from './ChildRegistrationForm';
import { childUpdate, childCreate, deliveryUpdate } from '../../actions/ChildAction';

class ChildRegistration extends Component {
    onButtonPress() {
        const { HNumber, CName, CMotherId, status, option, health, babytype, DPickdob, DPickregdate, placedied, ebenifits } = this.props;

        if (HNumber === '' || CName === '' || CMotherId === '' || status === '' || option === '' || health === '' || babytype === '' || DPickdob === '' || DPickregdate === '' || placedied === '') {
            Alert.alert(
                'Enter all the details',
                'record not inserted');
        } else { 
            if (status === 'Born') {
            console.log('data here', CMotherId);
            this.props.childCreate({ HNumber, CName, CMotherId, status, health, option, babytype, DPickdob, DPickregdate, ebenifits }, CMotherId);
            console.log('data here', CMotherId);
            Alert.alert(
                'Inserted Successfully',
            );
        } else {
            this.props.deliveryUpdate({ status, placedied }, CMotherId);
            Alert.alert(
                'Inserted Successfully',
            );
        }

        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container} style={{ backgroundColor: '#355870' }}>
                    <Card>
                        <ChildRegistrationForm {...this.props} edit='no' />

                        <CardItem>
                            <Button
                                block success
                                style={{
                                    width: Dimensions.get('window').width - 40,
                                    marginLeft: 0,
                                    marginRight: 0
                                }}
                                onPress={this.onButtonPress.bind(this)}
                            >
                                <Text style={styles.loginText}>ADD</Text>
                            </Button>
                        </CardItem>
                    </Card>
                </View>
            </ScrollView>
        );
    }
}
const resizeMode = 'center';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: '#808080',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 350,
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
    btnByRegister: {
        height: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: 350,
        backgroundColor: 'transparent'
    },
    loginButton: {
        backgroundColor: '#00b5ec',

        shadowColor: '#808080',
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    loginText: {
        color: 'white',
    },
    bgImage: {
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    textByRegister: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }
});

const mapStateToProps = (state) => {
    const { HNumber, CName, CMotherId, status, option, health, babytype, DPickdob, DPickregdate, placedied, ebenifits } = state.child;
    return { HNumber, CName, CMotherId, status, option, health, babytype, DPickdob, DPickregdate, placedied, ebenifits };
};

export default connect(mapStateToProps, {
    childUpdate, childCreate, deliveryUpdate
})(ChildRegistration);
