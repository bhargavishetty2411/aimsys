import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Icon, TabHeading, Text } from 'native-base';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import DailyUsagePeople from './DailyUsagePeople';
import DailyUsagePeopleSearch from './DailyUsagePeopleSearch';
//import Icon from 'react-native-vector-icons/FontAwesome';

class DailyUsagePeopleTab extends Component {
  //const navigate = this.props.navigation;
  static navigationOptions = {
    title: 'Timeline',
    headerStyle: {
      backgroundColor: '#355870',
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
    //const { navigation } = this.props;

    return (
      <Container>
        {/* <Header hasTabs /> */}
        <Tabs initialPage={this.state.currentPage} onChangeTab={({ i }) => this.setState({ currentTab: i })}>
          <Tab heading={<TabHeading style={this.state.currentTab === 0 ? styles.activeTabStyle : styles.tabStyle} ><Icon name="md-list-box" /><Text>Check Records</Text></TabHeading>}>
            <DailyUsagePeopleSearch  navigation={this.props.navigation} />
          </Tab>
          <Tab heading={<TabHeading style={this.state.currentTab === 1 ? styles.activeTabStyle : styles.tabStyle} ><Icon name="md-create" /><Text>Add Daily Usage</Text></TabHeading>}>
            <DailyUsagePeople navigation={this.props.navigation}  navigation={this.props.navigation}  />
            {/* //navigate={this.props.navigate}  */}
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

export default DailyUsagePeopleTab;