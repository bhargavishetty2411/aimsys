import React, { Component } from 'react';
import { ScrollView, Alert, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import { CardSection, Card } from '../Common';
import { CardItem, Button } from 'native-base';
import { connect } from 'react-redux';
import InjectionForm from './InjectionForm';
import { InjectionUpdate, InjectionCreate } from '../../actions/InjectionAction';

class InjectionRecords extends Component {

    constructor() {
        super();
        this.state = {
            itemSelected: null,
            isHidden: false,
            itemSelected1: null,
            isHidden1: false
        };
    }

    onButtonPress() {
        const { HNumber, CName, update, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2 } = this.props;
        if (HNumber === undefined || CName === undefined) {
            Alert.alert(
                'Enter all the details',
                'record not inserted');
        } else if (update === 'polio') {
            this.props.InjectionCreate({ HNumber, CName }, update, poliodate);
            Alert.alert(
                'record  inserted');
        } else if (update === 'hepatitis') {
            this.props.InjectionCreate({ HNumber, CName }, update, hepa);
            Alert.alert(
                'record  inserted');
        } else if (update === 'bcg') {
            this.props.InjectionCreate({ HNumber, CName }, update, BCG);
            Alert.alert(
                'record  inserted');
        } else if (update === 'dpt1') {
            this.props.InjectionCreate({ HNumber, CName }, update, DPT1);
            Alert.alert(
                'record  inserted');
        } else if (update === 'hepatitis1') {
            this.props.InjectionCreate({ HNumber, CName }, update, hepa1);
            Alert.alert(
                'record  inserted');
        } else if (update === 'opv1') {
            this.props.InjectionCreate({ HNumber, CName }, update, OPV1);
            Alert.alert(
                'record  inserted');
        } else if (update === 'dpt2') {
            this.props.InjectionCreate({ HNumber, CName }, update, DPT2);
            Alert.alert(
                'record  inserted');
        } else if (update === 'hepatitis2') {
            this.props.InjectionCreate({ HNumber, CName }, update, hepa2);
            Alert.alert(
                'record  inserted');
        } else if (update === 'opv2') {
            this.props.InjectionCreate({ HNumber, CName }, update, OPV2);
            Alert.alert(
                'record  inserted');
        } else if (update === 'dpt3') {
            this.props.InjectionCreate({ HNumber, CName }, update, DPT3);
            Alert.alert(
                'record  inserted');
        } else if (update === 'hepatitis3') {
            this.props.InjectionCreate({ HNumber, CName }, update, hepa3);
            Alert.alert(
                'record  inserted');
        } else if (update === 'opv3') {
            this.props.InjectionCreate({ HNumber, CName }, update, OPV3);
            Alert.alert(
                'record  inserted');
        } else if (update === 'dadara1') {
            this.props.InjectionCreate({ HNumber, CName }, update, dadara1);
            Alert.alert(
                'record  inserted');
        } else if (update === 'nutrition1') {
            this.props.InjectionCreate({ HNumber, CName }, update, nutri1);
            Alert.alert(
                'record  inserted');
        } else if (update === 'dptbooster') {
            this.props.InjectionCreate({ HNumber, CName }, update, dptbooster);
            Alert.alert(
                'record  inserted');
        } else if (update === 'dadara2') {
            this.props.InjectionCreate({ HNumber, CName }, update, dadara2);
            Alert.alert(
                'record  inserted');
        }
    }

    render() {
        return (
            <ScrollView>

                <Card>
                    <InjectionForm {...this.props} />
                    <CardItem>
                        <Button
                            block success
                            style={{
                                width: Dimensions.get('window').width - 40,
                                marginLeft: 0,
                                marginRight: 0
                            }} onPress={this.onButtonPress.bind(this)}>
                            <Text style={styles.loginText}>ADD</Text>
                        </Button>

                    </CardItem>
                </Card>
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
        //
        // '#DCDCDC
        backgroundColor: '#275DAD',
    },

    mainview: {
        margin: 18
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        width: 350,
        height: 45,
        alignItems: 'center',
    },
    childtitle: {
        width: 350,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#275DAD',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputContainer: {

        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 350,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        color: '#275DAD'
    },
    dateblock: {
        width: '40%',
        height: 45,
        marginLeft: 30,
        borderWidth: 0,
        // marginLeft: 16,
        // borderBottomColor: '#FFFFFF',
        flex: 1,
        color: '#355870',
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    pickerItem: {
        color: '#1F1F1F'
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
        width: 300,
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
    btnByRegister: {
        height: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: 300,
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
    console.log(state);
    const { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete, update } = state.injection;
    return { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete, update };
};

export default connect(mapStateToProps, {
    InjectionUpdate, InjectionCreate,
})(InjectionRecords);
