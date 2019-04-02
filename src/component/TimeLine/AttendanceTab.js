import React, { Component } from 'react';
import { Container, Tab, Tabs, Icon, TabHeading, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import AttendanceSearch from './AttendanceSearch';
import AttendanceRegistrationForm from './AttendanceRegistrationForm';

class AttendanceTab extends Component {
    static navigationOptions = {
        title: 'Registration',
        headerStyle: {
            backgroundColor: '#203546',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props)
        this.state = { currentTab: 0 }

    }
    render() {
        return (
            <Container>
                <Tabs initialPage={this.state.currentPage} onChangeTab={({ i }) => this.setState({ currentTab: i })}>
                    <Tab heading={<TabHeading style={this.state.currentTab === 0 ? styles.activeTabStyle : styles.tabStyle} ><Icon name="md-list-box" /><Text>Update Records</Text></TabHeading>}>
                        <AttendanceSearch />
                    </Tab>
                    <Tab heading={<TabHeading style={this.state.currentTab === 1 ? styles.activeTabStyle : styles.tabStyle} ><Icon name="md-create" /><Text>Create</Text></TabHeading>}>
                        <AttendanceRegistrationForm />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    activeTabStyle: {
        backgroundColor: '#275DAD'
    },
    tabStyle: {
        backgroundColor: '#FFFFFF'
    }
});

export default AttendanceTab;
