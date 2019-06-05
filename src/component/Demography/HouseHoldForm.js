import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { TextInput, View, Picker, StyleSheet } from 'react-native';
import { Radio, Label, Text } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { HouseholdUpdate, HouseholdCreate } from '../../actions';

class HouseHoldForm extends Component {
  static navigationOptions = {
        title: 'Member Registration',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
   
    state = {
        Designation: '',
        myNumber: '',
    }
    

    numeric(e) {
        const val = e;
        console.log('value ', val);

        this.props.HouseholdUpdate({ name: 'Phonenumber', value: val });


    }

    calFun(text) {
        this.props.HouseholdUpdate({ name: 'Designation', value: text });
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.mainview}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            placeholderTextColor='#355870'
                            placeholder="Enter The HouseHold MemberName"
                            autoCorrect={false}
                            keyboardType='default'
                            onChangeText={value => this.props.HouseholdUpdate({ name: 'HHName', value })}
                            value={this.props.HHName}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <DatePicker
                            style={styles.dateblock}
                           
                            customStyles={{ dateInput: { borderWidth: 0 } }}
                            mode="date"
                            placeholderTextColor='#355870'
                            placeholder="Enter Birth Date"
                            format="YYYY-MM-DD"
                            date={this.props.DOB}
                            maxDate={new Date()}
                            onDateChange={value => this.props.HouseholdUpdate({ name: 'DOB', value })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Label style={{ marginLeft: 22 }}>Gender</Label>
                        <Text style={{ marginLeft: 40, color: '#355870', fontSize: 16 }}>Male{'\t'}</Text>
                        <Radio
                            onPress={() => this.props.HouseholdUpdate({ name: 'sex', value: 'Male' })}
                            selected={this.props.sex === 'Male'}
                        />
                        <Text style={{ marginLeft: 10, color: '#355870', fontSize: 16 }}>Female{'\t'}</Text>
                        <Radio
                            onPress={() => this.props.HouseholdUpdate({ name: 'sex', value: 'Female' })}
                            selected={this.props.sex === 'Female'}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.props.LiteracyRate}
                            style={{ height: 50, width: 350 }}
                            onValueChange={(value) => this.props.HouseholdUpdate({ name: 'LiteracyRate', value })}
                        >
                            <Picker.Item label="Select Qualification " value="" />
                            <Picker.Item label="No Education" value="illiterate" />
                            <Picker.Item label="Primary " value="Primary" />
                            <Picker.Item label="SSLC" value='SSLC' />
                            <Picker.Item label="PUC" value='PUC' />
                            <Picker.Item label="Graduvate" value='Graduvated' />
                        </Picker>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            placeholderTextColor='#355870'
                            placeholder="Enter The Caste"
                            autoCorrect={false}
                            label="Caste"
                            onChangeText={value => this.props.HouseholdUpdate({ name: 'Caste', value })}
                            value={this.props.Caste}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Label style={{ marginLeft: 22 }}>Status</Label>
                        <Text style={{ marginLeft: 40, color: '#355870', fontSize: 16 }}>Married</Text>
                        <Radio
                            onPress={() => this.props.HouseholdUpdate({ name: 'Status', value: 'Married' })}
                            selected={this.props.Status === 'Married'}
                        />
                        <Text style={{ marginLeft: 10, color: '#355870', fontSize: 16 }}>UnMarried</Text>
                        <Radio
                            onPress={() => this.props.HouseholdUpdate({ name: 'Status', value: 'UnMarried' })}
                            selected={this.props.Status === 'UnMarried'}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Label style={{ marginLeft: 22 }}>Disability</Label>
                        <Text style={{ marginLeft: 40, color: '#355870', fontSize: 16 }}>Yes</Text>
                        <Radio
                            onPress={() => this.props.HouseholdUpdate({ name: 'Disability', value: 'Yes' })}
                            selected={this.props.Disability === 'Yes'}
                        />
                        <Text style={{ marginLeft: 10, color: '#355870', fontSize: 16 }}>No</Text>
                        <Radio
                            onPress={() => this.props.HouseholdUpdate({ name: 'Disability', value: 'No' })}
                            selected={this.props.Disability === 'No'}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.props.Designation}
                            style={{ height: 50, width: 350 }}
                            onValueChange={this.calFun.bind(this)}
                        >
                            <Picker.Item label="Select Occupation" value="" />
                            <Picker.Item label="UnEmployed" value="UnEmployed" />
                            <Picker.Item label="Agriculture" value="Agriculture" />
                            <Picker.Item label="HouseWife" value="HouseWife" />
                            <Picker.Item label="Teacher" value="Teacher" />
                            <Picker.Item label="Poultry" value="Poultry" />
                            <Picker.Item label="Other" value="Other" />
                        </Picker>
                    </View>
                    <View style={styles.inputContainer}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.props.Disease1}
                            style={{ height: 50, width: 350 }}
                            onValueChange={(value) => this.props.HouseholdUpdate({ name: 'Disease1', value })}
                        >
                            <Picker.Item label="Select Disease" value="" />
                            <Picker.Item label="Diabites" value="Diabites" />
                            <Picker.Item label="HIV" value="HIV" />
                            <Picker.Item label="Asthama" value='Asthama' />
                            <Picker.Item label="No disease" value=' No disease' />

                        </Picker>
                    </View>


                    <View style={styles.inputContainer}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.props.Disease2}
                            style={{ height: 50, width: 350 }}
                            onValueChange={(value) => this.props.HouseholdUpdate({ name: 'Disease2', value })}
                        >
                            <Picker.Item label="Select Disease" value="" />
                            <Picker.Item label="Diabites" value="Diabites" />
                            <Picker.Item label="HIV" value="HIV" />
                            <Picker.Item label="Asthama" value='Asthama' />
                            <Picker.Item label="No disease" value=' No disease' />
                        </Picker>
                    </View>
                    <View style={styles.inputContainer}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.props.Disease3}
                            style={{ height: 50, width: 350 }}
                            onValueChange={(value) => this.props.HouseholdUpdate({ name: 'Disease3', value })}
                        >
                            <Picker.Item label="Select Disease" value="" />
                            <Picker.Item label="Diabites" value="Diabites" />
                            <Picker.Item label="HIV" value="HIV" />
                            <Picker.Item label="Asthama" value='Asthama' />
                            <Picker.Item label="No disease" value=' No disease' />
                        </Picker>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            keyboardType="phone-pad"
                            placeholderTextColor='#355870'
                            placeholder="Enter Phone Number"
                            autoCorrect={false}
                            label=" Phone Number"
                            onChangeText={this.numeric.bind(this)}
                            value={this.props.Phonenumber}
                            maxLength={10}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <DatePicker
                            style={styles.dateblock}
                            customStyles={{ dateInput: { borderWidth: 0 } }}
                            placeholderTextColor='#355870'
                            placeholder="Date of Entry"
                            mode="date"
                            format="YYYY-MM-DD"
                            date={this.props.DOE}
                            maxDate={new Date()}
                            onDateChange={value => this.props.HouseholdUpdate({ name: 'DOE', value })}
                        />
                    </View>

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
        width: 400,
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
    

    const { HHName, DOB, Caste, sex, Status, Designation, Phonenumber, Disability, LiteracyRate, Address, Disease1, Disease2, Disease3, DOE } = state.HouseHoldForm;
        return { HHName, DOB, Caste, sex, Designation, Status, Phonenumber, Disability, LiteracyRate, Address, Disease1, Disease2, Disease3, DOE };

}
export default connect(mapStateToProps, { HouseholdUpdate, HouseholdCreate })(HouseHoldForm);