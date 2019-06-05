import React, { Component } from 'react';
import { StyleSheet, Dimensions, ScrollView, Alert, Text } from 'react-native';
import { CardSection, Card } from '../Common';
import { connect } from 'react-redux';
import { NutritionUpdate, NutritionCreate } from '../../actions/NutritionAction';
import ChildNutritionForm from './ChildNutritionForm';
import { CardItem, Button } from 'native-base';


class ChildNutrition extends Component {

    constructor() {
        super();
        this.state = {
        };
    }

    onButtonPress() {
        const { HNumber, CName, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli } = this.props;
        if (HNumber === undefined || CName === undefined || weight === undefined || under === undefined || wast === undefined || stunt === undefined || lowbirth === undefined || breastfeed === undefined || exfeed === undefined || cfeed === undefined || ideli === undefined) {
            Alert.alert(
                'Enter all the details',
                'record not inserted');
        } else {
            this.props.NutritionCreate({ HNumber, CName, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli });
            Alert.alert(
                'Inserted Successfully',
            );
        }
     }

    render() {
        return (
            <ScrollView>
                <Card>
                    <ChildNutritionForm {...this.props} />
                    <CardItem>
                    <Button
                     block success
                     style={{
                         width: Dimensions.get('window').width - 40,
                         marginLeft: 0,
                         marginRight: 0
                     }} 
                   onPress={this.onButtonPress.bind(this)}>
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
    const { HNumber, CName, Age, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli } = state.nutrition;
    console.log('Age here', Age);
    return { HNumber, CName, Age, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli };
};

export default connect(mapStateToProps, {
    NutritionUpdate, NutritionCreate,
})(ChildNutrition);
