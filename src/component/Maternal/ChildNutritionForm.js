import React, { Component } from 'react';
import { CardSection, Card, } from '../Common';
import { View, Picker, TextInput, StyleSheet, Icon } from 'react-native';
import { Radio, CardItem, Text, Label } from 'native-base';
import { connect } from 'react-redux';
import { NutritionUpdate } from '../../actions/NutritionAction';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
let age = '';

class ChildNutritionForm extends Component {
    state = {
        snapshotList: {},
        scores: {},
        Age: '',
    }; //const subquery=query.orderByChild('CName').equalTo('virat');

    search(HNumber) {
        console.log('Hnumber', HNumber);
        const { currentUser } = firebase.auth();
        const db = firebase.database().ref(`/users/${currentUser.uid}/Maternal/ChildRegistration`)
        const query = db.orderByChild('HNumber').equalTo(HNumber);
        query.on('value', snapshot => {
            if (snapshot.val()) {
                this.setState({ scores: snapshot.val() });
            } else {
                this.setState({ scores: { noData: { CName: 'No Data' } } });
            }
        });
    }

    getPickerElements() {
        var pickerArr = [];
        var scores = this.state.scores;
        console.log('year', scores);
        var keys = Object.keys(scores);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var Name = scores[k].CName;
            pickerArr.push(<Picker.Item label={Name} value={Name} />);
        }
        return pickerArr;
    }

    calFun(text) {
        this.props.NutritionUpdate({ name: 'HNumber', value: text });
        this.search(text);
    }

    calbrday(text) {
        console.log('iprit here', this.props.HNumber, 'on value', text);
        this.props.NutritionUpdate({ name: 'CName', value: text });
        const HNumber = this.props.HNumber;
        const { currentUser } = firebase.auth();
        const db = firebase.database().ref(`/users/${currentUser.uid}/Maternal/ChildRegistration`);
        const query = db.orderByChild('HNumber').equalTo(HNumber);

        query.on('value', snap => {
            snap.forEach(child => {

                if (child.val().CName === text) {

                    var birthday = new Date(child.val().DPickdob);
                    var today = new Date();
                    var thisYear = 0;
                    if (today.getMonth() < birthday.getMonth()) {
                        thisYear = 1;
                    } else if ((today.getMonth() ==birthday.getMonth()) && today.getDate() < birthday.getDate()) {
                        thisYear = 1;
                    }
                    var age = today.getFullYear() - birthday.getFullYear() - thisYear;
                    console.log('age here', age.toString());
                    this.setState({ Age: age.toString() });
                }
            });
        });
    }
    
  render() {
        this.props.NutritionUpdate({ name: 'Age', value: this.state.Age });
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.mainview}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Enter HouseHold Number"
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            placeholderTextColor='#355870'
                            onChangeText={this.calFun.bind(this)}
                            value={this.props.HNumber}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Picker
                            selectedValue={this.props.CName}
                            style={styles.picker} itemStyle={styles.pickerItem}
                            onValueChange={this.calbrday.bind(this)}
                        >
                            <Picker.Item label='Select Child Name' value='' />
                            {this.getPickerElements()}
                        </Picker>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            value={this.props.Age}
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            placeholderTextColor='#355870'
                            autoFocus={true}
                            editable={false}

                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Enter Height"
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            placeholderTextColor='#355870'
                            onChangeText={value => this.props.NutritionUpdate({ name: 'height', value })}
                            value={this.props.height}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="Enter weight"
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            placeholderTextColor='#355870'
                            onChangeText={value => this.props.NutritionUpdate({ name: 'weight', value })}
                            value={this.props.weight}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Label style={{ marginLeft: 22 }}>Underweight?</Label>
                        <Text style={{ marginLeft: 40, color: '#355870', fontSize: 16 }}>Yes{'\t'}</Text>
                        <Radio
                            onPress={() => this.props.NutritionUpdate({ name: 'under', value: 'Yes' })}
                            selected={this.props.under === 'Yes'}
                        />
                        <Text style={{ marginLeft: 10, color: '#355870', fontSize: 16 }}>No{'\t'}</Text>
                        <Radio
                            onPress={() => this.props.NutritionUpdate({ name: 'under', value: 'No' })}
                            selected={this.props.under === 'No'}
                        />
                    </View>
                    {/* 
                    {
                        this.state.isHidden ?
                            <Card>
                                <ListItem>
                                    <Input
                                        placeholder='age'
                                        label='Age'
                                    />
                                </ListItem>
                                <ListItem>
                                    <Input
                                        placeholder='weight'
                                        label='weight'
                                    />
                                </ListItem>

                            </Card>
                            : null
                    } */}

                    <View style={styles.inputContainer}>
                        <Label style={{ marginLeft: 22 }}>Wasting?</Label>
                        <Text style={{ marginLeft: 40, color: '#355870', fontSize: 16 }}>Yes{'\t'}</Text>
                        <Radio
                            onPress={() => this.props.NutritionUpdate({ name: 'wast', value: 'Yes' })}
                            selected={this.props.wast === 'Yes'}

                        />

                        <Text style={{ marginLeft: 10, color: '#355870', fontSize: 16 }}>No{'\t'}</Text>
                        <Radio
                            onPress={() => this.props.NutritionUpdate({ name: 'wast', value: 'No' })}
                            selected={this.props.wast === 'No'}

                        />
                    </View>
                    {/* {
                        this.state.isHidden1 ?
                            <Card>
                                <ListItem>
                                    <Input
                                        placeholder='age'
                                        label='Age'
                                    />
                                </ListItem>
                                <ListItem>
                                    <Input
                                        placeholder='weight'
                                        label='weight'
                                    />
                                </ListItem>
                                <ListItem>
                                    <Input
                                        placeholder='height'
                                        label='height'
                                    />
                                </ListItem>

                            </Card>
                            : null
                    } */}

                    <View style={styles.inputContainer}>
                        <Label style={styles.textStyle1}>Stunting?</Label>

                        <Text style={{ marginLeft: 40, color: '#355870', fontSize: 16 }}>Yes{'\t'}</Text>
                        <Radio
                            onPress={() => this.props.NutritionUpdate({ name: 'stunt', value: 'Yes' })}
                            selected={this.props.stunt === 'Yes'}

                        />

                        <Text style={{ marginLeft: 10, color: '#355870', fontSize: 16 }}>No{'\t'}</Text>
                        <Radio
                            onPress={() => this.props.NutritionUpdate({ name: 'stunt', value: 'No' })}
                            selected={this.props.stunt === 'No'}

                        />
                    </View>
                    {/* {
                        this.state.isHidden2 ?
                            <Card>
                                <ListItem>
                                    <Input
                                        placeholder='age'
                                        label='Age'
                                    />
                                </ListItem>
                                <ListItem>
                                    <Input
                                        placeholder='height'
                                        label='height'
                                    />
                                </ListItem>

                            </Card>
                            : null
                    } */}

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>New born with low birth weight less then 2500 grams?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio
                                onPress={() => this.props.NutritionUpdate({ name: 'lowbirth', value: 'Yes' })}
                                selected={this.props.lowbirth === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio
                                onPress={() => this.props.NutritionUpdate({ name: 'lowbirth', value: 'No' })}
                                selected={this.props.lowbirth === 'No'}

                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>Early iniation of Breastfeeding?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio
                                onPress={() => this.props.NutritionUpdate({ name: 'breastfeed', value: 'Yes' })}
                                selected={this.props.breastfeed === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio
                                onPress={() => this.props.NutritionUpdate({ name: 'breastfeed', value: 'No' })}
                                selected={this.props.breastfeed === 'No'}

                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>Exclusive Breastfeeding?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio
                                onPress={() => this.props.NutritionUpdate({ name: 'exfeed', value: 'Yes' })}
                                selected={this.props.exfeed === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio
                                onPress={() => this.props.NutritionUpdate({ name: 'exfeed', value: 'No' })}
                                selected={this.props.exfeed === 'No'}

                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>Children inititaed appropriate complementary feeding?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio
                                onPress={() => this.props.NutritionUpdate({ name: 'cfeed', value: 'Yes' })}
                                selected={this.props.cfeed === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio
                                onPress={() => this.props.NutritionUpdate({ name: 'cfeed', value: 'No' })}
                                selected={this.props.cfeed === 'No'}

                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Text style={styles.textStyle1}>Institutional deliveries?</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 7, color: 'grey', fontSize: 16 }}>Yes:</Text>
                            <Radio
                                onPress={() => this.props.NutritionUpdate({ name: 'ideli', value: 'Yes' })}
                                selected={this.props.ideli === 'Yes'}

                            />

                            <Text style={{ marginLeft: 10, color: 'grey', fontSize: 16 }}>No:</Text>
                            <Radio
                                onPress={() => this.props.NutritionUpdate({ name: 'ideli', value: 'No' })}
                                selected={this.props.ideli === 'No'}

                            />
                        </CardItem>
                    </Card>
                </View >
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

    const { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli } = state.nutrition;
    return { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli };
};

export default connect(mapStateToProps, { NutritionUpdate })(ChildNutritionForm);
