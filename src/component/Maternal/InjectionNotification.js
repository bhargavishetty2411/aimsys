import React, { Component } from 'react';
import { ListView, ScrollView, View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { Card, CardSection } from '../Common';
import { NotificationFetch } from '../../actions/InjectionAction';
import ListNotification from './ListNotification';


const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

class InjectionNotification extends Component {
    static navigationOptions = {
        title: 'Immuniztion Notification',
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
        this.props.NotificationFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    onSearchValueChange = (value) => {
        this.setState({
            searchName: value
        });
    }

    createDataSource({ notify }) {
        let due = { polio: 10, hepatites1: 4, bcg: 10, dpt1: 10, Hepa1: 10, opv1: 10, dpt2: 10, Hepa2: 10, opv2: 10, dpt3: 10, Hepa3: 10, opv3: 10, Dadara1: 10, Nutri1: 10, Dptbooster: 10, Dadara2: 10 };
        let a = {};
        let i = 0;
        let count = 0;
        notify.forEach(element => {
            // if (element.CName === 'Anusha') {
            //     a[i] = element;
            // }
            const dob = new Date(element.DPickdob);
            const todayDate = new Date();
            const diff = Math.abs(dob.getTime() - todayDate.getTime());
            const d = Math.ceil(diff / (1000 * 3600 * 24));
            // console.log('diffrerence between date here', d);
            // console.log('polio dure date here', due.polio);
            // console.log('polio dure date here', due.hepatites1);
            const size = Object.keys(due).length;
            console.log('object size here here', size);
            if (d + 5 > due.polio) {
                console.log('inside polio here');
                if ('poliodate' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.polio = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give polio');
                    // eslint-disable-next-line no-param-reassign
                    element.polio = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.polio = 'No';
            }
            if (d + 5 > due.hepatites1) {
                console.log('inside heap1 here');
                if ('hepa' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.heap1 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.heap1 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.heap1 = 'No';
            }
            if (d + 5 > due.bcg) {
                console.log('inside heap1 here');
                if ('BCG' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.bcg = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.bcg = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.bcg = 'No';
            }
            if (d + 5 > due.dpt1) {
                console.log('inside heap1 here');
                if ('DPT1' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.dpt1 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.dpt1 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.dpt1 = 'No';
            }
            if (d + 5 > due.Hepa1) {
                console.log('inside heap1 here');
                if ('hepa1' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.Hepa1 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.Hepa1 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.Hepa1 = 'No';
            }
            if (d + 5 > due.opv1) {
                console.log('inside heap1 here');
                if ('OPV1' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.opv1 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.opv1 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.opv1 = 'No';
            }
            if (d + 5 > due.dpt2) {
                console.log('inside heap1 here');
                if ('DPT2' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.dpt2 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.dpt2 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.dpt2 = 'No';
            }
            if (d + 5 > due.Hepa2) {
                console.log('inside heap1 here');
                if ('hepa2' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.Hepa2 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.Hepa2 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.Hepa2 = 'No';
            }
            if (d + 5 > due.opv2) {
                console.log('inside heap1 here');
                if ('OPV2' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.opv2 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.opv2 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.opv2 = 'No';
            }
            if (d + 5 > due.dpt3) {
                console.log('inside heap1 here');
                if ('DPT3' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.dpt3 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.dpt3 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.dpt3 = 'No';
            }
            if (d + 5 > due.Hepa3) {
                console.log('inside heap1 here');
                if ('hepa3' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.Hepa3 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.Hepa3 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.Hepa3 = 'No';
            }
            if (d + 5 > due.opv3) {
                console.log('inside heap1 here');
                if ('OPV3' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.opv3 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.opv3 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.opv3 = 'No';
            }
            if (d + 5 > due.Dadara1) {
                console.log('inside heap1 here');
                if ('dadara1' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.Dadara1 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.Dadara1 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.Dadara1 = 'No';
            }
            if (d + 5 > due.Nutri1) {
                console.log('inside heap1 here');
                if ('nutri1' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.Nutri1 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.Nutri1 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.Nutri1 = 'No';
            }
            if (d + 5 > due.Dptbooster) {
                console.log('inside heap1 here');
                if ('dptbooster' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.Dptbooster = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.Dptbooster = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.Dptbooster = 'No';
            }
            if (d + 5 > due.Dadara2) {
                console.log('inside heap1 here');
                if ('dadara2' in element) {
                    // eslint-disable-next-line no-param-reassign
                    element.Dadara2 = 'No';
                    console.log('key exists here');
                } else {
                    // console.log('key not exsists here');
                    // console.log('print give heapaties here');
                    // eslint-disable-next-line no-param-reassign
                    element.Dadara2 = 'yes';
                    count++;
                }
            } else {
                // eslint-disable-next-line no-param-reassign
                element.Dadara2 = 'No';
            }
            console.log(element.polio);
            console.log(element.heap1);
            console.log(element.bcg);
            console.log(element.dpt1);
            console.log(element.Hepa1);
            console.log(element.opv1);
            console.log(element.dpt2);
            console.log(element.Hepa2);
            console.log(element.opv2);
            console.log(element.dpt3);
            console.log(element.Hepa3);
            console.log(element.opv3);
            console.log(element.dadara1);
            console.log(element.Nutri1);
            console.log(element.Dptbooster);
            console.log(element.Dadara2);
            if (count > 0) {
                a[i] = element;
                i++;
                count = 0;
            }
        });
        console.log('notification comes here', a);
        const values = Object.values(a);
        this.state = {
            resultset: values,
            searchName: ''
        };
    }

    renderRow(notify) {
        return <ListNotification notify={notify} />;
    }

    render() {
        const json = this.state.resultset;
        const name = this.state.searchName;
        let jsonsearch;
        if (name !== '') {
            jsonsearch = json.filter((item) => {
                const itemData = `${item.CName}`;
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
            jsonsearch = { 0: { CName: 'No Record Found' } };
        }
        const dataSource = ds.cloneWithRows(jsonsearch);

        return (
            <ScrollView>

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
    // const { Loading } = state.injection;
    const notify = _.map(state.notify, (val, uid) => ({ ...val, uid }));
    return { notify };
};

export default connect(mapStateToProps, { NotificationFetch })(InjectionNotification);
