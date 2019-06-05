import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { Spinner } from 'native-base';
import { Card, CardSection } from '../Common';
import { FetchAll } from '../../actions/HouseholdActions';
import DemographicReportList from './DemographicReportList';
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class DemographicReport extends Component {
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

    this.props.FetchAll();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  createDataSource({ Fetchall }) {
    var values = Object.values(Fetchall);
    this.state = {
      "resultset": values,
      searchName: ''
    }
  }
  renderRow(Fetchall) {
    return <DemographicReportList HouseHold={Fetchall} />;
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
      jsonsearch = { 0: { HHName: 'No Record Found' } };
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
  const Fetchall = _.map(state.Fetchall, (val, uid) => ({ ...val, uid }));
  return { Loading, Fetchall };
};
export default connect(mapStateToProps, { FetchAll })(DemographicReport);
