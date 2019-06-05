import React, { Component } from 'react';
import { CardItem, Button } from 'native-base';
import { View, StyleSheet, Text, Dimensions, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { pregnancyUpdate, PregnancyCreate } from '../../actions';
import { Card } from '../Common';
import PregnancyForm from './PregnancyForm';

class Pregnancy extends Component {
    static navigationOptions = {
        title: 'Demography',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    onButtonPress() {
        console.log('clicked');

        const { HHNumber, PregnantName, NPregnant, LPerioddate, FirstDose, SecondDose, DeliveryDate, Dplace, FirstWeightDate, Nchild } = this.props;
        if (HHNumber === undefined || PregnantName === undefined || NPregnant === undefined || LPerioddate === undefined || DeliveryDate === undefined) {
            Alert.alert(
                'Enter All The Details',
                'Record Not Inserted');
        }
        else {

            this.props.PregnancyCreate({ HHNumber, PregnantName, NPregnant, LPerioddate, FirstDose, SecondDose, DeliveryDate, Dplace, FirstWeightDate, Nchild });
        }
    }
    render() {

        return (
            <ScrollView>
                <View>
                    <Card>
                        <PregnancyForm {...this.props} />
                        <CardItem>

                        <Button
                                block success
                                style={{ width: Dimensions.get('window').width - 40, marginLeft: 0, marginRight: 0 }}
                                onPress={this.onButtonPress.bind(this)}>
                                <Text style={styles.loginText}>Add</Text>
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
        width: 395,
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
    const { HHNumber, PregnantName, PhoneNumber, NPregnant, LPerioddate, FirstDose, SecondDose, DeliveryDate, Dplace, FirstWeightDate, Nchild } = state.PregnancyForm;
    return { HHNumber, PregnantName, PhoneNumber, NPregnant, LPerioddate, FirstDose, SecondDose, DeliveryDate, Dplace, FirstWeightDate, Nchild };
};
export default connect(mapStateToProps, { pregnancyUpdate, PregnancyCreate })(Pregnancy); 