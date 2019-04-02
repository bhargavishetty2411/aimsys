import React, { Component } from 'react';
import { View, Picker, TextInput, StyleSheet, Icon } from 'react-native';
import Card from 'native-base';
import { Radio, CardItem, Text, Label } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { childUpdate } from '../../actions/ChildAction';
import firebase from 'firebase';


class ChildRegistrationForm extends Component {
    // eslint-disable-next-line react/sort-comp
    state = {
        snapshotList: {},
        scores: {},
        pn: {},

    };

    search(HNumber) {
        this.setState({ searchStatus: 'no' });
        const { currentUser } = firebase.auth();
        const db = firebase.database().ref(`/users/${currentUser.uid}/Demographic/Pregnancy`);
        const query = db.orderByChild('HHNumber').equalTo(HNumber);
        query.on('value', snapshot => {
            if (snapshot.val()) {
                this.setState({ scores: snapshot.val() });
            } else {
                this.setState({ scores: { noData: { HHName: 'No Data', HHNumber: 0, PregnantName: 0 } } });
            }
        });
    }

    getPickerElements() {
        var a = {};
        var pp = 0;
        let p = 0;
        let hno = 0;
        let Name = '';
        const { currentUser } = firebase.auth();
        var pickerArr = [];
        var scores = this.state.scores;
        console.log('scores here', scores);
        var keys = Object.keys(scores);
        for (let i = 0; i < keys.length; i++) {
            let k = keys[i];
            hno = scores[k].HHNumber;
            Name = scores[k].PregnantName;
            const db = firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${hno}/${Name}`);
            db.on('value', snap => {
                if (snap.val()) {

                    pickerArr.push(<Picker.Item label={snap.val().HHName} value={k} />);
                }
                else {

                }
            });
        }

        return pickerArr;
    }

    calFun(text) {
        this.props.childUpdate({ name: 'HNumber', value: text });
        this.search(text);
    }
    calhealth(text) {
        this.props.childUpdate({ name: 'health', value: text });
        this.search(text);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mainview}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="HouseHold Number"
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            placeholderTextColor='#355870'
                            value={this.props.HNumber}
                            onChangeText={this.calFun.bind(this)}

                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Picker
                            style={styles.picker} itemStyle={styles.pickerItem}
                            selectedValue={this.props.CMotherId}
                            onValueChange={(value) => this.props.childUpdate({ name: 'CMotherId', value })}
                        >
                            <Picker.Item label='Select Mother Name' value='' />
                            {this.getPickerElements()}
                        </Picker>
                    </View>

                    <View style={styles.inputContainer}>
                        <Label style={{ marginLeft: 22 }}>Status</Label>
                        <Text style={{ marginLeft: 40, color: '#355870', fontSize: 16 }}> Born {'\t'}</Text>
                        <Radio
                            onPress={() => this.props.childUpdate({ name: 'status', value: 'Born' })}
                            selected={this.props.status === 'Born'}
                        />
                        <Text style={{ marginLeft: 10, color: '#355870', fontSize: 16 }}>Not Alive{'\t'}</Text>
                        <Radio
                            onPress={() => this.props.childUpdate({ name: 'status', value: 'Died' })}
                            selected={this.props.status === 'Died'}
                        />
                        <Text>{'\n'}</Text>
                    </View>


                    {
                        this.props.status === 'Born' ?

                            <View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.inputs}
                                        placeholder="Enter Child Name"
                                        autoCorrect={false}
                                        onChangeText={value => this.props.childUpdate({ name: 'CName', value })}
                                        value={this.props.CName}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Label style={{ marginLeft: 22 }}>Gender</Label>
                                    <Text style={{ marginLeft: 40, color: '#355870', fontSize: 16 }}> Male {'\t'}</Text>

                                    <Radio
                                        onPress={() => this.props.childUpdate({ name: 'option', value: 'Male' })}
                                        selected={this.props.option === 'Male'}

                                    />
                                    <Text style={{ marginLeft: 10, color: '#355870', fontSize: 16 }}>Female {'\t'}</Text>
                                    <Radio
                                        onPress={() => this.props.childUpdate({ name: 'option', value: 'Female' })}
                                        selected={this.props.option === 'Female'}
                                    />


                                </View>
                                <View style={styles.inputContainer}>
                                    <Label style={{ marginLeft: 22 }}>BabyType</Label>
                                    <Text style={{ marginLeft: 40, color: '#355870', fontSize: 16 }}> Single {'\t'}</Text>

                                    <Radio
                                        onPress={() => this.props.childUpdate({ name: 'babytype', value: 'single' })}
                                        selected={this.props.babytype === 'single'}

                                    />


                                    <Text style={{ marginLeft: 10, color: '#3c3c3c', fontSize: 16 }}>Twin {'\t'}</Text>

                                    <Radio
                                        onPress={() => this.props.childUpdate({ name: 'babytype', value: 'twin' })}
                                        selected={this.props.babytype === 'twin'}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                <Text> Health</Text>
                                    <Picker
                                        style={styles.picker} itemStyle={styles.pickerItem}
                                        selectedValue={this.props.health}
                                        onValueChange={(value) =>
                                            this.props.childUpdate({ name: 'health', value })
                                        }
                                    >
                                        <Picker.Item label="Child Health" value="" />
                                        <Picker.Item label="Healthy" value="healthy" />
                                        <Picker.Item label="Unhealthy" value="unhealthy" />
                                    </Picker>
                                </View>

                                {/* <View style={styles.inputContainer}>
                                    <Picker
                                        style={styles.picker} itemStyle={styles.pickerItem}
                                        placeholder="Status"
                                        selectedValue={this.state.health}
                                        onValueChange={(itemValue) =>
                                            this.props.childUpdate({ name: 'health', itemValue })
                                        }
                                    >
                                        <Picker.Item label="Child Health" value="" />
                                        <Picker.Item label="Healthy" value="healthy" />
                                        <Picker.Item label="Unhealthy" value="unhealthy" />
                                    </Picker>
                                </View> */}




                                <View style={styles.inputContainer}>
                                    <DatePicker
                                        style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        placeholder="Date of Birth"
                                        //style={{ marginLeft: 63, padding: 5 }}
                                        mode="date"
                                        maxDate={new Date()}
                                        placeholder="Enter Birth Date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.childUpdate({ name: 'DPickdob', value })}
                                        date={this.props.DPickdob}
                                    />
                                </View>


                                <View style={styles.inputContainer}>
                                    <DatePicker
                                        style={styles.dateblock}
                                        customStyles={{ dateInput: { borderWidth: 0 } }}
                                        placeholder="Registered Date"
                                        mode="date"
                                        round
                                        maxDate={new Date()}
                                        placeholder="Enter Registered date"
                                        format="YYYY-MM-DD"
                                        onDateChange={value => this.props.childUpdate({ name: 'DPickregdate', value })}
                                        date={this.props.DPickregdate}
                                    />
                                </View>

                            </View>
                            : null
                    }

                    {
                        this.props.status === 'Died' ?
                            <View>
                                <View style={styles.inputContainer}>
                                    <Label style={{ marginLeft: 22 }}>Died Place</Label>
                                    <Text style={{ marginLeft: 40, color: '#355870', fontSize: 16 }}> Home {'\t'}</Text>
                                    <Radio
                                        onPress={() => this.props.childUpdate({ name: 'placedied', value: 'Home' })}
                                        selected={this.props.placedied === 'Home'}
                                    />
                                    <Text style={{ marginLeft: 10, color: '#355870', fontSize: 16 }}>Hospital {'\t'}</Text>
                                    <Radio
                                        onPress={() => this.props.childUpdate({ name: 'placedied', value: 'Hospital' })}
                                        selected={this.props.placedied === 'Hospital'}
                                    />
                                </View>
                            </View>
                            : null
                    }
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

    const { HNumber, CName, CMotherId, status, option, babytype, health, DPickdob, DPickregdate } = state.child;
    console.log('registration  mother id form ', CMotherId);
    return { HNumber, CName, CMotherId, status, option, babytype, health, DPickdob, DPickregdate };
};

export default connect(mapStateToProps, { childUpdate })(ChildRegistrationForm);
