import _ from 'lodash';

import React, { Component } from 'react';
import {ListView,ScrollView,View} from 'react-native';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import { HouseholdFetch } from '../../actions/HouseholdActions';
import { Card, CardSection } from '../Common';
import HouseHoldListItem from './HouseHoldListItem';
import { SearchBar } from 'react-native-elements';



const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class HouseHoldFetch extends Component {
  state = {};
  componentWillMount() {
    this.props.HouseholdFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  createDataSource({ HouseHold }) {
    var values = Object.values(HouseHold);
    this.state = {
      "resultset": values,
      searchName: ''
    };
  }
  renderRow(HouseHold) {
    return <HouseHoldListItem HouseHold={HouseHold} />

  }
  onSearchValueChange = (value, index) => {
    console.log('value here',value);
    this.setState({
      
      "searchName": value
    });
  }
  render() {
    const json = this.state.resultset;
    var name = this.state.searchName;
    if (name !== '') {
      var jsonsearch = json.filter(function (item) {
        const itemData = `${item.HHNumber} `;
        const textData = name;
        return itemData.indexOf(textData) > -1;
      });

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

  const {Loading}=state.HouseHoldForm;
  const HouseHold = _.map(state.HouseHold, (val, uid) => {
  
    return { ...val, uid };

  });
  return {Loading, HouseHold };
};
export default connect(mapStateToProps, { HouseholdFetch })(HouseHoldFetch);
