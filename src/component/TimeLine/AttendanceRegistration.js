import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Radio, Text, Label } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { AttendanceUpdate } from '../../actions/AttendanceAction';

class AttendanceRegistration extends Component {
    // eslint-disable-next-line react/sort-comp
    state = {
        snapshotList: {},
        scores: {},

    };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mainview}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="Enter Child Name"
                                autoCorrect={false}
                                onChangeText={value => this.props.AttendanceUpdate({ name: 'ChildName', value })}
                                value={this.props.ChildName}
                            />
                        </View>


                        <View style={styles.inputContainer}>
                            <Label style={{ marginLeft: 22 }}>Gender</Label>
                            <Text style={{ marginLeft: 40, color: '#355870', fontSize: 16 }}> Male {'\t'}</Text>

                            <Radio
                                onPress={() => this.props.AttendanceUpdate({ name: 'gender', value: 'Male' })}
                                selected={this.props.gender === 'Male'}

                            />
                            <Text style={{ marginLeft: 10, color: '#355870', fontSize: 16 }}>Female {'\t'}</Text>
                            <Radio
                                onPress={() => this.props.AttendanceUpdate({ name: 'gender', value: 'Female' })}
                                selected={this.props.gender === 'Female'}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <DatePicker style={styles.dateblock}
                                customStyles={{ dateInput: { borderWidth: 0 } }}
                                placeholder="Date of Birth"
                                //style={{ marginLeft: 63, padding: 5 }}
                                mode="date"
                                
                                placeholder="Enter Birth Date"
                                format="YYYY-MM-DD"
                                onDateChange={value => this.props.AttendanceUpdate({ name: 'Dob', value })}
                                date={this.props.Dob}
                            />
                        </View>


                        <View style={styles.inputContainer}>
                            <DatePicker style={styles.dateblock}
                                customStyles={{ dateInput: { borderWidth: 0 } }}
                                placeholder="Registered Date"
                                mode="date"
                                round
                                maxDate={new Date()}
                                placeholder="Enter Registered date"
                                format="YYYY-MM-DD"
                                onDateChange={value => this.props.AttendanceUpdate({ name: 'Regdate', value })}
                                date={this.props.Regdate}
                            />
                        </View>

                    </View>
                </View>
         
        );
    }
}

// const styles = {

//     textStyle: {
//         padding: 5,
//         fontSize: 18,
//     },
//     buttonStyle: {
//         alignItems: 'center'
//     },


// };
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

    const { ChildName, gender, Dob, Regdate } = state.attendance;
    //console.log('registration  mother id form ', CMotherId);
    return { ChildName, gender, Dob, Regdate };
};

export default connect(mapStateToProps, { AttendanceUpdate })(AttendanceRegistration);
