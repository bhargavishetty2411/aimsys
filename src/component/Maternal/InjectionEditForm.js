import firebase from 'firebase';
import _ from 'lodash';
import React, { Component } from 'react';
import { Alert, StyleSheet, Picker, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Label } from 'native-base';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { InjectionUpdate, InjectionSave, InjectionDelete } from '../../actions/InjectionAction';
import { CardSection, Button, Confirm } from '../Common';
import { ScrollView } from 'react-native-gesture-handler';

class InjectionEditForm extends Component {
    state = {
        snapshotList: {},
        scores: {},
        showModal: false,
    };
    static navigationOptions = {
        title: 'Immunization Update',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    componentWillMount() {
        _.each(this.props.navigation.state.params.injection, (value, name) => {
            this.props.InjectionUpdate({ name, value });
            this.search(this.props.navigation.state.params.injection.HNumber);
        });

    }

    onButtonPress() {
        const { HNumber, CName, update, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2 } = this.props;
        if (update === 'bcg') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, BCG);
        } else if (update === 'polio') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, poliodate);
        } else if (update === 'hepatitis') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, hepa);
        } else if (update === 'dpt1') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, DPT1);
        } else if (update === 'hepatitis1') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, hepa1);
        } else if (update === 'opv1') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, OPV1);
        } else if (update === 'dpt2') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, DPT2);
        } else if (update === 'hepatitis2') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, hepa2);
        } else if (update === 'opv2') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, OPV2);
        } else if (update === 'dpt3') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, DPT3);
        } else if (update === 'hepatitis3') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, hepa3);
        } else if (update === 'opv3') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, OPV3);
        } else if (update === 'dadara1') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, dadara1);
        } else if (update === 'nutrition1') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, nutri1);
        } else if (update === 'dptbooster') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, dptbooster);
        } else if (update === 'dadara2') {
            this.props.InjectionSave({ HNumber, uid: this.props.navigation.state.params.injection.uid }, update, dadara2);
        }
        Alert.alert(
            'Updated Successfully',

        );
    }

    onAccept() {
        const navigate = this.props.navigation;
        this.props.InjectionDelete({ uid: this.props.navigation.state.params.injection.uid }, navigate);
        this.setState({ showModal: false });
    }
    onDecline() {
        this.setState({ showModal: false });
    }

    // eslint-disable-next-line react/sort-comp
    search(HNumber) {
        let awcid = 0;
        const database = firebase.database();
        const { currentUser } = firebase.auth();
        console.log('Hnumber', HNumber);
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
                    database.ref(`/users/${awcid}/Maternal/ChildRegistration`)
                        .orderByChild('HNumber').equalTo(HNumber)
                        .once('value', snapshot1 => {
                            if (snapshot1.val()) {
                                this.setState({ scores: snapshot1.val() });
                            } else {
                                this.setState({ scores: { noData: { CName: 'No Data' } } });
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
        console.log('year', scores);
        var keys = Object.keys(scores);
        for (let i = 0; i < keys.length; i++) {
            var k = keys[i];
            var Name = scores[k].CName;
            pickerArr.push(<Picker.Item label={Name} value={k} />);
            count++;
        }
        if (count == 0) { pickerArr.push(<Picker.Item label={'No Data'} value={'No Data'} />); }

        return pickerArr;
    }

    calFun(text) {
        this.props.InjectionUpdate({ name: 'HNumber', value: text });
    }

    render() {
        return (
            //  <InjectionForm />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.mainview}>
                        <Label style={{ marginLeft: 15 }}>HouseHold Number</Label>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="HouseHold Number"
                                keyboardType='numeric'
                                underlineColorAndroid='transparent'
                                autoCorrect={false}
                                placeholderTextColor='#355870'
                               // onChangeText={(value) => this.props.InjectionUpdate({ name: 'HNumber', value })}
                               onChangeText={this.calFun.bind(this)}
                               value={this.props.HNumber}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Picker
                               selectedValue={this.props.CName}
                                style={styles.picker}
                                itemStyle={styles.pickerItem}
                                selectedValue={this.props.CName}
                                onValueChange={(value) => this.props.InjectionUpdate({ name: 'CName', value })}
                            >
                                <Picker.Item label='Select Child Name' value='default' />
                                {this.getPickerElements()}
                            </Picker>
                        </View>


                        <View style={styles.inputContainer}>
                            <Picker
                                style={styles.picker} itemStyle={styles.pickerItem}
                                selectedValue={this.props.update}
                                onValueChange={(value) =>
                                    this.props.InjectionUpdate({ name: 'update', value })
                                }
                            >
                                <Picker.Item label="Select a Vacination" value="" />
                                <Picker.Item label="Polio After birth" value="polio" />
                                <Picker.Item label="Hepatitis B0" value="hepatitis" />
                                <Picker.Item label="BCG" value="bcg" />
                                <Picker.Item label="DPT1" value="dpt1" />
                                <Picker.Item label="Hepatitis B1" value="hepatitis1" />
                                <Picker.Item label="OPV1" value="opv1" />
                                <Picker.Item label="DPT2" value="dpt2" />
                                <Picker.Item label="Hepatitis B2" value="hepatitis2" />
                                <Picker.Item label="OPV2" value="opv2" />
                                <Picker.Item label="DPT3" value="dpt3" />
                                <Picker.Item label="Hepatitis B3" value="hepatitis3" />
                                <Picker.Item label="OPV3" value="opv3" />
                                <Picker.Item label="Dadara1" value="dadara1" />
                                <Picker.Item label="Nutririon 1st" value="nutrition1" />
                                <Picker.Item label="DPTBooster" value="dptbooster" />
                                <Picker.Item label="Dadara2" value="dadara2" />
                            </Picker>
                        </View>

                        {
                            this.props.update === 'polio' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker
                                        style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="Enter Polio date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'poliodate', value })}
                                        date={this.props.poliodate}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'hepatitis' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter Hepatitis date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'hepa', value })}
                                        date={this.props.hepa}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'bcg' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter BCG date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'BCG', value })}
                                        date={this.props.BCG}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'dpt1' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter DPT1 date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'DPT1', value })}
                                        date={this.props.DPT1}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'hepatitis1' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter Hepatitis1 date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'hepa1', value })}
                                        date={this.props.hepa1}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'opv1' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter OPV1 date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'OPV1', value })}
                                        date={this.props.OPV1}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'dpt2' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter DPT2 date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'DPT2', value })}
                                        date={this.props.DPT2}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'hepatitis2' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter Hepatitis2 date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'hepa2', value })}
                                        date={this.props.hepa2}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'opv2' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter OPV2 date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'OPV2', value })}
                                        date={this.props.OPV2}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'dpt3' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter DPT3 date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'DPT3', value })}
                                        date={this.props.DPT3}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'hepatitis3' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter Hepatitis3 date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'hepa3', value })}
                                        date={this.props.hepa3}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'opv3' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter OPV3 date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'OPV3', value })}
                                        date={this.props.OPV3}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'dadara1' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter Dadara1 date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'dadara1', value })}
                                        date={this.props.dadara1}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'nutrition1' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter Nutrition1 date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'nutri1', value })}
                                        date={this.props.nutri1}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'dptbooster' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter dptbooster date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'dptbooster', value })}
                                        date={this.props.dptbooster}
                                    />
                                </View>
                                : null
                        }

                        {
                            this.props.update === 'dadara2' ?
                                <View style={styles.inputContainer}>
                                    <DatePicker style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        mode="date"
                                        round
                                        placeholder="enter Ddadara2 date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.InjectionUpdate({ name: 'dadara2', value })}
                                        date={this.props.dadara2}
                                    />
                                </View>
                                : null
                        }
                        <CardSection>
                            <Button onPress={this.onButtonPress.bind(this)}>ADD</Button>
                        </CardSection>
                        <CardSection>
                            <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>Delete</Button>
                        </CardSection>
                        <Confirm visible={this.state.showModal}
                            onAccept={this.onAccept.bind(this)}
                            onDecline={this.onDecline.bind(this)}
                        >
                            Are you sure you want to delete this?
                </Confirm>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

//                     <CardSection>
//                         <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
//                     </CardSection>
//                     <CardSection>
//                         <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>Delete</Button>
//                     </CardSection>
//                     <Confirm visible={this.state.showModal}
//                         onAccept={this.onAccept.bind(this)}
//                         onDecline={this.onDecline.bind(this)}
//                     >
//                         Are you sure you want to delete this?
//                 </Confirm>
//                 </Card>
//             </ScrollView>
//         );
//     }
// }

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

    const { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete, update } = state.injection;
    // console.log('inside edit form',HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete);
    return { HNumber, CName, DPickdob, poliodate, hepa, BCG, DPT1, hepa1, OPV1, DPT2, hepa2, OPV2, DPT3, hepa3, OPV3, dadara1, nutri1, dptbooster, dadara2, complete, update };
};

export default connect(mapStateToProps, { InjectionUpdate, InjectionSave, InjectionDelete })(InjectionEditForm);  
