import React, { Component } from 'react';
import { ListView, ScrollView, View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { Card, CardSection } from '../Common';
import { HouseholdNameFetch } from '../../actions/HouseholdActions';
import HouseHoldMemberList from './HouseHoldMemberList';


const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class HouseHoldMemberName extends Component {
  static navigationOptions = {
    title: 'Member Infomation',
    headerStyle: {
        backgroundColor: '#203546',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};
  state = {};

  componentWillMount() {
    const {uid}=  this.props.navigation.state.params.HouseHold;
   // console.log('printed here',uid);
    this.props.HouseholdNameFetch({ uid});
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  createDataSource({ HouseHoldName }) {
    var values = Object.values(HouseHoldName);
    this.state = {
      "resultset": values,
      searchName: ''
    }
  }
  renderRow(HouseHoldName) {
    return <HouseHoldMemberList HouseHoldName={HouseHoldName} />;
  }
  onSearchValueChange = (value, index) => {
    this.setState({
      "searchName": value
    })
  }
  render() {
    const json = this.state.resultset;
    var name = this.state.searchName;
    if (name !== '') {
      var jsonsearch = json.filter(function (item) {
        const itemData = `${item.HHName} `;
        const textData = name;
        return itemData.indexOf(textData) > -1;
      })

      if (jsonsearch === '') {
        jsonsearch = this.state.resultset;
      }
    } else {
      jsonsearch = json;
    }
    if (Object.keys(jsonsearch).length === 0) {
      jsonsearch = { 0: { HHNumber: 'No Record Found' } };
    }
    const dataSource = ds.cloneWithRows(jsonsearch);
    return (
      <View>
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={this.onSearchValueChange}
        value={this.state.searchName}
      />
      {
        this.props.Loading ?
          <View>
            <Spinner />
          </View> :
          <ScrollView>
            <Card>
              <CardSection>
                <ListView
                  enableEmptySections
                  dataSource={dataSource}
                  renderRow={this.renderRow}
                />
              </CardSection>
            </Card>
          </ScrollView>
      }
    </View>
    );
  }
}


const mapStateToProps = state => {
   const { Loading } = state.HouseHoldForm;
  const HouseHoldName = _.map(state.HouseHoldName, (val, uid) => {
    return { ...val, uid };
  });
  return { Loading,HouseHoldName };
};

export default connect(mapStateToProps, { HouseholdNameFetch })(HouseHoldMemberName);
