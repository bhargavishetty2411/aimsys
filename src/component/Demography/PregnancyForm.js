import firebase from 'firebase';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import { View, Picker, StyleSheet, TextInput } from 'react-native';
import Datepicker from 'react-native-datepicker';

import { pregnancyUpdate } from '../../actions';

class PregnancyForm extends Component {
    state = {
        snapshotList: {},
        scores: {}
    };

    search (HHNumber) {
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
                      
                         database.ref(`/users/${awcid}/Demographic/HouseholdMember/${HHNumber}`)
                        // const query = db.orderByChild('HHNumber').equalTo(HHNumber);
                        .on('value', snapshot1 => {
                            if (snapshot1.val()) {

                                this.setState({ scores: snapshot1.val() });
                            } else {
                                this.setState({ scores: { noData: { HHName: 'No Data' } } });
                            }
                        });    
                    } else {
                        console.log('no user data');
                    }
                });
    }
    getPickerElements() {
        
        let count = 0;
        var pickerArr = [];
        var scores = this.state.scores;
        var keys = Object.keys(scores);
        console.log(keys);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            console.log('pregna', keys[i]);
            var gender = scores[k].sex;
            if (gender === 'Female') {
                var PregnantName = scores[k].HHName;
                pickerArr.push(<Picker.Item label={PregnantName} value={k} />);
                count++;
            }
        }
        if (count == 0)
            pickerArr.push(<Picker.Item label={"No Data"} value={"NoData"} />);

        return pickerArr;
    }
    calFun(text) {
        this.props.pregnancyUpdate({ prop: 'HHNumber', value: text });
        this.search(text);
    }
    render() {
       
        return (
            <View style={styles.container}>
                <View style={styles.mainview}>
                    <View style={styles.inputContainer}>
                        <TextInput
                         style={styles.inputs}
                            placeholder="Enter The HouseHold Number"
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            keyboardType='numeric'
                            placeholderTextColor='#355870'
                            value={this.props.HHNumber}
                            onChangeText={this.calFun.bind(this)}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.props.PregnantName}
                            onValueChange={(value) => this.props.pregnancyUpdate({ prop: 'PregnantName', value })}
                        >
                            <Picker.Item label='Select Pregnant Name' value='default' />
                            {this.getPickerElements()}
                        </Picker>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput 
                        style={styles.inputs}
                            placeholder="Enter Number of Pregnancies"
                            autoCorrect={false}
                            keyboardType='numeric'
                            value={this.props.NPregnant}
                            onChangeText={value => this.props.pregnancyUpdate({ prop: 'NPregnant', value })}
                        />
                    </View>

                    <View style={styles.inputContainer}>

                        <Datepicker
                         style={styles.dateblock}
                            customStyles={{ dateInput: { borderWidth: 0 } }}
                            mode="date"
                            placeholder="Last Peroid Date"
                            format="YYYY-MM-DD"
                            
                            date={this.props.LPerioddate}
                            onDateChange={value => this.props.pregnancyUpdate({ prop: 'LPerioddate', value })}
                        />
                    </View>

                    {/* <View style={styles.inputContainer}>
                        <Datepicker style={styles.dateblock}
                            customStyles={{ dateInput: { borderWidth: 0 } }}
                            mode="date"
                            minDate={new Date()}
                            placeholder="Enter 1st Dose"
                            format="YYYY-MM-DD"
                            date={this.props.FirstDose}
                            onDateChange={value => this.props.pregnancyUpdate({ prop: 'FirstDose', value })}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Datepicker style={styles.dateblock}
                            customStyles={{ dateInput: { borderWidth: 0 } }}
                            mode="date"
                            maxDate={new Date()}
                            placeholder="Enter Second Dose"
                            format="YYYY-MM-DD"
                            date={this.props.SecondDose}
                            onDateChange={value => this.props.pregnancyUpdate({ prop: 'SecondDose', value })}
                        />
                    </View> */}

                    <View style={styles.inputContainer}>
                        <Datepicker
                         style={styles.dateblock}
                            customStyles={{ dateInput: { borderWidth: 0 } }}
                            mode="date"
                            // minDate={new Date()}
                            placeholder="Expected Delivery Date"
                            format="YYYY-MM-DD"
                            date={this.props.DeliveryDate}
                            onDateChange={value => this.props.pregnancyUpdate({ prop: 'DeliveryDate', value })}
                        />
                    </View>

                    {/* <View style={styles.inputContainer}>
                        <Datepicker style={styles.dateblock}
                            customStyles={{ dateInput: { borderWidth: 0 } }}
                            placeholder="Date of Birth"
                            //style={{ marginLeft: 63, padding: 5 }}
                            mode="date"
                            placeholder="First Weight Date"
                            format="YYYY-MM-DD"
                            date={this.props.FirstWeightDate}
                            onDateChange={value => this.props.pregnancyUpdate({ prop: 'FirstWeightDate', value })}
                        />
                    </View> */}


                </View>
            </View>
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
    const { HHNumber, PregnantName, NPregnant, LPerioddate ,DeliveryDate, FirstDose, SecondDose } = state.PregnancyForm;
    return { HHNumber, PregnantName, NPregnant, LPerioddate, FirstDose ,DeliveryDate, SecondDose };
};

export default connect(mapStateToProps, { pregnancyUpdate })(PregnancyForm);
