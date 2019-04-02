import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';

class MyDatepicker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: '2019-02-01' };
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{this.props.label}</Text>
        <DatePicker
          style={{ width: 200, marginTop: 10,color:'yellow' }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2019-05-01"
          maxDate="2022-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => { this.setState({ date: date }); }}
        />
      </View>
    );
  }
}
const styles = {

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1

  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'

  }
};
export { MyDatepicker };
