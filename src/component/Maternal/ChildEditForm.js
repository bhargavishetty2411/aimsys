import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Alert, StyleSheet, View, Picker, TextInput } from 'react-native';
import { Radio, CardItem, Text, Label } from 'native-base';
import ChildRegistrationForm from './ChildRegistrationForm';
import DatePicker from 'react-native-datepicker';
import { childUpdate, childSave, childDelete } from '../../actions/ChildAction';
import { Card, CardSection, Button, Confirm } from '../Common';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';

class ChildEditForm extends Component {

    state = {
        scores: {},
        showModal: false,
    };


    componentDidMount() {
        _.each(this.props.navigation.state.params.child, (value, name) => {
          
            console.log(value);
            this.props.childUpdate({ name, value });

           
        });
      
            this.search('H12346');
     
      
    }

    onButtonPress() {
        const { HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate } = this.props;
        this.props.childSave({ HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate, uid: this.props.navigation.state.params.child.uid });
        Alert.alert(
            'Updated Successfully',

        );
    }

    onAccept() {

        const navigate = this.props.navigation;
        this.props.childDelete({ uid: this.props.navigation.state.params.child.uid }, navigate);
        this.setState({ showModal: false });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

   
    getPickerElements(t) {
        var a = {};
        var t = 0;
        var pp = 0;
        let p = 0;
        let hno = 0;
        let HName = '';

        const { currentUser } = firebase.auth();
        var pickerArr = [];
        var scores = this.state.scores;
        let  Name ='';
        let Hname='';
        // console.log('scores here', scores);
        var keys = Object.keys(scores);
        for (let i = 0; i < keys.length; i++) {
            let k = keys[i];
            hno = scores[k].HHNumber;
            console.log('Houseno', hno);
            
            Name = scores[k].PregnantName;
            console.log('Pregnant Name', Name);
            const db = firebase.database().ref(`/users/${currentUser.uid}/Demographic/HouseholdMember/${hno}`);
            const query = db.orderByKey().equalTo(Name);
            query.on('value', snapshot => {
                snapshot.forEach(child => {

                    // a[t] = child.val().HHName;
                    // t++;
                    Hname = child.val().HHName;
                   
                });
              
            });
            pickerArr.push(<Picker.Item label={Hname} value={Hname} />);
            console.log('array', Hname);
             
        }
        

        return pickerArr;
    }


    search(HNumber) {
        console.log('Search Called Here', HNumber);
        const { currentUser } = firebase.auth();
        const db = firebase.database().ref(`/users/${currentUser.uid}/Demographic/Pregnancy`);
        const query = db.orderByChild('HHNumber').equalTo(HNumber);
        query.on('value', snapshot => {
            if (snapshot.val()) {
                this.setState({ scores: snapshot.val() });
            } else {
                this.setState({ scores: { noData: { HHName: 'No Data' } } });
            }
           
        });


    }
    
    render() {

        return (
            
            <ScrollView>
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
                                onChangeText={ (value) => this.props.childUpdate({ name: 'HNumber', value })}

                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Picker
                                style={styles.picker} itemStyle={styles.pickerItem}
                                selectedValue={this.props.CMotherId}
                                onValueChange={(value) => this.props.childUpdate({ name: 'CMotherId', value })}
                            >
                                <Picker.Item label='Select Mother Name' value='default' />
                                
                                {this.getPickerElements(this)}
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
                                onPress={() => this.props.childUpdate({ name: '#355870', value: 'single' })}
                                selected={this.props.babytype === 'single'}

                            />
                            <Text style={{ marginLeft: 10, color: '#3c3c3c', fontSize: 16 }}>Twin {'\t'}</Text>

                            <Radio
                                onPress={() => this.props.childUpdate({ name: 'babytype', value: 'twin' })}
                                selected={this.props.babytype === 'twin'}
                            />
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
                                placeholder="Enter Registered date"
                                format="YYYY-MM-DD"
                                onDateChange={value => this.props.childUpdate({ name: 'DPickregdate', value })}
                                date={this.props.DPickregdate}
                            />
                        </View>

                        {/* <ChildRegistrationForm edit='yes' /> */}
                        <CardSection>
                            <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                        </CardSection>
                        <CardSection>
                            <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>Delete</Button>
                        </CardSection>
                        <Confirm
                            visible={this.state.showModal}
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
    const { HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate } = state.child;

    return { HNumber, CName, CMotherId, status, option, babytype, DPickdob, DPickregdate };
};

export default connect(mapStateToProps, { childUpdate, childSave, childDelete })(ChildEditForm);  
