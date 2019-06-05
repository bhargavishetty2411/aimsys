import firebase from 'firebase';
import _ from 'lodash';
import React, { Component } from 'react';
import { View, Picker, TextInput, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { Radio, CardItem, Label } from 'native-base';
import { NutritionUpdate, NutritionSave, NutritionDelete } from '../../actions/NutritionAction';
import { Card, CardSection, Button, Confirm } from '../Common';
import { ScrollView } from 'react-native-gesture-handler';

class NutritionEditForm extends Component {
    state = {
        snapshotList: {},
        scores: {},
        showModal: false,
    };

    static navigationOptions = {
        title: 'Child Nutrition Update',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    componentWillMount() {
        _.each(this.props.navigation.state.params.nutrition, (value, name) => {
            this.props.NutritionUpdate({ name, value });
            this.search(this.props.navigation.state.params.nutrition.HNumber);
        });
    }

    onButtonPress() {
        const { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli } = this.props;
        this.props.NutritionSave({ HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli, uid: this.props.navigation.state.params.nutrition.uid });
        Alert.alert(
            'Updated Successfully',
        );
    }

    onAccept() {
        const navigate = this.props.navigation;
        this.props.NutritionDelete({ uid: this.props.navigation.state.params.nutrition.uid }, navigate);
        this.setState({ showModal: false });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    search(HNumber) {
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
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var Name = scores[k].CName;
            pickerArr.push(<Picker.Item label={Name} value={k} />);
            count++;
        }
        if (count == 0) { pickerArr.push(<Picker.Item label={'No Data'} value={'No Data'} />); }
        return pickerArr;
    }

    calFun(text) {
        this.props.NutritionUpdate({ name: 'HNumber', value: text });
    }

    render() {
        //this.props.NutritionUpdate({ name: 'Age', value: this.state.Age });
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.mainview}>
                        <Label style={{ marginLeft: 15 }}>Household Number</Label>
                        <Card>
                            <CardItem>
                                <TextInput
                                    style={styles.inputs}
                                    placeholder="Enter HouseHold Number"
                                    keyboardType='numeric'
                                    underlineColorAndroid='transparent'
                                    autoCorrect={false}
                                    placeholderTextColor='#355870'
                                    onChangeText={this.calFun.bind(this)}
                                    value={this.props.HNumber}
                                />
                            </CardItem>
                        </Card>


                        <Card>
                            <CardItem>
                                <Picker
                                    selectedValue={this.props.CName}
                                    style={styles.picker} itemStyle={styles.pickerItem}
                                    onValueChange={(value) => this.props.NutritionUpdate({ name: 'CName', value })}
                                // onValueChange={this.calbrday.bind(this)}
                                >
                                    <Picker.Item label='Select Child Name' value='' />
                                    {this.getPickerElements()}
                                </Picker>
                            </CardItem>
                        </Card>

                        {/* <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputs}
                                placeholder='Age'
                                value={this.props.Age}
                                underlineColorAndroid='transparent'
                                autoCorrect={false}
                                placeholderTextColor='#355870'
                                autoFocus={true}
                                editable={false}

                            />
                        </View> */}
                        {/* <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="Enter Height"
                                underlineColorAndroid='transparent'
                                autoCorrect={false}
                                placeholderTextColor='#355870'
                                onChangeText={value => this.props.NutritionUpdate({ name: 'height', value })}
                                value={this.props.height}
                            />
                        </View> */}
                        <Label style={{ marginLeft: 15 }}>Weight</Label>
                        <Card>
                            <CardItem>
                                <TextInput
                                    style={styles.inputs}
                                    placeholder="Enter weight"
                                    keyboardType='numeric'
                                    underlineColorAndroid='transparent'
                                    autoCorrect={false}
                                    placeholderTextColor='#355870'
                                    onChangeText={value => this.props.NutritionUpdate({ name: 'weight', value })}
                                    value={this.props.weight}
                                />
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Text style={styles.textStyle1}> Underweight??</Text>
                                {/* <Label style={{ marginLeft: 22 }}>Underweight?</Label> */}
                            </CardItem>
                            <CardItem>
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
                            </CardItem>
                        </Card>
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

                        <Card>
                            <CardItem>
                                <Text style={styles.textStyle1}> Wasting??</Text>

                            </CardItem>
                            <CardItem>
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
                            </CardItem>
                        </Card>
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

                        <Card>
                            <CardItem>
                                <Text style={styles.textStyle1}>Stunting?</Text>
                            </CardItem>
                            <CardItem>
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
                            </CardItem>
                        </Card>
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
                                {/* <Label style={styles.textStyle1}> Children inititaed appropriate complementary feeding?</Label> */}
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

                        {/* <Card style={styles.cardstylenb}> */}
                        <Card>
                            <CardItem>
                                <Text style={styles.textStyle1}>Institutional deliveries?</Text>
                                {/* <Label style={styles.textStyle1}></Label> */}
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

            </ScrollView>

            // <ScrollView>
            //     <Card>
            //         <ChildNutritionForm />
            //         <CardSection>
            //             <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
            //         </CardSection>
            //         <CardSection>
            //             <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>Delete</Button>
            //         </CardSection>
            //         <Confirm visible={this.state.showModal}
            //             onAccept={this.onAccept.bind(this)}
            //             onDecline={this.onDecline.bind(this)}
            //         >
            //             Are you sure you want to delete this?
            //     </Confirm>
            //     </Card>
            // </ScrollView>

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
    console.log('i print here', HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli);
    return { HNumber, CName, Age, height, weight, under, wast, stunt, lowbirth, breastfeed, exfeed, cfeed, ideli };
};

export default connect(mapStateToProps, { NutritionUpdate, NutritionSave, NutritionDelete })(NutritionEditForm);  