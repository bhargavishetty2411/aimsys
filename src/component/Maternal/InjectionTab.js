import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Icon, TabHeading, Text } from 'native-base';
import { StyleSheet,  View, TouchableOpacity } from 'react-native';
import InjectionSearch from './InjectionSearch';
import InjectionRecords from './InjectionRecords';


class InjectionTab extends Component {
  static navigationOptions = {
    title: 'Immunization Records',
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
  this.state = { currentTab: 0 };
}

  render() {
    return (
      <Container>
        <Tabs initialPage={this.state.currentPage} onChangeTab={({ i }) => this.setState({ currentTab: i })}>
          <Tab heading={<TabHeading style={this.state.currentTab === 0 ? styles.activeTabStyle : styles.tabStyle} ><Icon name="md-list-box" /><Text>Update Records</Text></TabHeading>}>
            <InjectionSearch />
          </Tab>
          <Tab heading={<TabHeading style={this.state.currentTab === 1 ? styles.activeTabStyle : styles.tabStyle} ><Icon name="md-create" /><Text>Create</Text></TabHeading>}>
            <InjectionRecords />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabstyle: {
   // backgroundColor: '',
  }
});

export default InjectionTab;
