import _ from 'lodash';
import React, { Component } from 'react';
import { CardItem, Button } from 'native-base';
import { Text, Dimensions, Alert, } from 'react-native';
import { Card, Confirm } from '../Common';
import { connect } from 'react-redux';
import { HouseholdUpdate, HouseholdSave, HouseholdDelete } from '../../actions/HouseholdActions';
import HouseHoldForm from './HouseHoldForm';
import { ScrollView } from 'react-native-gesture-handler';

class HouseHoldEdit extends Component {
    static navigationOptions = {
        title: 'Household Information',
        headerStyle: {
            backgroundColor: '#355870',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    state = { showModal: false };
    componentWillMount() {
        _.each(this.props.navigation.state.params.Houseno, (value, name) => {
            this.props.HouseholdUpdate({ name, value });
        });
    }

    onButtonPress() {
        const { HHNumber, HHName, DOB, Caste, sex, Relationship, LiteracyRate, Status, Designation, Disability, Phonenumber, Address, option, Disease1, Disease2, Disease3, DOE,  } = this.props;
        const navigate = this.props.navigation;
       this.props.HouseholdSave({ HHNumber, HHName, DOB, Caste, sex, Relationship, LiteracyRate, Status, Designation, Disability, Phonenumber, Address, option, Disease1, Disease2, Disease3, DOE, navigate }, this.props.navigation.state.params.Houseno.uid, HHNumber);
        
    }
    onAccept() {
        const { HHNumber } = this.props;
        const navigate = this.props.navigation;
        this.props.HouseholdDelete(this.props.navigation.state.params.Houseno.uid, navigate, HHNumber);
        this.setState({ showModal: false });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <ScrollView>
                <Text>{"\n"}</Text>
                <Card>
                    <HouseHoldForm />
                    <CardItem>
                        <Button
                          block success
                          style={{ width: Dimensions.get('window').width - 40, marginLeft: 0, marginRight: 0 }}
                        onPress={this.onButtonPress.bind(this)}>
                          <Text> Save</Text>   
                    </Button>
                    </CardItem>
                    <CardItem>
                        <Button 
                         block success
                         style={{ width: Dimensions.get('window').width - 40, marginLeft: 0, marginRight: 0 }}
                        onPress={() => this.setState({ showModal: !this.state.showModal })}><Text> Delete </Text></Button>
                    </CardItem>
                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        Are you sure you want to delete this?
                </Confirm>
                </Card>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    const { HHNumber, HHName, DOB, Caste, sex, Relationship, LiteracyRate, Status, Designation, Disability, Phonenumber, Address, option, Disease1, Disease2, Disease3, uid, DOE } = state.HouseHoldForm;
    return { HHNumber, HHName, DOB, Caste, sex, Relationship, LiteracyRate, Designation, Disability, Status, Phonenumber, Address, option, Disease1, Disease2, Disease3, uid, DOE };
}
export default connect(mapStateToProps, { HouseholdSave, HouseholdUpdate, HouseholdDelete })(HouseHoldEdit);