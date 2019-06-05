import React, { Component } from 'react';
import { ListView, ScrollView, View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { Card, CardSection } from '../Common';
import { InjectionFetch } from '../../actions/InjectionAction';
import ListInjection from './ListInjection';


const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class InjectionSearch extends Component {
  state = {};

  componentWillMount() {
    this.props.InjectionFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ injectionF }) {
    var values = Object.values(injectionF);
    this.state = {
      "resultset": values,
      searchName: ''
    }
  }

  renderRow(injection) {
    return <ListInjection injection={injection} />;
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
      <ScrollView>

        <SearchBar
          placeholder='Type Here...'
          lightTheme
          round
          containerStyle={{ backgroundColor: '#FFFFFF' }}
          placeholderTextColor={'#FFFFFF'}
          icon={{ color: '#FFFFFF' }}
          onChangeText={this.onSearchValueChange}
          value={this.state.searchName}
          inputContainerStyle={{ backgroundColor: '#275DAD' }}
        />

        {
          this.props.Loading ?
            <View>
              <Spinner />
            </View> :

            <Card>
              <CardSection>
                <ListView
                  enableEmptySections
                  dataSource={dataSource}
                  renderRow={this.renderRow}
                />
              </CardSection>
            </Card>

        }
      </ScrollView>
    );
  }
}


const mapStateToProps = state => {
  const { Loading } = state.injection;
  console.log('i nedd i t here see', state.injectionF);
  const injectionF = _.map(state.injectionF, (val, uid) => {
    return { ...val, uid };
  });
  return { Loading, injectionF };
};

export default connect(mapStateToProps, { InjectionFetch })(InjectionSearch);
