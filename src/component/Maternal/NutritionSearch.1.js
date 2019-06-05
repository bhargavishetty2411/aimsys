import React, { Component } from 'react';
import { ListView, ScrollView, View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import { SearchBar } from 'react-native-elements';
import Child from './ListChild';
import { Card, CardSection } from '../Common';
import { childFetch } from '../../actions/ChildAction';


const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class ChildSearch extends Component {
  state = {};

  componentWillMount() {
    this.props.childFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ childF }) {
    var values = Object.values(childF);
    this.state = {
      "resultset": values,
      searchName: ''
    }
  }

  renderRow(child) {
    return <ListChild child={child} />;
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
        const itemData = `${item.CName} `;
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
      jsonsearch = { 0: { CName: 'No Record Found' } };
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
  const { Loading } = state.child;
  const childF = _.map(state.childF, (val, uid) => {
    return { ...val, uid };
  });
  return { Loading, childF };
};

export default connect(mapStateToProps, { childFetch })(ChildSearch);
