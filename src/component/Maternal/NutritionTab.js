import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Icon,TabHeading,Text } from 'native-base';
import { StyleSheet,  View, TouchableOpacity } from 'react-native';
import NutritionSearch from './NutritionSearch';
import ChildNutrition from './ChildNutrition';


class NutritionTab extends Component {
  static navigationOptions = {
    title: 'ChildNutrition',
    headerStyle: {
        backgroundColor: '#203546',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};
  render() {
    return (
      <Container>
        {/* <Header hasTabs /> */}
        <Tabs style={styles.tabstyle}>
          <Tab style={styles.tabstyle} heading={ <TabHeading style={styles.tabstyle}><Icon name="list" /><Text>List</Text></TabHeading>}>
            <NutritionSearch />
          </Tab>
          <Tab style={styles.tabstyle} heading={ <TabHeading style={styles.tabstyle}><Icon name="contact" /><Text>Create</Text></TabHeading>}>
            <ChildNutrition />
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

export default NutritionTab ;
