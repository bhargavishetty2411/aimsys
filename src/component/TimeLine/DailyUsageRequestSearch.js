import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  StyleSheet,
  ListView,
  ScrollView,
  Picker,
  Alert,
  ActivityIndicator
} from 'react-native';
import { View, Spinner } from 'native-base';
import firebase from 'firebase';
import { Container, Header, Item, Input, Button } from 'native-base';
import { dailyUsageStockFetch } from '../../actions/DailyUsageRequestAction';
import DailyUsageRequestListItem from './DailyUsageRequestListItem';
import Icon from 'react-native-vector-icons/FontAwesome';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class DailyUsageRequestSearch extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    this.props.dailyUsageStockFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ DailyUsageStockFetchKey }) {
    var values = Object.values(DailyUsageStockFetchKey);
    this.state = {
      resultset: values,
      frompickervar: '',
      pickerValue1: '',
      pickerValue2: '',
      pickerValue3: ''
    };
  }

  renderRow(child) {
    return <DailyUsageRequestListItem child={child} />;
  }

  onPickerValueChange1 = (value, index) => {
    this.setState({
      pickerValue1: value
    });
  };

  onPickerValueChange2 = (value, index) => {
    this.setState({
      pickerValue2: value
    });
  };

  onPickerValueChange3 = (value, index) => {
    this.setState({
      pickerValue3: value
    });
  };

  render() {
    var name = '';

    if (
      this.state.pickerValue1 &&
      !this.state.pickerValue2 &&
      !this.state.pickerValue3
    ) {
      this.state.pickerValue2 = null;
      this.state.pickerValue3 = null;
      name = this.state.pickerValue1;
    } else if (
      this.state.pickerValue3 &&
      !this.state.pickerValue1 &&
      !this.state.pickerValue2
    ) {
      this.state.pickerValue2 = null;
      this.state.pickerValue1 = null;
      name = this.state.pickerValue3;
    } else if (
      this.state.pickerValue2 &&
      !this.state.pickerValue1 &&
      !this.state.pickerValue3
    ) {
      this.state.pickerValue1 = null;
      this.state.pickerValue3 = null;
      name = this.state.pickerValue2;
    } else if (
      this.state.pickerValue1 &&
      this.state.pickerValue2 &&
      !this.state.pickerValue3
    ) {
      this.state.pickerValue3 = null;
      name = this.state.pickerValue1 + '-' + this.state.pickerValue2;
    } else if (
      this.state.pickerValue2 &&
      this.state.pickerValue3 &&
      !this.state.pickerValue1
    ) {
      this.state.pickerValue1 = null;
      name = this.state.pickerValue2 + '-' + this.state.pickerValue3;
    } else if (
      this.state.pickerValue1 &&
      this.state.pickerValue3 &&
      !this.state.pickerValue2
    ) {
      this.state.pickerValue2 = null;
      name =
        this.state.pickerValue1 + '-' + ' ' + '-' + this.state.pickerValue2;
    } else if (
      this.state.pickerValue1 &&
      this.state.pickerValue2 &&
      this.state.pickerValue3
    ) {
      name =
        this.state.pickerValue1 +
        '-' +
        this.state.pickerValue2 +
        '-' +
        this.state.pickerValue3;
    }

    const json = this.state.resultset;
    if (name !== '') {
      var jsonsearch = json.filter(function(item) {
        const itemData = `${item.DPickdobStock} `;
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
      jsonsearch = { 0: { DPickdobStock: 'No Records Found' } };
    }

    const dataSource = ds.cloneWithRows(jsonsearch);

    return (
      <Container>
        <ScrollView>
          <Header searchBar rounded style={styles.searchtab}>
            <Picker
              style={styles.pickerstyle1}
              selectedValue={this.state.pickerValue1}
              onValueChange={this.onPickerValueChange1}
              itemStyle={styles.itemStyle}
            >
              <Picker.Item label='Year' style={styles.pkitems} />
              <Picker.Item label='2014' style={styles.pkitems} value='2014' />
              <Picker.Item label='2015' style={styles.pkitems} value='2015' />
              <Picker.Item label='2016' style={styles.pkitems} value='2016' />
              <Picker.Item label='2017' style={styles.pkitems} value='2017' />
              <Picker.Item label='2018' style={styles.pkitems} value='2018' />
              <Picker.Item label='2019' style={styles.pkitems} value='2019' />
            </Picker>
            <Picker
              style={styles.pickerstyle2}
              selectedValue={this.state.pickerValue2}
              onValueChange={this.onPickerValueChange2}
            >
              <Picker.Item label='Month' />
              <Picker.Item label='Jan' value='01' />
              <Picker.Item label='Feb' value='02' />
              <Picker.Item label='March' value='03' />
              <Picker.Item label='April' value='04' />
              <Picker.Item label='May' value='05' />
              <Picker.Item label='June' value='06' />
              <Picker.Item label='July' value='07' />
              <Picker.Item label='August' value='08' />
              <Picker.Item label='Sept' value='09' />
              <Picker.Item label='Oct' value='10' />
              <Picker.Item label='Nov' value='11' />
              <Picker.Item label='Dec' value='12' />
            </Picker>
            <Picker
              style={styles.pickerstyle3}
              selectedValue={this.state.pickerValue3}
              onValueChange={this.onPickerValueChange3}
            >
              <Picker.Item label='Day' />
              <Picker.Item label='1' value='1' />
              <Picker.Item label='2' value='2' />
              <Picker.Item label='3' value='3' />
              <Picker.Item label='4' value='4' />
              <Picker.Item label='5' value='5' />
              <Picker.Item label='6' value='6' />
              <Picker.Item label='7' value='7' />
              <Picker.Item label='8' value='8' />
              <Picker.Item label='9' value='9' />
              <Picker.Item label='10' value='10' />
              <Picker.Item label='11' value='11' />
              <Picker.Item label='12' value='12' />
              <Picker.Item label='13' value='13' />
              <Picker.Item label='14' value='14' />
              <Picker.Item label='15' value='15' />
              <Picker.Item label='16' value='16' />
              <Picker.Item label='17' value='17' />
              <Picker.Item label='18' value='18' />
              <Picker.Item label='19' value='19' />
              <Picker.Item label='20' value='20' />
              <Picker.Item label='21' value='21' />
              <Picker.Item label='22' value='22' />
              <Picker.Item label='23' value='23' />
              <Picker.Item label='24' value='24' />
              <Picker.Item label='25' value='25' />
              <Picker.Item label='26' value='26' />
              <Picker.Item label='27' value='27' />
              <Picker.Item label='28' value='28' />
              <Picker.Item label='29' value='29' />
              <Picker.Item label='30' value='30' />
              <Picker.Item label='31' value='31' />
            </Picker>
            <Icon name='calendar' size={30} style={styles.pickertick} />
          </Header>

          <View>
            {this.state.pickerValue1 ||
            this.state.pickerValue2 ||
            this.state.pickerValue3 ? (
              <ListView
                enableEmptySections
                dataSource={dataSource}
                renderRow={this.renderRow}
              />
            ) : (
              <ActivityIndicator
                size='large'
                color='#275DAD'
                style={styles.aistyle}
              />
            )}
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  searchtab: {
    backgroundColor: '#275DAD',
    // borderColor: '#f7c744',
    // color:'#355870'
    flex: 1,
    height: 70
  },
  pickerstyle1: {
    height: 50,
    width: 100,
    backgroundColor: '#ffff',
    marginTop: 10,
    marginRight: 8,
    flex: 0.3,
    paddingLeft: 10,
    textAlign: 'center',
    alignItems: 'center'
  },
  pickerstyle2: {
    height: 50,
    width: 100,
    backgroundColor: '#ffff',
    marginTop: 10,
    marginRight: 8,
    flex: 0.3,
    textAlign: 'center'
  },
  pickerstyle3: {
    height: 50,
    width: 100,
    backgroundColor: '#ffff',
    marginTop: 10,
    marginRight: 2,
    flex: 0.3,
    paddingRight: 10,
    textAlign: 'center'
  },

  aistyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  },

  pickertick: {
    flex: 0.1,
    // backgroundColor: '#ffff',
    color: '#ffff',
    marginTop: 19,
    marginLeft: 6
    //textAlign: 'center'
  },
  pickertick2: {
    flex: 0.1,
    // backgroundColor: '#ffff',
    color: '#7CFC00',
    marginTop: 6,
    marginLeft: 6
    // textAlign: 'center'
  },
  pkitems: {
    textAlign: 'center'
  },
  itemStyle: {
    fontSize: 15,
    height: 75,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
const mapStateToProps = state => {
  const DailyUsageStockFetchKey = _.map(
    state.DailyUsageStockFetchKey,
    (val, uid) => {
      return { ...val, uid };
    }
  );
  return { DailyUsageStockFetchKey };
};

export default connect(
  mapStateToProps,
  { dailyUsageStockFetch }
)(DailyUsageRequestSearch);
