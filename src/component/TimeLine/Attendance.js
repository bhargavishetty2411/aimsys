import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { AttendanceUpdate, AttendanceCreate } from '../../actions/Attaction';
import { Card, CardSection, Button, Confirm } from '../Common';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';


class Attendance extends Component {
    state = { showModal: false };
    static navigationOptions = {
        title: 'Attendance',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time
            date: '',
            Countt: {},
        };
    }

    componentDidMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        that.setState({
            //Setting the value of the date time
            date:  year + '-' + month + '-' + date 
        });
        //Attandance count start 

        const { currentUser } = firebase.auth();
        const db = firebase.database().ref(`/users/${currentUser.uid}/Attendance/Count`);
        let count = 0;
        db.on('value', snapshot => {
            if (snapshot.val()) {
                console.log('data here ', snapshot.val());
            } else {

            }

            snapshot.forEach(data => {
                const query = db.orderByChild('date').startAt(data.val().date).endAt(data.val().date);
                query.on('value', snap => {
                    snap.forEach(data => {
                        console.log('date', data.val());
                        console.log('Count inside', data.val().daycount);
                        var no = parseInt(data.val().daycount);
                        count = count + no;
                    });
                });
                console.log('Count', count);
                this.setState({ Countt: count });
            });
        });
    }

    onButtonPress() {
        const { date, daycount } = this.props;
        this.props.AttendanceCreate({ date, daycount });
        Alert.alert(
            'Inserted Successfully',
        );
    }


    render() {
        console.log('TotalCount', this.state.Countt);
        this.props.AttendanceUpdate({ name: 'date', value: this.state.date });
        return (
            <View style={styles.container}>
                <View style={styles.mainview}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            value={this.props.date}
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            placeholderTextColor='red'
                            autoFocus={true}
                            editable={false}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Enter day count"
                            autoCorrect={false}
                            onChangeText={value => this.props.AttendanceUpdate({ name: 'daycount', value })}
                            value={this.props.daycount}
                        />
                    </View>
                    {/* <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Enter day count"
                            autoCorrect={false}

                            value={this.state.Countt}
                        />
                    </View> */}
                    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.onButtonPress.bind(this)} >
                        <Text style={styles.loginText}>ADD</Text>
                    </TouchableOpacity>

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
    const { date, daycount } = state.attendance;
    return { date, daycount };
};

export default connect(mapStateToProps, { AttendanceUpdate, AttendanceCreate })(Attendance);

