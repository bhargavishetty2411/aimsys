import React, { Component } from 'react';
import { ListView, ScrollView, View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { Card, CardSection } from '../Common';
import { pregnancyFetch } from '../../actions/PregnancyActions';
import PregnancyListItem from './PregnancyListItem';


const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class PregnancyList extends Component {
  static navigationOptions = {
    title: 'Expectant Women',
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
    this.props.pregnancyFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  createDataSource({ PregnancyFetch }) {
    var values = Object.values(PregnancyFetch);
    this.state = {
      "resultset": values,
      searchName: ''
    };
  }
  renderRow(PregnancyFetch) {
    return <PregnancyListItem PregnancyFetchName={PregnancyFetch} />;
  }
  onSearchValueChange = (value, index) => {
    this.setState({
      "searchName": value
    });
  }
  render() {
    const json = this.state.resultset;
    var name = this.state.searchName;
    if (name !== '') {
      var jsonsearch = json.filter(function (item) {
        const itemData = `${item.PregnantName} `;
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
      jsonsearch = { 0: { PregnantName: 'No Record Found', HHNumber: 0 } };
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
  const { Loading } = state.PregnancyForm;
  console.log('loading', Loading);
  const PregnancyFetch = _.map(state.PregnancyFetch, (val, uid) => {
    return { ...val, uid };
  });
  return { Loading, PregnancyFetch };
};

export default connect(mapStateToProps, { pregnancyFetch })(PregnancyList);
