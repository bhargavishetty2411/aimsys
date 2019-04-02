import React, { Component } from 'react';
import _ from 'lodash';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import AttendanceRegistration from './AttendanceRegistration';
import { AttendanceUpdate, AttendanceSave, AttendanceDelete } from '../../actions/AttendanceAction';
import { Card, CardSection, Button, Confirm } from '../Common';
import { ScrollView } from 'react-native-gesture-handler';

class AttendanceEditForm extends Component {
    state = { showModal: false };
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
        _.each(this.props.navigation.state.params.attendance, (value, name) => {

            console.log(name);
            console.log(value);
            this.props.AttendanceUpdate({ name, value });
        });
    }

    onButtonPress() {
        const { ChildName, gender, Dob, Regdate } = this.props;
        // eslint-disable-next-line max-len
        this.props.AttendanceSave({ ChildName, gender, Dob, Regdate, uid: this.props.navigation.state.params.attendance.uid });
    }


    onAccept() {
        const navigate = this.props.navigation;
        this.props.AttendanceDelete({ uid: this.props.navigation.state.params.attendance.uid }, navigate);
        this.setState({ showModal: false });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {

        return (
            <ScrollView>
                <Card>
                    <AttendanceRegistration />
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
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
                </Card>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {

    const { ChildName, gender, Dob, Regdate } = state.attendance;
    return { ChildName, gender, Dob, Regdate };
};

export default connect(mapStateToProps, { AttendanceUpdate, AttendanceSave, AttendanceDelete })(AttendanceEditForm);  
